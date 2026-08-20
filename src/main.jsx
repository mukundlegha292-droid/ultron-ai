import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main className="shell">
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
          <div className="metric"><span>VOICE</span><strong>STANDBY</strong></div>
          <div className="metric"><span>TOOLS</span><strong>LOCKED</strong></div>
          <div className="metric"><span>MEMORY</span><strong>LOCAL</strong></div>
        </aside>

        <section className="core-stage">
          <div className="reticle reticle-one" />
          <div className="reticle reticle-two" />
          <div className="core-orb"><span>U</span></div>
          <div className="core-caption">ULTRON CORE</div>
          <div className="command-line">AWAITING COMMAND<span className="cursor">_</span></div>
        </section>

        <aside className="panel right-panel">
          <div className="panel-label">ACTIVITY</div>
          <div className="activity"><span className="tiny-dot" /> Core initialized</div>
          <div className="activity"><span className="tiny-dot" /> Safety layer active</div>
          <div className="activity"><span className="tiny-dot" /> Tools pending</div>
          <div className="activity"><span className="tiny-dot" /> Voice pending</div>
        </aside>
      </section>

      <footer className="command-bar">
        <span className="prompt">&gt;</span>
        <span>Voice and command interface will connect here.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
