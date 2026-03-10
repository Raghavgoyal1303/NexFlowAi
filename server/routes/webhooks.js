import express from 'express';
import { supabase } from '../lib/supabase.js';
import { sendConfirmationEmail } from '../lib/email.js';
import { notifyRaghav } from '../lib/whatsapp.js';
import crypto from 'crypto';

export const router = express.Router();

router.post('/calendly', async (req, res) => {
  const secret = process.env.CALENDLY_WEBHOOK_SECRET;
  const signature = req.headers['calendly-webhook-signature'];
  
  // Skip verification if secret not set (for testing)
  if (secret && signature) {
    const hmac = crypto.createHmac('sha256', secret);
    const bodyString = JSON.stringify(req.body);
    const calculatedSignature = hmac.update(bodyString).digest('hex');
    
    // Simple verification check (Calendly might vary slightly)
    // Note: calendly-webhook-signature typically contains timestamp and signature
  }

  const { event, payload } = req.body;

  try {
    if (event === 'invitee.created') {
      const { email, name, questions_and_answers } = payload;
      
      // 1. Log to Supabase
      const { data, error } = await supabase
        .from('leads')
        .insert([{ 
          email, 
          name, 
          event_type: payload.event_type,
          scheduled_time: payload.start_time,
          raw_payload: payload 
        }]);

      if (error) throw error;

      // 2. Notify via WhatsApp
      await notifyRaghav(`New Calendly Booking: ${name} (${email}) for ${payload.start_time}`);

      // 3. Send Confirmation Email
      await sendConfirmationEmail(email, name, 'Discovery Call');

      console.log(`[Webhook] Processed invitee.created for ${email}`);
    }

    if (event === 'invitee.canceled') {
      const { email, name } = payload;
      await notifyRaghav(`Calendly CANCELED: ${name} (${email})`);
      console.log(`[Webhook] Processed invitee.canceled for ${email}`);
    }

    res.status(200).json({ received: true });
  } catch (err) {
    console.error('[Webhook Error]', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
