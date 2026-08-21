import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const initialEvents = [
  'Core initialized',
  'Safety layer active',
  'Command interface ready',
  'Voice input available',
];

function UltronFace() {
  return (
    <div className="ultron-avatar" aria-label="ULTRON robotic core">
      <div className="avatar-glow" />
      <svg className="ultron-face-svg" viewBox="0 0 420 480" role="img" aria-label="Futuristic robotic ULTRON face">
        <defs>
          <linearGradient id="helmet" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d8f7ff" />
            <stop offset="0.2" stopColor="#5faec9" />
            <stop offset="0.48" stopColor="#123e58" />
            <stop offset="0.7" stopColor="#6bc2df" />
            <stop offset="1" stopColor="#071923" />
          </linearGradient>
          <linearGradient id="plate" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#b8efff" stopOpacity=".9" />
            <stop offset="0.45" stopColor="#255c7a" />
            <stop offset="1" stopColor="#07131d" />
          </linearGradient>
          <linearGradient id="jaw" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#9deaff" />
            <stop offset=".5" stopColor="#1e526d" />
            <stop offset="1" stopColor="#061018" />
          </linearGradient>
          <radialGradient id="eye" cx="50%" cy="50%" r="70%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".18" stopColor="#d77cff" />
            <stop offset=".5" stopColor="#8a20db" />
            <stop offset="1" stopColor="#21002f" />
          </radialGradient>
          <filter id="eyeGlow">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="metalGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <ellipse cx="210" cy="240" rx="164" ry="214" fill="rgba(36,159,214,.08)" stroke="rgba(111,227,255,.24)" strokeWidth="2" />
        <path d="M210 18 C132 18 83 68 76 143 L89 306 C95 382 142 434 210 450 C278 434 325 382 331 306 L344 143 C337 68 288 18 210 18Z" fill="url(#helmet)" stroke="#8de7ff" strokeOpacity=".65" strokeWidth="3" filter="url(#metalGlow)" />

        <path d="M210 30 L185 72 L210 88 L235 72Z" fill="#dff9ff" opacity=".75" />
        <path d="M143 63 L178 45 L171 118 L135 137Z" fill="url(#plate)" stroke="#63d5f4" strokeOpacity=".45" />
        <path d="M277 63 L242 45 L249 118 L285 137Z" fill="url(#plate)" stroke="#63d5f4" strokeOpacity=".45" />
        <path d="M105 135 L148 116 L137 192 L92 212Z" fill="#163e54" stroke="#62dfff" strokeOpacity=".35" />
        <path d="M315 135 L272 116 L283 192 L328 212Z" fill="#163e54" stroke="#62dfff" strokeOpacity=".35" />

        <path d="M122 158 L177 142 L193 172 L173 205 L124 193Z" fill="#0b1722" stroke="#73dcff" strokeOpacity=".5" strokeWidth="2" />
        <path d="M298 158 L243 142 L227 172 L247 205 L296 193Z" fill="#0b1722" stroke="#73dcff" strokeOpacity=".5" strokeWidth="2" />
        <path d="M131 170 L171 158 L180 176 L165 188 L135 182Z" fill="url(#eye)" filter="url(#eyeGlow)" />
        <path d="M289 170 L249 158 L240 176 L255 188 L285 182Z" fill="url(#eye)" filter="url(#eyeGlow)" />

        <path d="M210 113 L185 155 L191 244 L210 259 L229 244 L235 155Z" fill="url(#plate)" stroke="#8fe8ff" strokeOpacity=".52" strokeWidth="2" />
        <path d="M210 135 L202 165 L210 180 L218 165Z" fill="#c7f6ff" opacity=".7" />
        <path d="M179 201 L210 218 L241 201 L245 252 L210 274 L175 252Z" fill="#0b1a25" stroke="#69dbfb" strokeOpacity=".35" />
        <path d="M202 205 L218 205 L224 248 L210 258 L196 248Z" fill="#2a6c8a" opacity=".8" />

        <path d="M105 216 L156 219 L182 273 L161 327 L119 310 L92 264Z" fill="url(#plate)" stroke="#75e1ff" strokeOpacity=".46" strokeWidth="2" />
        <path d="M315 216 L264 219 L238 273 L259 327 L301 310 L328 264Z" fill="url(#plate)" stroke="#75e1ff" strokeOpacity=".46" strokeWidth="2" />

        <path d="M125 289 L178 282 L191 330 L166 375 L130 348Z" fill="#0b1b26" stroke="#6fddfc" strokeOpacity=".4" />
        <path d="M295 289 L242 282 L229 330 L254 375 L290 348Z" fill="#0b1b26" stroke="#6fddfc" strokeOpacity=".4" />

        <path d="M163 317 L210 331 L257 317 L250 389 L210 432 L170 389Z" fill="url(#jaw)" stroke="#a0efff" strokeOpacity=".55" strokeWidth="3" />
        <path d="M174 345 L199 357 L186 385 L171 370Z" fill="#bdefff" opacity=".35" />
        <path d="M246 345 L221 357 L234 385 L249 370Z" fill="#bdefff" opacity=".35" />
        <path d="M181 399 L210 414 L239 399 L227 423 L210 431 L193 423Z" fill="#07131b" stroke="#79e5ff" strokeOpacity=".55" />
        <path d="M191 403 L210 409 L229 403" fill="none" stroke="#9eecff" strokeOpacity=".45" strokeWidth="2" />

        <path d="M96 247 L111 265 M324 247 L309 265 M113 347 L131 365 M307 347 L289 365" stroke="#8de9ff" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="avatar-scanline" />
    </div>
  );
}

