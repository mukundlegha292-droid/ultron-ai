import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const initialEvents = [
  'Core initialized',
  'Safety layer active',
  'Command interface ready',
  'Voice input available',
];

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
        <div className="system-state">
          <span className="status-dot" />
          SYSTEM ONLINE
        </div>
      </header>

      <section className="dashboard">
        <aside className="panel left-panel">
          <div className="panel-label">SYSTEM</div>
          <div className="metric"><span>CORE</span><strong>READY</strong></div>
          <div className="metric"><span>VOICE</span><strong>{listening ? 'LISTENING' : 'STANDBY'}</strong></div>
          <div className="metric"><span>TOOLS</span><strong>LOCKED</strong></div>
          <div className="metric"><span>MEMORY</span><strong>LOCAL</strong></div>
          <button className="voice-button" onClick={toggleVoice} type="button">
            <span className="voice-ring" />
            {listening ? 'STOP VOICE' : 'ACTIVATE VOICE'}
          </button>
        </aside>

        <section className="core-stage" aria-label="ULTRON core interface">
          <div className="orb-halo halo-one" />
          <div className="orb-halo halo-two" />
          <div className="reticle reticle-one" />
          <div className="reticle reticle-two" />
          <div className="core-orb" aria-hidden="true"><span>U</span></div>
          <div className="core-caption">ULTRON CORE</div>
          <div className="command-line">
            {lastCommand ? `LAST COMMAND: ${lastCommand.toUpperCase()}` : 'AWAITING COMMAND'}
            <span className="cursor">_</span>
          </div>
        </section>

        <aside className="panel right-panel">
          <div className="panel-label">ACTIVITY</div>
          <div className="activity-feed">
            {events.map((event, index) => (
              <div className="activity" key={`${event}-${index}`}>
                <span className="tiny-dot" />
                <span>{event}</span>
              </div>
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
          onKeyDown={(event) => {
            if (event.key === 'Enter') runCommand();
          }}
          placeholder="Type a command to ULTRON..."
          aria-label="ULTRON command input"
        />
        <button className="send-button" type="button" onClick={() => runCommand()}>
          EXECUTE
        </button>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
