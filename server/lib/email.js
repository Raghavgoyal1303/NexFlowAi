import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(email, name, type) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'NexFlowAI <onboarding@resend.dev>', // Replace with verified domain
      to: [email],
      subject: `Confirmed: Your ${type} with NexFlowAI`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #050508; color: #fff; padding: 40px; border-radius: 20px;">
          <h1 style="color: #a855f7;">NexFlowAI</h1>
          <h2>Hi ${name},</h2>
          <p>Your <strong>${type}</strong> has been successfully scheduled.</p>
          <p>We're excited to help you build automated systems that scale.</p>
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #333;">
            <p style="color: #888; font-size: 12px;">© ${new Date().getFullYear()} NexFlowAI Automation</p>
          </div>
        </div>
      `
    });

    if (error) throw error;
    return data;
  } catch (err) {
    console.error('[Email Error]', err.message);
  }
}
