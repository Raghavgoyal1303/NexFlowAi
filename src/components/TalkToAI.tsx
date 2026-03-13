import { useEffect } from 'react';

export function TalkToAI() {
  useEffect(() => {
    // Inject Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Inject styles — matched to website's purple theme
    const style = document.createElement('style');
    style.id = 'cb-styles';
    style.textContent = `
      #cb-bubble {
        position: fixed; bottom: 28px; right: 28px;
        width: 58px; height: 58px;
        background: linear-gradient(135deg, #7c3aed, #9333ea);
        border-radius: 50%; cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 8px 32px rgba(124,58,237,0.5), 0 2px 8px rgba(0,0,0,0.3);
        transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease;
        z-index: 99999; border: none; outline: none;
      }
      #cb-bubble:hover { transform: scale(1.1); box-shadow: 0 12px 40px rgba(124,58,237,0.65); }
      #cb-bubble.open { transform: scale(0.92); }
      #cb-bubble svg { transition: opacity 0.2s, transform 0.2s; }
      #cb-bubble .cb-icon-chat { opacity: 1; transform: rotate(0deg) scale(1); }
      #cb-bubble .cb-icon-close { opacity: 0; transform: rotate(-90deg) scale(0.5); position: absolute; }
      #cb-bubble.open .cb-icon-chat { opacity: 0; transform: rotate(90deg) scale(0.5); }
      #cb-bubble.open .cb-icon-close { opacity: 1; transform: rotate(0deg) scale(1); }
      #cb-bubble::before {
        content: ''; position: absolute; inset: -4px; border-radius: 50%;
        border: 2px solid rgba(124,58,237,0.4);
        animation: cb-pulse 2.5s ease-out infinite;
      }
      @keyframes cb-pulse {
        0% { transform: scale(1); opacity: 0.8; }
        100% { transform: scale(1.55); opacity: 0; }
      }
      #cb-window {
        position: fixed; bottom: 100px; right: 28px;
        width: 370px; max-height: 580px;
        background: #0d0d1a;
        border: 1px solid rgba(124,58,237,0.2);
        border-radius: 20px; display: flex; flex-direction: column;
        box-shadow: 0 24px 80px rgba(0,0,0,0.7), 0 4px 24px rgba(124,58,237,0.2);
        overflow: hidden; z-index: 99998;
        transform: translateY(20px) scale(0.95); opacity: 0; pointer-events: none;
        transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), opacity 0.25s ease;
        font-family: 'Sora', sans-serif;
      }
      #cb-window.open { transform: translateY(0) scale(1); opacity: 1; pointer-events: all; }
      #cb-header {
        padding: 16px 18px;
        background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(147,51,234,0.08));
        border-bottom: 1px solid rgba(124,58,237,0.15);
        display: flex; align-items: center; gap: 12px;
      }
      #cb-avatar {
        width: 38px; height: 38px;
        background: linear-gradient(135deg, #7c3aed, #9333ea);
        border-radius: 50%; display: flex; align-items: center; justify-content: center;
        flex-shrink: 0; font-size: 18px; overflow: hidden;
        box-shadow: 0 0 16px rgba(124,58,237,0.4);
      }
      #cb-header-info { flex: 1; }
      #cb-header-name { font-size: 0.88rem; font-weight: 600; color: #f0f0fa; letter-spacing: -0.01em; }
      #cb-header-status {
        font-size: 0.72rem; color: #22c55e;
        display: flex; align-items: center; gap: 5px; margin-top: 2px;
      }
      #cb-header-status::before {
        content: ''; width: 6px; height: 6px;
        background: #22c55e; border-radius: 50%;
        animation: cb-blink 2s ease-in-out infinite;
      }
      @keyframes cb-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      #cb-close-window {
        background: none; border: none; color: rgba(255,255,255,0.4);
        cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center;
        transition: color 0.2s; border-radius: 8px;
      }
      #cb-close-window:hover { color: #fff; background: rgba(255,255,255,0.05); }
      #cb-messages {
        flex: 1; overflow-y: auto; padding: 16px;
        display: flex; flex-direction: column; gap: 10px; scroll-behavior: smooth;
        background: #050508;
      }
      #cb-messages::-webkit-scrollbar { width: 4px; }
      #cb-messages::-webkit-scrollbar-thumb { background: rgba(124,58,237,0.3); border-radius: 4px; }
      .cb-msg {
        max-width: 82%; padding: 10px 14px; border-radius: 16px;
        font-size: 0.845rem; line-height: 1.55;
        animation: cb-msgIn 0.3s cubic-bezier(.34,1.56,.64,1);
      }
      @keyframes cb-msgIn {
        from { opacity: 0; transform: translateY(8px) scale(0.96); }
        to   { opacity: 1; transform: translateY(0) scale(1); }
      }
      .cb-msg.bot {
        background: rgba(255,255,255,0.05); border: 1px solid rgba(124,58,237,0.15);
        color: #e0e0f0; align-self: flex-start; border-bottom-left-radius: 4px;
      }
      .cb-msg.user {
        background: linear-gradient(135deg, #7c3aed, #9333ea);
        color: #fff; align-self: flex-end; border-bottom-right-radius: 4px;
        box-shadow: 0 4px 16px rgba(124,58,237,0.35);
      }
      .cb-typing {
        display: flex; align-items: center; gap: 5px; padding: 12px 16px;
        background: rgba(255,255,255,0.05); border: 1px solid rgba(124,58,237,0.15);
        border-radius: 16px; border-bottom-left-radius: 4px; align-self: flex-start;
      }
      .cb-typing span {
        width: 7px; height: 7px; background: #7c3aed; border-radius: 50%;
        animation: cb-bounce 1.2s ease-in-out infinite;
      }
      .cb-typing span:nth-child(2) { animation-delay: 0.15s; }
      .cb-typing span:nth-child(3) { animation-delay: 0.3s; }
      @keyframes cb-bounce {
        0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
        30% { transform: translateY(-6px); opacity: 1; }
      }
      #cb-input-area {
        padding: 12px 14px; border-top: 1px solid rgba(124,58,237,0.12);
        display: flex; align-items: center; gap: 10px;
        background: #0d0d1a;
      }
      #cb-input {
        flex: 1; background: rgba(255,255,255,0.05);
        border: 1px solid rgba(124,58,237,0.2); border-radius: 12px;
        padding: 10px 14px; color: #e8e8f0; font-size: 0.845rem;
        font-family: 'Sora', sans-serif; outline: none;
        transition: border-color 0.2s, background 0.2s;
        resize: none; line-height: 1.4; overflow: hidden;
      }
      #cb-input::placeholder { color: #4b5563; }
      #cb-input:focus { border-color: rgba(124,58,237,0.6); background: rgba(124,58,237,0.05); }
      #cb-send {
        width: 40px; height: 40px;
        background: linear-gradient(135deg, #7c3aed, #9333ea);
        border: none; border-radius: 12px; cursor: pointer; flex-shrink: 0;
        display: flex; align-items: center; justify-content: center;
        transition: transform 0.2s cubic-bezier(.34,1.56,.64,1), opacity 0.2s;
        box-shadow: 0 4px 14px rgba(124,58,237,0.4);
      }
      #cb-send:hover { transform: scale(1.08); }
      #cb-send:active { transform: scale(0.95); }
      #cb-send:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
      #cb-greeting {
        position: fixed; bottom: 100px; right: 22px; z-index: 99997;
        display: flex; flex-direction: column; align-items: flex-end; gap: 6px;
        pointer-events: none;
        animation: cb-greet-in 0.6s cubic-bezier(.34,1.56,.64,1) 1.2s both;
      }
      #cb-greeting.hide { animation: cb-greet-out 0.3s ease forwards; }
      @keyframes cb-greet-in {
        from { opacity: 0; transform: translateY(14px) scale(0.88); }
        to   { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes cb-greet-out { to { opacity: 0; transform: translateY(8px) scale(0.92); } }
      #cb-greeting-bubble {
        background: linear-gradient(135deg, #0d0d1a, #111127);
        border: 1px solid rgba(124,58,237,0.4); border-radius: 18px 18px 4px 18px;
        padding: 10px 16px;
        box-shadow: 0 8px 32px rgba(124,58,237,0.3), 0 2px 8px rgba(0,0,0,0.5);
      }
      #cb-greeting-text {
        font-family: 'Sora', sans-serif; font-size: 0.88rem; font-weight: 500;
        color: #e0e0f8; white-space: nowrap;
      }
      #cb-greeting-text span {
        background: linear-gradient(90deg, #a855f7, #7c3aed);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        background-clip: text; font-weight: 600;
      }
      #cb-greeting-sub {
        font-size: 0.7rem; color: #6b7280;
        font-family: 'JetBrains Mono', monospace; text-align: right; padding-right: 4px;
      }
      @media (max-width: 420px) {
        #cb-window { width: calc(100vw - 24px); right: 12px; bottom: 88px; }
        #cb-bubble { bottom: 20px; right: 16px; }
        #cb-greeting { right: 10px; bottom: 96px; }
      }
    `;
    document.head.appendChild(style);

    // Inject HTML
    const container = document.createElement('div');
    container.id = 'cb-root';
    container.innerHTML = `
      <div id="cb-greeting">
        <div id="cb-greeting-bubble">
          <div id="cb-greeting-text">Hi! <span>Let's talk..</span> 👋</div>
        </div>
      </div>
      <button id="cb-bubble" aria-label="Open chat">
        <svg class="cb-icon-chat" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="white"/>
        </svg>
        <svg class="cb-icon-close" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M15 5L5 15M5 5L15 15" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </button>
      <div id="cb-window" role="dialog" aria-label="Chat">
        <div id="cb-header">
          <div id="cb-avatar">✦</div>
          <div id="cb-header-info">
            <div id="cb-header-name">AI Assistant — NexFlowAI</div>
            <div id="cb-header-status">Online — ready to help</div>
          </div>
          <button id="cb-close-window" aria-label="Close Chat">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <div id="cb-messages"></div>
        <div id="cb-input-area">
          <textarea id="cb-input" rows="1" placeholder="Ask me anything..." maxlength="500"></textarea>
          <button id="cb-send" aria-label="Send">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M16 9L2 2L5 9L2 16L16 9Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(container);

    // Inject script
    const script = document.createElement('script');
    script.id = 'cb-script';
    script.textContent = `
      (function() {
        const WEBHOOK_URL = 'https://n8n-1-wun9.onrender.com/webhook/AIchatbot';
        const WELCOME_MSG = "Hey! 👋 Welcome to NexFlowAI. What can I help you with today?";
        const session_id = localStorage.getItem('cb_session_id') || (() => {
          const id = 'user_' + Date.now();
          localStorage.setItem('cb_session_id', id);
          return id;
        })();
        let isOpen = false, isLoading = false, chatHistory = [];
        const bubble   = document.getElementById('cb-bubble');
        const window_  = document.getElementById('cb-window');
        const messages = document.getElementById('cb-messages');
        const input    = document.getElementById('cb-input');
        const sendBtn  = document.getElementById('cb-send');
        const greeting = document.getElementById('cb-greeting');
        const closeWin = document.getElementById('cb-close-window');
        addMessage(WELCOME_MSG, 'bot');
        bubble.addEventListener('click', () => {
          isOpen = !isOpen;
          bubble.classList.toggle('open', isOpen);
          window_.classList.toggle('open', isOpen);
          if (isOpen) {
            greeting.classList.add('hide');
            setTimeout(() => { greeting.style.display = 'none'; }, 300);
            setTimeout(() => input.focus(), 300);
          }
        });
        closeWin.addEventListener('click', (e) => {
          e.stopPropagation();
          isOpen = false;
          bubble.classList.remove('open');
          window_.classList.remove('open');
        });
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
        });
        input.addEventListener('input', () => {
          input.style.height = 'auto';
          input.style.height = Math.min(input.scrollHeight, 100) + 'px';
        });
        sendBtn.addEventListener('click', sendMessage);
        async function sendMessage() {
          const text = input.value.trim();
          if (!text || isLoading) return;
          addMessage(text, 'user');
          chatHistory.push({ role: 'user', content: text });
          input.value = ''; input.style.height = 'auto';
          setLoading(true);
          const typingEl = showTyping();
          try {
            const res = await fetch(WEBHOOK_URL, {
              method: 'POST', headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ message: text, history: chatHistory, session_id })
            });
            const data = await res.json();
            const reply = data.reply || 'Sorry, something went wrong.';
            removeTyping(typingEl);
            addMessage(reply, 'bot');
            chatHistory.push({ role: 'assistant', content: reply });
          } catch(err) {
            removeTyping(typingEl);
            addMessage('⚠️ Could not connect. Please try again.', 'bot');
          }
          setLoading(false); input.focus();
        }
        function addMessage(text, role) {
          const el = document.createElement('div');
          el.className = 'cb-msg ' + role; el.textContent = text;
          messages.appendChild(el); messages.scrollTop = messages.scrollHeight;
        }
        function showTyping() {
          const el = document.createElement('div');
          el.className = 'cb-typing';
          el.innerHTML = '<span></span><span></span><span></span>';
          messages.appendChild(el); messages.scrollTop = messages.scrollHeight;
          return el;
        }
        function removeTyping(el) { if (el && el.parentNode) el.parentNode.removeChild(el); }
        function setLoading(state) {
          isLoading = state; sendBtn.disabled = state; input.disabled = state;
        }
      })();
    `;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.getElementById('cb-root')?.remove();
      document.getElementById('cb-styles')?.remove();
      document.getElementById('cb-script')?.remove();
    };
  }, []);

  return null;
}
