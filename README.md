# NexFlowAI - Frontend & Backend

This repository contains the full NexFlowAI website, including a React/Vite frontend and a Node.js/Express backend for integrations.

## 🚀 Getting Started

### 1. Frontend Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### 2. Backend Setup
```bash
cd server
# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env and add your keys (Supabase, Resend, Twilio, Calendly)
```

### 3. Running Both (Recommended)
From the root directory:
```bash
npm run dev:all
```
This runs both the Vite frontend (port 5173) and the Express server (port 5000) concurrently.

## 🛠️ Integrations

### Calendly Popups
All "Book Discovery Call" and "$250 Deep-Dive" buttons are wired to `react-calendly` popups. 
- Global trigger logic in `App.tsx`
- Utility functions in `src/utils/calendly.ts`

### Tidio Chat
The "Talk to AI" floating button opens the Tidio chat interface.
- Widget script in `index.html`
- Manual trigger in `TalkToAI.tsx`

### Calendly Webhooks
The server handles `invitee.created` and `invitee.canceled`:
1. Logs lead data to **Supabase** (`leads` table)
2. Notifies Raghav via **WhatsApp** (Twilio)
3. Sends confirmation email to client via **Resend**

## 📂 Project Structure

- `/src`: React frontend components and logic
- `/server`: Node.js/Express backend
  - `/routes`: API endpoints (webhooks, leads, contact)
  - `/lib`: Service clients (Supabase, Email, WhatsApp)
  - `/migrations`: Database schema SQL

## ⚙️ Environment Variables (Backend)

| Variable | Description |
|---|---|
| `PORT` | Server port (default 5000) |
| `FRONTEND_URL` | URL of the frontend for CORS |
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_SERVICE_KEY` | Supabase service role key |
| `CALENDLY_WEBHOOK_SECRET` | Secret for verifying Calendly webhooks |
| `RESEND_API_KEY` | API key from Resend.com |
| `TWILIO_ACCOUNT_SID` | Twilio Account SID |
| `TWILIO_AUTH_TOKEN` | Twilio Auth Token |
