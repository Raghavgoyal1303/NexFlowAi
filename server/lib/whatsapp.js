import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function notifyRaghav(message) {
  try {
    // Send via WhatsApp (sandbox or production)
    const result = await client.messages.create({
      body: message,
      from: 'whatsapp:+14155238886', // Twilio Sandbox number
      to: 'whatsapp:+919999999999' // Raghav's verified WhatsApp
    });
    return result;
  } catch (err) {
    console.error('[WhatsApp Error]', err.message);
  }
}
