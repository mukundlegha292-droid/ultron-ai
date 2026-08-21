import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const navItems = ['Dashboard', 'Chat', 'Tasks', 'Files', 'Browser', 'Code', 'System Tools', 'Memory', 'Settings'];
const quickApps = ['▶ YouTube', '◉ GitHub', '</> VS Code', 'G Google', '▣ Notion', '◉ Drive', '◌ WhatsApp', 'in LinkedIn'];
const suggestions = [
  'Open my project folder',
  'Analyze this document',
  'Search on the web',
  'Show system performance',
];

function RobotFace() {
  return (
    <div className="robot-scene" aria-label="ULTRON core visualization">
      <div className="energy-sphere sphere-back" />
      <div className="energy-orbit orbit-a" />
      <div className="energy-orbit orbit-b" />
      <div className="energy-orbit orbit-c" />
      <div className="robot-head">
        <div className="robot-forehead" />
        <div className="robot-brow brow-left" />
        <div className="robot-brow brow-right" />
        <div className="robot-eye eye-left" />
        <div className="robot-eye eye-right" />
        <div className="robot-cheek cheek-left" />
        <div className="robot-cheek cheek-right" />
        <div className="robot-nose" />
        <div className="robot-mouth" />
        <div className="robot-jaw" />
        <div className="robot-neck" />
        <div className="robot-plate plate-left" />
        <div className="robot-plate plate-right" />
      </div>
      <div className="robot-pedestal">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function App() {
  const [command, setCommand] = useState('');
  const [listening, setListening] = useState(false);
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [events, setEvents] = useState([
    'Core initialized',
    'Safety layer active',
    'Command interface ready',
    'Voice recognition idle',
  ]);
  const inputRef = useRef(null);

  const recognitionSupported = useMemo(
    () => typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window),
    []
  );

  useEffect(() => inputRef.current?.focus(), []);

  const addEvent = (text) => setEvents((current) => [...current.slice(-4), text]);

  const runCommand = (value = command) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    addEvent(`Command executed: ${trimmed}`);
    setCommand('');
  };

  const toggleVoice = () => {
    if (!recognitionSupported) {
      addEvent('Voice recognition unavailable');
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    setListening(true);
    addEvent('Voice recognition active');
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setCommand(text);
      addEvent(`Heard: ${text}`);
      setListening(false);
    };
    recognition.onerror = () => {
      addEvent('Voice recognition error');
      setListening(false);
    };
    recognition.onend = () => setListening(false);
    recognition.start();
  };

  return (
    <main className={`ultron-app ${listening ? 'listening' : ''}`}>
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-emblem">U</div>
          <div>
            <div className="brand-name">ULTRON AI <span>v2.0</span></div>
            <div className="brand-subtitle">Hyper-Intelligent Platform. Your Strategic Quantum-Neural Partner.</div>
          </div>
        </div>
        <div className="top-status">
          <div className="top-card"><span>SYSTEM STATUS</span><strong><i /> ONLINE</strong></div>
          <div className="top-card clock"><strong>10:30 PM</strong><span>21 AUG 2026</span></div>
          <button className="window-control" aria-label="Minimize">−</button>
          <button className="window-control" aria-label="Maximize">□</button>
          <button className="window-control danger" aria-label="Close">×</button>
        </div>
      </header>

      <div className="main-grid">
        <aside className="sidebar">
          <nav className="nav-list">
            {navItems.map((item, index) => (
              <button key={item} className={`nav-item ${activeNav === item ? 'active' : ''}`} onClick={() => setActiveNav(item)} type="button">
                <span className="nav-icon">{['⌂', '◌', '☑', '▧', '◎', '</>', '⌘', '◈', '⚙'][index]}</span>
                <span>{item}</span>
                {activeNav === item && <b />}
              </button>
            ))}
          </nav>
          <div className="voice-status card">
            <div className="section-kicker">VOICE STATUS</div>
            <div className="waveform">
              {Array.from({ length: 29 }).map((_, i) => <span key={i} style={{ height: `${18 + ((i * 17) % 52)}%` }} />)}
            </div>
            <div className="voice-label">{listening ? 'LISTENING...' : 'STANDBY MODE'}</div>
          </div>
          <button className="system-ready card" onClick={toggleVoice} type="button">
            <div className="power-ring">⏻</div>
            <div><strong>ULTRON SYSTEM</strong><span>Ready for Command</span></div>
          </button>
        </aside>

        <section className="workspace">
          <div className="left-stack">
            <section className="card core-card">
              <div className="section-head"><span>ULTRON CORE</span><em>● SYSTEM ONLINE</em></div>
              <div className="hello"><h2>Hello Mukund.</h2><p>Systems online and fully operational. I am ready to assist you.</p><strong>Core Upgrade v2.0</strong></div>
            </section>
            <section className="card metrics-card">
              <div className="section-kicker">SYSTEM METRICS</div>
              {[['GPU Usage','23%'],['Memory','45%'],['Disk Space','62%'],['Megapack','78%']].map(([label,value]) => (
                <div className="metric-row" key={label}><div><span>{label}</span><small>● Stable</small></div><strong>{value}</strong><i><b style={{ width: value }} /></i></div>
              ))}
            </section>
          </div>

          <section className="card core-panel">
            <div className="core-panel-top"><span>COGNITIVE CORE</span><em>● STABLE SIGNAL</em></div>
            <RobotFace />
            <div className="core-footer"><span>NEURAL SYNC <b>99.8%</b></span><span>QUANTUM LINK <b>SECURE</b></span></div>
          </section>

          <div className="right-stack">
            <section className="card modules-card">
              <div className="section-head"><span>ACTIVE MODULES</span><button>＋</button></div>
              {[['◈','AI Brain','ONLINE'],['◖','Voice System','ONLINE'],['▣','Memory Core','ONLINE'],['▱','File System','STANDBY'],['⊙','Browser','STANDBY'],['⌘','Code Engine','STANDBY']].map(([icon,name,state]) => (
                <div className="module-row" key={name}><span>{icon}</span><strong>{name}</strong><em className={state === 'ONLINE' ? 'online' : ''}>{state}</em></div>
              ))}
            </section>
            <section className="card summary-card">
              <div className="section-kicker">TODAY'S SUMMARY</div>
              <div className="summary-grid"><span>Tasks Completed <b>12</b></span><span>Files Analyzed <b>8</b></span><span>Commands Executed <b>26</b></span><span>Time Saved <b>2h 15m</b></span></div>
            </section>
          </div>
        </section>

        <aside className="command-center">
          <section className="card command-card">
            <div className="section-head"><span>COMMAND CENTER</span><button>＋</button></div>
            <h2>Give me a command...</h2>
            <button className="mic-orbit" onClick={toggleVoice} type="button"><span>◖</span><b>{listening ? 'Listening' : 'Tap to speak'}</b></button>
            <div className="section-kicker">SUGGESTED COMMANDS</div>
            {suggestions.map((suggestion) => <button className="suggestion" key={suggestion} onClick={() => runCommand(suggestion)} type="button">“{suggestion}”</button>)}
          </section>
          <section className="card quick-card">
            <div className="section-kicker">QUICK ACCESS</div>
            <div className="quick-grid">{quickApps.map((app) => <button key={app} type="button">{app}</button>)}</div>
          </section>
          <section className="card activity-card">
            <div className="section-head"><span>SYSTEM ACTIVITY</span><button onClick={() => setEvents([])} type="button">Reset</button></div>
            <div className="activity-graph"><i /><i /><i /><i /><i /><i /><i /><i /></div>
            {events.map((event, i) => <div className="activity-row" key={`${event}-${i}`}><span className={i % 2 ? 'purple' : ''} />{event}<em>{i === 0 ? 'Active' : 'Logged'}</em></div>)}
          </section>
        </aside>
      </div>

      <section className="chat-panel card">
        <div className="chat-head"><span>CHAT WITH ULTRON</span><em>LOCAL MODE</em></div>
        <div className="chat-row"><div className="avatar">U</div><div><b>Ultron:</b> I can help you with file management, web browsing, code execution, data analysis, automation, and much more. Just give me a command.</div><time>10:30 PM</time></div>
        <div className="command-input"><span>&gt;</span><input ref={inputRef} value={command} onChange={(e) => setCommand(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && runCommand()} placeholder="Type your command..." /><button onClick={() => runCommand()} type="button">➤</button></div>
      </section>

      <footer className="footer-line">ULTRON AI — <b>Not Just an Assistant. Your Strategic Quantum-Neural Partner.</b></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