function App() {
  const [command, setCommand] = useState('');
  const [events, setEvents] = useState(initialEvents);
  const [listening, setListening] = useState(false);
  const [lastCommand, setLastCommand] = useState('');
  const inputRef = useRef(null);

  const recognitionSupported = useMemo(
    () => typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window),
    []
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const addEvent = (text) => {
    setEvents((current) => [...current.slice(-5), text]);
  };

  const runCommand = (value = command) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    setLastCommand(trimmed);
    addEvent(`Command received: ${trimmed}`);
    setCommand('');
  };

  const toggleVoice = () => {
    if (!recognitionSupported) {
      addEvent('Voice API unavailable in this browser');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setListening(true);
    addEvent('Voice channel listening');

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setCommand(transcript);
      setListening(false);
      addEvent('Voice command captured');
    };

    recognition.onerror = () => {
      setListening(false);
      addEvent('Voice channel error');
    };

    recognition.onend = () => setListening(false);
    recognition.start();
  };

  return (
    <main className={`shell ${listening ? 'is-listening' : ''}`}>
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" />
          <span>ULTRON</span>
          <small>AI COMMAND SYSTEM</small>
        </div>
        <div className="system-state"><span className="status-dot" />SYSTEM ONLINE</div>
      </header>

      <section className="dashboard">
        <aside className="panel left-panel">
          <div className="panel-label">SYSTEM</div>
          <div className="metric"><span>CORE</span><strong>READY</strong></div>
          <div className="metric"><span>VOICE</span><strong>{listening ? 'LISTENING' : 'STANDBY'}</strong></div>
          <div className="metric"><span>TOOLS</span><strong>LOCKED</strong></div>
          <div className="metric"><span>MEMORY</span><strong>LOCAL</strong></div>
          <button className="voice-button" onClick={toggleVoice} type="button">
            <span className="voice-ring" />{listening ? 'STOP VOICE' : 'ACTIVATE VOICE'}
          </button>
        </aside>

        <section className="core-stage" aria-label="ULTRON core interface">
          <div className="reticle reticle-one" />
          <div className="reticle reticle-two" />
          <div className="holo-orb" aria-hidden="true" />
          <UltronFace />
          <div className="core-caption">ULTRON CORE // NEURAL AVATAR</div>
          <div className="command-line">
            {lastCommand ? `LAST COMMAND: ${lastCommand.toUpperCase()}` : 'AWAITING COMMAND'}
            <span className="cursor">_</span>
          </div>
        </section>

        <aside className="panel right-panel">
          <div className="panel-label">ACTIVITY</div>
          <div className="activity-feed">
            {events.map((event, index) => (
              <div className="activity" key={`${event}-${index}`}><span className="tiny-dot" /><span>{event}</span></div>
            ))}
          </div>
        </aside>
      </section>

      <footer className="command-bar">
        <span className="prompt">&gt;</span>
        <input
          ref={inputRef}
          value={command}
          onChange={(event) => setCommand(event.target.value)}
          onKeyDown={(event) => { if (event.key === 'Enter') runCommand(); }}
          placeholder="Type a command to ULTRON..."
          aria-label="ULTRON command input"
        />
        <button className="send-button" type="button" onClick={() => runCommand()}>EXECUTE</button>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
