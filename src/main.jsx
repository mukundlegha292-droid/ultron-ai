import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const navItems = [
  ['⌂', 'Dashboard'], ['◌', 'Chat'], ['✓', 'Tasks'], ['▣', 'Files'], ['◎', 'Browser'],
  ['⌘', 'Code'], ['◈', 'System Tools'], ['◉', 'Memory'], ['⚙', 'Settings'],
];

const modules = [
  ['◈', 'AI Brain', 'ONLINE'], ['◉', 'Voice System', 'ONLINE'], ['▣', 'Memory Core', 'ONLINE'],
  ['▤', 'File System', 'STANDBY'], ['◎', 'Browser', 'ONLINE'], ['⌘', 'Code Engine', 'STANDBY'],
];

const suggested = ['Open my project folder', 'Analyze this document', 'Search on the web', 'Show system performance'];
const quick = [['▶', 'YouTube'], ['●', 'GitHub'], ['▣', 'VS Code'], ['G', 'Google'], ['N', 'Notion'], ['D', 'Drive'], ['◉', 'WhatsApp'], ['in', 'LinkedIn']];
const initialEvents = ['Voice Recognition', 'AI Processing', 'Data Sync', 'Background Tasks'];

function UltronFace() {
  return (
    <div className="ultron-avatar">
      <div className="avatar-glow" />
      <svg className="ultron-face-svg" viewBox="0 0 420 520" role="img" aria-label="ULTRON robotic face">
        <defs>
          <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#dff9ff"/><stop offset=".18" stopColor="#8ac6da"/><stop offset=".43" stopColor="#17445b"/>
            <stop offset=".65" stopColor="#77bed7"/><stop offset=".86" stopColor="#0c2432"/><stop offset="1" stopColor="#02070c"/>
          </linearGradient>
          <linearGradient id="jaw" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#dbfbff"/><stop offset=".3" stopColor="#61a8c0"/><stop offset=".7" stopColor="#173f54"/><stop offset="1" stopColor="#040c12"/>
          </linearGradient>
          <radialGradient id="eye"><stop stopColor="#fff"/><stop offset=".15" stopColor="#eda8ff"/><stop offset=".45" stopColor="#b338ef"/><stop offset="1" stopColor="#21002d"/></radialGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <path d="M210 22C127 22 72 80 66 158l12 176c6 91 55 144 132 157 77-13 126-66 132-157l12-176C348 80 293 22 210 22Z" fill="url(#metal)" stroke="#9cecff" strokeWidth="3"/>
        <path d="M210 36l-30 52 30 20 30-20zM132 66l48-24-10 92-45 20zM288 66l-48-24 10 92 45 20z" fill="#bfeeff" opacity=".7"/>
        <path d="M112 160l66-22 19 42-24 37-61-15zM308 160l-66-22-19 42 24 37 61-15z" fill="#07131d" stroke="#8de7ff" strokeOpacity=".55" strokeWidth="2"/>
        <path d="M126 176l47-17 13 21-20 18-38-9zM294 176l-47-17-13 21 20 18 38-9z" fill="url(#eye)" filter="url(#glow)"/>
        <path d="M210 110l-30 58 7 91 23 19 23-19 7-91z" fill="#2b6b86" stroke="#a5efff" strokeOpacity=".55" strokeWidth="2"/>
        <path d="M210 138l-12 36 12 20 12-20z" fill="#e1fbff" opacity=".75"/>
        <path d="M92 230l61-4 30 57-19 65-51-21-29-53zM328 230l-61-4-30 57 19 65 51-21 29-53z" fill="url(#metal)" stroke="#86e5ff" strokeOpacity=".5" strokeWidth="2"/>
        <path d="M120 316l58-14 14 57-28 46-35-27zM300 316l-58-14-14 57 28 46 35-27z" fill="#081b26" stroke="#80e2ff" strokeOpacity=".48"/>
        <path d="M154 356l56-13 56 13-10 75-17 28h-58l-17-28z" fill="url(#jaw)" stroke="#b5f3ff" strokeOpacity=".65" strokeWidth="3"/>
        <path d="M176 418l34 16 34-16-12 30-22 10-22-10z" fill="#050e14" stroke="#92eaff" strokeOpacity=".58"/>
        <path d="M152 462l22 35 19-24 17 27 17-27 19 24 22-35" fill="#0c2532" stroke="#79e3ff" strokeOpacity=".55" strokeWidth="2"/>
      </svg>
      <div className="avatar-scanline" />
    </div>
  );
}

