// Import the Industrial Sci-Fi library
import '../lib/industrial-scifi/index.css'
// Import component-specific styles
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Background Grid */}
      <div className="grid-background"></div>
      <div className="noise-overlay"></div>
      
      {/* Corner Registration Marks */}
      <div className="corner-marks">
        <svg className="corner top-left" width="60" height="60" viewBox="0 0 60 60">
          <rect x="0" y="0" width="2" height="20" fill="currentColor"/>
          <rect x="0" y="0" width="20" height="2" fill="currentColor"/>
          <rect x="18" y="18" width="24" height="24" fill="#FF5722" opacity="0.8"/>
        </svg>
        <svg className="corner top-right" width="60" height="60" viewBox="0 0 60 60">
          <rect x="58" y="0" width="2" height="20" fill="currentColor"/>
          <rect x="40" y="0" width="20" height="2" fill="currentColor"/>
          <rect x="18" y="18" width="24" height="24" fill="#FF5722" opacity="0.8"/>
        </svg>
        <svg className="corner bottom-left" width="60" height="60" viewBox="0 0 60 60">
          <rect x="0" y="40" width="2" height="20" fill="currentColor"/>
          <rect x="0" y="58" width="20" height="2" fill="currentColor"/>
          <rect x="18" y="18" width="24" height="24" fill="#FF5722" opacity="0.8"/>
        </svg>
        <svg className="corner bottom-right" width="60" height="60" viewBox="0 0 60 60">
          <rect x="58" y="40" width="2" height="20" fill="currentColor"/>
          <rect x="40" y="58" width="20" height="2" fill="currentColor"/>
          <rect x="18" y="18" width="24" height="24" fill="#FF5722" opacity="0.8"/>
        </svg>
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        
        {/* Hero Section */}
        <section className="hero-section">
          <div className="meta-row">
            <span className="status-chip">AUTONOMOUS AGENTS</span>
            <span className="system-text">CONTINUOUSLY</span>
          </div>

          {/* Dot Matrix Logo */}
          <div className="dot-matrix-logo">
            <svg viewBox="0 0 200 200" className="matrix-svg">
              {/* Create dot grid pattern */}
              {Array.from({ length: 25 }).map((_, i) => {
                const row = Math.floor(i / 5);
                const col = i % 5;
                const x = 40 + col * 30;
                const y = 40 + row * 30;
                const inCenter = (row === 2 && col === 2) || 
                                (row === 1 && col === 2) || 
                                (row === 3 && col === 2) ||
                                (row === 2 && col === 1) || 
                                (row === 2 && col === 3);
                return (
                  <circle 
                    key={i} 
                    cx={x} 
                    cy={y} 
                    r={inCenter ? "6" : "3"} 
                    fill={inCenter ? "#FF5722" : "#D4C5B0"}
                    opacity={inCenter ? "1" : "0.6"}
                  />
                );
              })}
            </svg>
          </div>

          <h1 className="hero-title">
            <span className="title-main">INDUSTRIAL</span>
            <span className="title-main">ROBOTICS</span>
          </h1>

          <div className="meta-row bottom">
            <span className="system-text">D-01</span>
            <div className="registered-mark">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="18" stroke="#D4C5B0" strokeWidth="2" fill="none"/>
                <text x="20" y="26" fontSize="20" fontWeight="700" fill="#D4C5B0" textAnchor="middle">R</text>
              </svg>
            </div>
            <span className="system-text">RUNNING</span>
          </div>

          <div className="divider-line"></div>

          <p className="hero-description">
            DEPLOYED NATIVE / ENGINEERED FOR CONTINUOUS INDUSTRIAL OUTPUT
          </p>
        </section>

        {/* Stats Grid */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="card-header">
              <span className="card-id">UNIT 01-F</span>
              <div className="crosshair">
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <line x1="8" y1="0" x2="8" y2="16" stroke="#FF5722" strokeWidth="1"/>
                  <line x1="0" y1="8" x2="16" y2="8" stroke="#FF5722" strokeWidth="1"/>
                  <circle cx="8" cy="8" r="4" stroke="#FF5722" strokeWidth="1" fill="none"/>
                </svg>
              </div>
            </div>
            <div className="stat-value">24/7</div>
            <div className="stat-label">OPERATIONAL STATUS</div>
            <div className="status-indicator">
              <span className="status-chip active">ACTIVE</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="card-header">
              <span className="card-id">SECTOR-001</span>
            </div>
            <div className="stat-value">128</div>
            <div className="stat-label">UNITS DEPLOYED</div>
            <div className="progress-dots">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className={`dot ${i < 9 ? 'active' : ''}`}></div>
              ))}
            </div>
          </div>

          <div className="stat-card">
            <div className="card-header">
              <span className="card-id">LOG 00:02:14</span>
            </div>
            <div className="stat-value">0.43s</div>
            <div className="stat-label">RESPONSE TIME</div>
            <div className="tech-readout">
              <div className="readout-line">FORMATION PATTERN: ADAPTIVE GRID</div>
              <div className="readout-line">ALTITUDE BAND: 240 FT</div>
              <div className="readout-line">WIND INTERFERENCE DETECTED</div>
            </div>
          </div>
        </section>

        {/* Feature Blocks */}
        <section className="feature-blocks">
          <div className="feature-block primary">
            <div className="feature-id">R9</div>
            <div className="feature-stripe"></div>
            <div className="feature-content">
              <div className="feature-header">
                <span className="system-label">MULTI ROBOT COORDINATION TEST</span>
              </div>
              <h2 className="feature-title">Adaptive<br/>Manufacturing</h2>
              <p className="feature-description">
                Engineered for continuous industrial output, this robotics system integrates directly into the manufacturing floor
              </p>
              <div className="feature-meta">
                <div className="meta-group">
                  <span className="meta-label">INTERNAL ROBOTICS PROGRAM</span>
                  <span className="meta-value">U.S.A</span>
                </div>
                <div className="dot-cluster">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="cluster-dot"></div>
                  ))}
                </div>
              </div>
              <div className="feature-footer">
                <span className="footer-location">5-WEST</span>
                <span className="footer-info">ACTUATOR SYNC AND PAYLOAD TRANSITIONS</span>
                <span className="footer-code">CORE PRODUCTION SECTOR - 001</span>
              </div>
              <div className="warning-label">POWER DOWN ONLY BY AUTHORIZED STAFF</div>
            </div>
          </div>

          <div className="feature-block secondary">
            <div className="compass">
              <div className="compass-mark n">N</div>
              <div className="compass-mark e">E</div>
              <div className="compass-mark s">S</div>
              <div className="compass-mark w">W</div>
              <div className="compass-center"></div>
            </div>
            <div className="feature-content">
              <h2 className="feature-title-alt">Field<br/>Tested</h2>
              <div className="wave-pattern">
                <svg viewBox="0 0 300 150" preserveAspectRatio="none">
                  {Array.from({ length: 15 }).map((_, i) => {
                    const height = 30 + Math.sin(i * 0.5) * 20;
                    const y = 75 - height / 2;
                    return (
                      <rect 
                        key={i} 
                        x={i * 20} 
                        y={y} 
                        width="3" 
                        height={height} 
                        fill="#FF5722"
                      />
                    );
                  })}
                </svg>
              </div>
              <div className="status-panel">
                <div className="panel-header">DRONE / SWARMS ACTIVE</div>
                <div className="panel-specs">
                  <div className="spec-line">LOG 00:02:14</div>
                  <div className="spec-line">FORMATION PATTERN: ADAPTIVE GRID</div>
                  <div className="spec-line">ALTITUDE BAND: 240 FT</div>
                  <div className="spec-line">WIND INTERFERENCE DETECTED</div>
                  <div className="spec-line">CORRECTION PROPAGATED ACROSS 128 UNITS IN 0.43 SECONDS</div>
                  <div className="spec-line">NO HUMAN INPUT</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Status */}
        <section className="mission-status">
          <div className="status-row">
            <div className="status-item">
              <span className="status-chip outlined">DROID READY STATE</span>
            </div>
            <div className="status-item">
              <span className="status-indicator-text">ACTIVE</span>
              <svg width="20" height="20" viewBox="0 0 20 20">
                <polygon points="10,2 18,18 2,18" fill="#FF5722"/>
              </svg>
            </div>
            <div className="status-item">
              <span className="mission-ready">MISSION READY</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-main">
            <div className="footer-title">FACTORY</div>
            <div className="footer-subtitle">(Droids lead the way)</div>
          </div>
          <div className="footer-info">
            <span>24/7</span>
            <span>© 2026</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default LandingPage
