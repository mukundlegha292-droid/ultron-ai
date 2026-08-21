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
      <div className="avatar-grid" />
      <svg className="ultron-face-svg" viewBox="0 0 420 520" role="img" aria-label="Futuristic metallic ULTRON face">
        <defs>
          <linearGradient id="helmet" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f0fcff" />
            <stop offset="0.15" stopColor="#8ed9ef" />
            <stop offset="0.36" stopColor="#2d6b89" />
            <stop offset="0.52" stopColor="#0e2b3d" />
            <stop offset="0.72" stopColor="#4c9ab9" />
            <stop offset="0.9" stopColor="#071620" />
            <stop offset="1" stopColor="#02090f" />
          </linearGradient>
          <linearGradient id="plate" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d7f8ff" stopOpacity=".95" />
            <stop offset="0.28" stopColor="#5e9fb8" />
            <stop offset="0.58" stopColor="#214c63" />
            <stop offset="1" stopColor="#06131d" />
          </linearGradient>
          <linearGradient id="jaw" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d6f8ff" />
            <stop offset=".25" stopColor="#70bed8" />
            <stop offset=".62" stopColor="#214e66" />
            <stop offset="1" stopColor="#040b11" />
          </linearGradient>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#63dfff" stopOpacity="0" />
            <stop offset=".5" stopColor="#c9f7ff" stopOpacity=".9" />
            <stop offset="1" stopColor="#63dfff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="eye" cx="50%" cy="50%" r="72%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".13" stopColor="#f5b7ff" />
            <stop offset=".34" stopColor="#be56f0" />
            <stop offset=".62" stopColor="#7620c7" />
            <stop offset="1" stopColor="#180021" />
          </radialGradient>
          <filter id="eyeGlow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="metalGlow" x="-30%" y="-20%" width="160%" height="150%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="11" />
          </filter>
        </defs>

        <ellipse cx="210" cy="254" rx="174" ry="226" fill="rgba(36,159,214,.05)" stroke="rgba(111,227,255,.20)" strokeWidth="2" />
        <ellipse cx="210" cy="470" rx="94" ry="24" fill="rgba(63,212,255,.18)" filter="url(#soft)" />

        <path d="M210 24 C126 24 72 80 66 157 L78 332 C84 421 132 472 210 486 C288 472 336 421 342 332 L354 157 C348 80 294 24 210 24Z" fill="url(#helmet)" stroke="#a6efff" strokeOpacity=".80" strokeWidth="3" filter="url(#metalGlow)" />

        <path d="M210 36 L181 85 L210 104 L239 85Z" fill="#effdff" opacity=".78" />
        <path d="M181 48 L161 77 L168 154 L192 126Z" fill="#c9f6ff" opacity=".16" />
        <path d="M239 48 L259 77 L252 154 L228 126Z" fill="#c9f6ff" opacity=".16" />

        <path d="M133 66 L178 43 L171 132 L126 153Z" fill="url(#plate)" stroke="#6ee1ff" strokeOpacity=".50" />
        <path d="M287 66 L242 43 L249 132 L294 153Z" fill="url(#plate)" stroke="#6ee1ff" strokeOpacity=".50" />
        <path d="M91 144 L146 118 L136 217 L83 235Z" fill="#143b51" stroke="#64ddff" strokeOpacity=".40" />
        <path d="M329 144 L274 118 L284 217 L337 235Z" fill="#143b51" stroke="#64ddff" strokeOpacity=".40" />

        <path d="M114 160 L178 139 L197 179 L173 216 L114 201Z" fill="#08131d" stroke="#9aeaff" strokeOpacity=".52" strokeWidth="2" />
        <path d="M306 160 L242 139 L223 179 L247 216 L306 201Z" fill="#08131d" stroke="#9aeaff" strokeOpacity=".52" strokeWidth="2" />
        <path d="M124 176 L171 159 L185 179 L165 197 L128 189Z" fill="url(#eye)" filter="url(#eyeGlow)" />
        <path d="M296 176 L249 159 L235 179 L255 197 L292 189Z" fill="url(#eye)" filter="url(#eyeGlow)" />
        <path d="M130 175 L169 165" stroke="#fff" strokeOpacity=".72" strokeWidth="2" />
        <path d="M290 175 L251 165" stroke="#fff" strokeOpacity=".72" strokeWidth="2" />

        <path d="M210 111 L181 165 L188 259 L210 278 L232 259 L239 165Z" fill="url(#plate)" stroke="#a1edff" strokeOpacity=".58" strokeWidth="2" />
        <path d="M210 133 L198 172 L210 192 L222 172Z" fill="#d6f9ff" opacity=".72" />
        <path d="M187 210 L210 224 L233 210" fill="none" stroke="url(#edge)" strokeWidth="4" />
        <path d="M176 222 L210 240 L244 222 L248 271 L210 296 L172 271Z" fill="#081721" stroke="#6de2ff" strokeOpacity=".40" />
        <path d="M202 225 L218 225 L225 266 L210 277 L195 266Z" fill="#2b7899" opacity=".90" />

        <path d="M90 230 L152 226 L183 284 L165 348 L110 326 L81 275Z" fill="url(#plate)" stroke="#7be5ff" strokeOpacity=".52" strokeWidth="2" />
        <path d="M330 230 L268 226 L237 284 L255 348 L310 326 L339 275Z" fill="url(#plate)" stroke="#7be5ff" strokeOpacity=".52" strokeWidth="2" />
        <path d="M104 253 L142 246 L157 276 L122 287Z" fill="#06202e" stroke="#64dfff" strokeOpacity=".28" />
        <path d="M316 253 L278 246 L263 276 L298 287Z" fill="#06202e" stroke="#64dfff" strokeOpacity=".28" />

        <path d="M119 314 L177 303 L191 358 L164 404 L128 378Z" fill="#0a1d28" stroke="#7ce5ff" strokeOpacity=".46" />
        <path d="M301 314 L243 303 L229 358 L256 404 L292 378Z" fill="#0a1d28" stroke="#7ce5ff" strokeOpacity=".46" />

        <path d="M153 355 L210 342 L267 355 L258 432 L242 458 L178 458 L162 432Z" fill="url(#jaw)" stroke="#b2f3ff" strokeOpacity=".62" strokeWidth="3" />
        <path d="M170 365 L197 374 L184 406 L165 389Z" fill="#d7f8ff" opacity=".28" />
        <path d="M250 365 L223 374 L236 406 L255 389Z" fill="#d7f8ff" opacity=".28" />
        <path d="M176 419 L210 435 L244 419 L232 451 L210 463 L188 451Z" fill="#061119" stroke="#83e9ff" strokeOpacity=".68" />
        <path d="M186 423 L210 430 L234 423" fill="none" stroke="#c9f7ff" strokeOpacity=".52" strokeWidth="2" />

        <path d="M69 276 L91 292 M351 276 L329 292 M88 379 L113 392 M332 379 L307 392" stroke="#a4efff" strokeOpacity=".54" strokeWidth="4" strokeLinecap="round" />

        <path d="M153 462 L173 497 L193 474 L210 500 L227 474 L247 497 L267 462" fill="#0b2230" stroke="#75e2ff" strokeOpacity=".55" strokeWidth="2" />
        <path d="M170 486 L250 486" stroke="#8de8ff" strokeOpacity=".45" strokeWidth="2" />
      </svg>
      <div className="avatar-scanline" />
      <div className="avatar-scanline avatar-scanline-two" />
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

  useEffect(() => inputRef.current?.focus(), []);

  const addEvent = (text) => setEvents((current) => [...current.slice(-5), text]);

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
          <span>ULTRON AI</span>
          <small>QUANTUM-NEURAL COMMAND SYSTEM</small>
        </div>
        <div className="top-center">
          <strong>ULTRON AI</strong>
          <span>v2.0</span>
          <small>Hyper-Intelligent Platform. Your Strategic Quantum-Neural Partner.</small>
        </div>
        <div className="system-state"><span className="status-dot" />SYSTEM ONLINE</div>
      </header>

      <section className="dashboard">
        <aside className="panel left-panel">
          <div className="panel-label">SYSTEM</div>
          <div className="metric"><span>CORE</span><strong>READY</strong></div>
          <div className="metric"><span>VOICE</span><strong>{listening ? 'LISTENING' : 'STANDBY'}</strong></div>
          <div className="metric"><span>MEMORY</span><strong>LOCAL</strong></div>
          <div className="metric"><span>TOOLS</span><strong>LOCKED</strong></div>
          <button className="voice-button" onClick={toggleVoice} type="button">
            <span className="voice-ring" />{listening ? 'STOP VOICE' : 'ACTIVATE VOICE'}
          </button>
        </aside>

        <section className="core-stage" aria-label="ULTRON core interface">
          <div className="core-title">ULTRON CORE <span>AI SYSTEM ONLINE</span></div>
          <div className="reticle reticle-one" />
          <div className="reticle reticle-two" />
          <div className="reticle reticle-three" />
          <div className="holo-orb" aria-hidden="true" />
          <div className="holo-latitude" aria-hidden="true" />
          <UltronFace />
          <div className="core-caption">ULTRON CORE // NEURAL AVATAR // ONLINE</div>
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