function App() {
  const [active, setActive] = useState('Dashboard');
  const [command, setCommand] = useState('');
  const [events, setEvents] = useState(initialEvents);
  const [listening, setListening] = useState(false);
  const [chat, setChat] = useState([{ from: 'ultron', text: 'I can help you with file management, web browsing, code execution, data analysis, automation, and much more. Just give me a command.' }]);
  const [now, setNow] = useState(new Date());
  const inputRef = useRef(null);
  const recognitionSupported = useMemo(() => typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window), []);

  useEffect(() => {
    inputRef.current?.focus();
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const addEvent = (text) => setEvents((current) => [text, ...current].slice(0, 4));

  const runCommand = (value = command) => {
    const text = value.trim();
    if (!text) return;
    setChat((current) => [...current.slice(-3), { from: 'you', text }, { from: 'ultron', text: 'Command received. I am ready to process that request.' }]);
    addEvent(`AI Processing: ${text}`);
    setCommand('');
  };

  const toggleVoice = () => {
    if (!recognitionSupported) return addEvent('Voice Recognition unavailable');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    setListening(true);
    addEvent('Voice Recognition listening');
    recognition.onresult = (event) => {
      setCommand(event.results[0][0].transcript);
      setListening(false);
      addEvent('Voice command captured');
    };
    recognition.onerror = () => { setListening(false); addEvent('Voice channel error'); };
    recognition.onend = () => setListening(false);
    recognition.start();
  };

  const chooseNav = (label) => {
    setActive(label);
    addEvent(`${label} module selected`);
  };

  const openQuick = (label) => addEvent(`Quick Access: ${label}`);
  const formattedTime = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const formattedDate = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();

  return (
    <main className={`shell ${listening ? 'is-listening' : ''}`}>
      <header className="topbar">
        <div className="brand"><div className="brand-orb">◈</div><div><strong>ULTRON AI</strong><small>COMMAND SYSTEM</small></div></div>
        <div className="top-center"><strong>ULTRON AI <span>v2.0</span></strong><small>Hyper-Intelligent Platform. Your Strategic Quantum-Neural Partner.</small></div>
        <div className="top-right"><div className="system-chip">SYSTEM STATUS <b><i /> ONLINE</b></div><div className="clock">{formattedTime}<small>{formattedDate}</small></div><div className="window">− □ ×</div></div>
      </header>

      <div className="app-grid">
        <aside className="sidebar panel">
          <nav>{navItems.map(([icon, label]) => <button key={label} className={active === label ? 'active' : ''} onClick={() => chooseNav(label)}><span>{icon}</span>{label}{active === label && <em />}</button>)}</nav>
          <div className="voice-status"><div className="label">VOICE STATUS</div><div className="waveform">{Array.from({ length: 9 }, (_, i) => <span key={i} />)}</div><strong>{listening ? 'LISTENING...' : 'STANDBY'}</strong></div>
          <button className="power-card" onClick={toggleVoice}><div>◉</div><span>ULTRON SYSTEM<small>Ready for Command</small></span></button>
        </aside>

        <section className="workspace">
          <div className="workspace-main">
            <aside className="left-stack">
              <section className="card core-card"><div className="card-title">ULTRON CORE <span>AI SYSTEM ONLINE ●</span></div><h2>Hello Mukund.</h2><p>Systems online and fully operational. I am ready to assist you.</p><div className="version">Core Upgrade v2.0</div></section>
              <section className="card metrics-card"><div className="card-title">SYSTEM METRICS</div>{[['GPU Usage','23%'],['Memory','45%'],['Disk Space','62%'],['Network','78%']].map(([label, value]) => <div className="meter" key={label}><div><span>{label}</span><b>{value}</b></div><i><u style={{ width: value }} /></i></div>)}</section>
            </aside>

            <section className="core-panel card">
              <div className="panel-hud left">NEURAL CORE 98.8%</div><div className="panel-hud right">QUANTUM LINK SECURE</div>
              <div className="face-stage"><div className="globe globe-a"/><div className="globe globe-b"/><div className="globe globe-c"/><div className="scan-grid"/><UltronFace/><div className="core-platform"><span/><span/><span/></div></div>
            </section>

            <aside className="right-stack">
              <section className="card modules-card"><div className="card-title">ACTIVE MODULES <span className="plus">+</span></div>{modules.map(([icon, label, state]) => <div className="module" key={label}><span>{icon}</span><b>{label}</b><em className={state === 'ONLINE' ? 'online' : ''}>{state}</em></div>)}</section>
              <section className="card summary-card"><div className="card-title">TODAY'S SUMMARY</div><div className="summary-row"><span>Tasks Completed</span><b>12</b></div><div className="summary-row"><span>Files Analyzed</span><b>8</b></div><div className="summary-row"><span>Commands Executed</span><b>26</b></div><div className="summary-row"><span>Time Saved</span><b>2h 15m</b></div></section>
            </aside>

            <section className="card chat-card"><div className="card-title">CHAT WITH ULTRON <span className="mode">LOCAL MODE</span></div><div className="chat-scroll">{chat.map((message, index) => <div className={`chat-row ${message.from}`} key={index}><span className="avatar-mini">U</span><div><b>{message.from === 'you' ? 'You:' : 'Ultron:'}</b> {message.text}</div></div>)}</div><div className="chat-input"><input ref={inputRef} value={command} onChange={(event) => setCommand(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && runCommand()} placeholder="Type your command..."/><button onClick={() => runCommand()}>➤</button></div></section>
          </div>

          <aside className="command-column">
            <section className="card command-center"><div className="card-title">COMMAND CENTER</div><h3>Give me a command.</h3><button className="mic-button" onClick={toggleVoice}><div className="mic-core">◉</div><span>{listening ? 'LISTENING...' : 'Tap to speak'}</span></button><div className="small-label">SUGGESTED COMMANDS</div>{suggested.map((item) => <button className="suggest" key={item} onClick={() => runCommand(item)}>“{item}” <b>+</b></button>)}</section>
            <section className="card quick-card"><div className="card-title">QUICK ACCESS</div><div className="quick-grid">{quick.map(([icon, label]) => <button key={label} onClick={() => openQuick(label)}><span>{icon}</span><small>{label}</small></button>)}</div></section>
            <section className="card activity-card"><div className="card-title">SYSTEM ACTIVITY <button className="reset" type="button" onClick={() => setEvents(initialEvents)}>Reset</button></div><div className="activity-chart"/>{events.map((event, index) => <div className="activity-row" key={`${event}-${index}`}><i/><span>{event}<small>{index < 3 ? 'Active' : 'Idle'}</small></span></div>)}</section>
          </aside>
        </section>
      </div>

      <footer className="footer-strip">ULTRON AI — <strong>Not Just an Assistant. Your Strategic Quantum-Neural Partner.</strong></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
