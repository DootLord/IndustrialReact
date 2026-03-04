// Import the Industrial Sci-Fi library
import '../lib/industrial-scifi/index.css'
import { useState } from 'react'

function ComponentShowcase() {
  const [primaryColor, setPrimaryColor] = useState('#FF5722')
  const [modalOpen, setModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [toasts, setToasts] = useState([])

  const addToast = (type) => {
    const newToast = {
      id: Date.now(),
      type,
      title: `${type.toUpperCase()} NOTIFICATION`,
      message: 'This is a system notification message.'
    }
    setToasts([...toasts, newToast])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== newToast.id))
    }, 3000)
  }

  const presetColors = [
    { name: 'ORANGE', value: '#FF5722' },
    { name: 'CYAN', value: '#00BCD4' },
    { name: 'GREEN', value: '#4CAF50' },
    { name: 'PURPLE', value: '#9C27B0' },
    { name: 'AMBER', value: '#FFC107' },
    { name: 'RED', value: '#F44336' },
  ]

  return (
    <div className="isf-canvas" style={{ '--isf-color-accent-primary': primaryColor }}>
      {/* Background Layers */}
      <div className="isf-bg-grid"></div>
      <div className="isf-bg-noise"></div>
      
      {/* Corner Registration Marks */}
      <div className="isf-corner-marks">
        <svg className="corner" width="60" height="60" viewBox="0 0 60 60">
          <rect x="0" y="0" width="2" height="20" fill="currentColor"/>
          <rect x="0" y="0" width="20" height="2" fill="currentColor"/>
          <rect x="18" y="18" width="24" height="24" fill="#FF5722" opacity="0.8"/>
        </svg>
        <svg className="corner" width="60" height="60" viewBox="0 0 60 60">
          <rect x="58" y="0" width="2" height="20" fill="currentColor"/>
          <rect x="40" y="0" width="20" height="2" fill="currentColor"/>
          <rect x="18" y="18" width="24" height="24" fill="#FF5722" opacity="0.8"/>
        </svg>
        <svg className="corner" width="60" height="60" viewBox="0 0 60 60">
          <rect x="0" y="40" width="2" height="20" fill="currentColor"/>
          <rect x="0" y="58" width="20" height="2" fill="currentColor"/>
          <rect x="18" y="18" width="24" height="24" fill="#FF5722" opacity="0.8"/>
        </svg>
        <svg className="corner" width="60" height="60" viewBox="0 0 60 60">
          <rect x="58" y="40" width="2" height="20" fill="currentColor"/>
          <rect x="40" y="58" width="20" height="2" fill="currentColor"/>
          <rect x="18" y="18" width="24" height="24" fill="#FF5722" opacity="0.8"/>
        </svg>
      </div>

      <div className="isf-container">
        
        {/* Hero Section */}
        <section className="isf-text-center isf-mb-20">
          <div className="isf-flex isf-flex-between isf-mb-12">
            <span className="isf-chip">COMPONENT LIBRARY</span>
            <span className="isf-system-text">V1.0.0</span>
          </div>

          <h1 className="isf-text-hero isf-text-display isf-mb-8 isf-color-accent">
            INDUSTRIAL<br/>SCI-FI CSS
          </h1>

          <div className="isf-divider isf-divider-short isf-mb-8"></div>

          <p className="isf-readout">
            A COMPREHENSIVE DESIGN SYSTEM FOR CREATING INDUSTRIAL/CORPORATE SCI-FI INTERFACES
          </p>
        </section>

        {/* Color Theme Selector */}
        <section className="isf-mb-20">
          <div className="isf-panel" style={{ padding: 'var(--isf-space-8)' }}>
            <div className="isf-flex isf-gap-4 isf-items-center isf-flex-wrap">
              <label className="isf-label" style={{ minWidth: '120px' }}>PRIMARY COLOR:</label>
              <div className="isf-flex isf-gap-3">
                {presetColors.map(color => (
                  <button
                    key={color.value}
                    onClick={() => setPrimaryColor(color.value)}
                    className="isf-chip"
                    style={{
                      background: primaryColor === color.value ? color.value : 'transparent',
                      borderColor: color.value,
                      color: primaryColor === color.value ? '#1a1a1a' : color.value,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {color.name}
                  </button>
                ))}
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  style={{
                    width: '60px',
                    height: '32px',
                    border: '1px solid var(--isf-color-base-light)',
                    background: 'transparent',
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Component Sections */}
        <section className="isf-mb-20">
          <h2 className="isf-text-4xl isf-font-display isf-mb-12 isf-border-b isf-pb-4">
            STATUS CHIPS & BADGES
          </h2>
          
          <div className="isf-flex isf-gap-4 isf-mb-8 isf-flex-col">
            <div>
              <span className="isf-chip">DEFAULT CHIP</span>
              <span className="isf-chip isf-chip-active">ACTIVE CHIP</span>
              <span className="isf-chip isf-chip-outlined">OUTLINED CHIP</span>
              <span className="isf-chip isf-chip-large">LARGE CHIP</span>
            </div>
            
            <div>
              <span className="isf-system-text">SYSTEM TEXT</span>
              <span className="isf-label">LABEL TEXT</span>
            </div>
          </div>

          <pre className="isf-panel isf-text-xs">
{`<span class="isf-chip">DEFAULT CHIP</span>
<span class="isf-chip isf-chip-active">ACTIVE CHIP</span>
<span class="isf-chip isf-chip-outlined">OUTLINED CHIP</span>`}
          </pre>
        </section>

        {/* Cards */}
        <section className="isf-mb-20">
          <h2 className="isf-text-4xl isf-font-display isf-mb-12 isf-border-b isf-pb-4">
            CARDS & PANELS
          </h2>
          
          <div className="isf-grid isf-grid-auto isf-gap-8 isf-mb-8">
            <div className="isf-card isf-card-accent-bar">
              <div className="isf-card-header">
                <span className="isf-card-id">UNIT-01-F</span>
                <div className="isf-crosshair">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <line x1="8" y1="0" x2="8" y2="16" stroke="#FF5722" strokeWidth="1"/>
                    <line x1="0" y1="8" x2="16" y2="8" stroke="#FF5722" strokeWidth="1"/>
                    <circle cx="8" cy="8" r="4" stroke="#FF5722" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
              </div>
              <div className="isf-stat-value">24/7</div>
              <div className="isf-stat-label">OPERATIONAL STATUS</div>
              <div className="isf-mt-4">
                <span className="isf-chip isf-chip-active">ACTIVE</span>
              </div>
            </div>

            <div className="isf-card isf-card-accent-bar">
              <div className="isf-card-header">
                <span className="isf-card-id">SECTOR-001</span>
              </div>
              <div className="isf-stat-value">128</div>
              <div className="isf-stat-label">UNITS DEPLOYED</div>
              <div className="isf-progress-dots isf-mt-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className={`isf-progress-dot ${i < 9 ? 'isf-progress-dot-active' : ''}`}></div>
                ))}
              </div>
            </div>

            <div className="isf-panel">
              <div className="isf-panel-header">SYSTEM STATUS</div>
              <div className="isf-readout">
                <div>LOG 00:02:14</div>
                <div>FORMATION PATTERN: ADAPTIVE GRID</div>
                <div>ALTITUDE BAND: 240 FT</div>
                <div>WIND INTERFERENCE DETECTED</div>
              </div>
            </div>
          </div>

          <pre className="isf-panel isf-text-xs">
{`<div class="isf-card isf-card-accent-bar">
  <div class="isf-card-header">
    <span class="isf-card-id">UNIT-01-F</span>
  </div>
  <div class="isf-stat-value">24/7</div>
  <div class="isf-stat-label">OPERATIONAL STATUS</div>
</div>`}
          </pre>
        </section>

        {/* Buttons */}
        <section className="isf-mb-20">
          <h2 className="isf-text-4xl isf-font-display isf-mb-12 isf-border-b isf-pb-4">
            BUTTONS
          </h2>
          
          <div className="isf-flex isf-gap-4 isf-mb-8">
            <button className="isf-button">DEFAULT BUTTON</button>
            <button className="isf-button isf-button-primary">PRIMARY BUTTON</button>
          </div>

          <pre className="isf-panel isf-text-xs">
{`<button class="isf-button">DEFAULT BUTTON</button>
<button class="isf-button isf-button-primary">PRIMARY BUTTON</button>`}
          </pre>
        </section>

        {/* Form Elements */}
        <section className="isf-mb-20">
          <h2 className="isf-text-4xl isf-font-display isf-mb-12 isf-border-b isf-pb-4">
            FORM ELEMENTS
          </h2>

          {/* Text Inputs */}
          <div className="isf-mb-12">
            <h3 className="isf-text-2xl isf-font-display isf-mb-6">TEXT INPUTS</h3>
            
            <div className="isf-grid isf-grid-2 isf-gap-8 isf-mb-8">
              <div className="isf-form-group">
                <label htmlFor="firstName" className="isf-form-label isf-form-label-required">FIRST AND LAST NAME</label>
                <input 
                  id="firstName"
                  type="text" 
                  className="isf-input" 
                  placeholder="ENTER NAME"
                />
              </div>

              <div className="isf-form-group">
                <label htmlFor="email" className="isf-form-label">EMAIL ADDRESS</label>
                <input 
                  id="email"
                  type="email" 
                  className="isf-input" 
                  placeholder="USER@DOMAIN.COM"
                />
              </div>
            </div>

            <div className="isf-form-group isf-mb-8">
              <label htmlFor="company" className="isf-form-label">COMPANY NAME</label>
              <input 
                id="company"
                type="text" 
                className="isf-input" 
                placeholder="ORGANIZATION DESIGNATION"
              />
            </div>

            <div className="isf-form-group isf-mb-8">
              <label htmlFor="message" className="isf-form-label">
                <span className="isf-form-label-inline">
                  <span>QUICK PROJECT BRIEF</span>
                  <span className="isf-form-label-meta">Optional</span>
                </span>
              </label>
              <textarea 
                id="message"
                rows={5}
                className="isf-textarea" 
                placeholder="DESCRIBE YOUR PROJECT REQUIREMENTS..."
              ></textarea>
            </div>

            <pre className="isf-panel isf-text-xs">
{`<div class="isf-form-group">
  <label class="isf-form-label isf-form-label-required">
    FIRST AND LAST NAME
  </label>
  <input type="text" class="isf-input" placeholder="ENTER NAME" />
</div>

<textarea class="isf-textarea" rows="5"></textarea>`}
            </pre>
          </div>

          {/* Select & Search */}
          <div className="isf-mb-12">
            <h3 className="isf-text-2xl isf-font-display isf-mb-6">SELECT & SEARCH</h3>
            
            <div className="isf-grid isf-grid-2 isf-gap-8 isf-mb-8">
              <div className="isf-form-group">
                <label htmlFor="department" className="isf-form-label">DEPARTMENT</label>
                <select id="department" className="isf-select">
                  <option>SELECT SECTOR</option>
                  <option>AI / ROBOTICS</option>
                  <option>DEFENSE / INDUSTRY</option>
                  <option>MANUFACTURING</option>
                  <option>RESEARCH & DEVELOPMENT</option>
                </select>
              </div>

              <div className="isf-form-group">
                <label htmlFor="search" className="isf-form-label">SYSTEM SEARCH</label>
                <div className="isf-search-wrapper">
                  <input 
                    id="search"
                    type="search" 
                    className="isf-search"
                    placeholder="SEARCH DATABASE..."
                  />
                  <svg className="isf-search-icon" viewBox="0 0 16 16" fill="none">
                    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="11" y1="11" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>

            <pre className="isf-panel isf-text-xs">
{`<select class="isf-select">
  <option>SELECT SECTOR</option>
  <option>AI / ROBOTICS</option>
</select>

<div class="isf-search-wrapper">
  <input type="search" class="isf-search" />
  <svg class="isf-search-icon">...</svg>
</div>`}
            </pre>
          </div>

          {/* Checkbox & Radio */}
          <div className="isf-mb-12">
            <h3 className="isf-text-2xl isf-font-display isf-mb-6">CHECKBOXES & RADIOS</h3>
            
            <div className="isf-grid isf-grid-2 isf-gap-8 isf-mb-8">
              <div>
                <label className="isf-form-label isf-mb-4">OPERATIONAL SECTORS</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label className="isf-checkbox-wrapper">
                    <input type="checkbox" className="isf-checkbox" defaultChecked />
                    <span className="isf-checkbox-label">Autonomous Systems</span>
                  </label>
                  <label className="isf-checkbox-wrapper">
                    <input type="checkbox" className="isf-checkbox" />
                    <span className="isf-checkbox-label">Defense Protocols</span>
                  </label>
                  <label className="isf-checkbox-wrapper">
                    <input type="checkbox" className="isf-checkbox" defaultChecked />
                    <span className="isf-checkbox-label">Manufacturing Grid</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="isf-form-label isf-mb-4">PRIORITY LEVEL</label>
                <div className="isf-radio-group">
                  <label className="isf-radio-wrapper">
                    <input type="radio" name="priority" className="isf-radio" />
                    <span className="isf-radio-label">Standard Operations</span>
                  </label>
                  <label className="isf-radio-wrapper">
                    <input type="radio" name="priority" className="isf-radio" defaultChecked />
                    <span className="isf-radio-label">Elevated Priority</span>
                  </label>
                  <label className="isf-radio-wrapper">
                    <input type="radio" name="priority" className="isf-radio" />
                    <span className="isf-radio-label">Critical Mission</span>
                  </label>
                </div>
              </div>
            </div>

            <pre className="isf-panel isf-text-xs">
{`<label class="isf-checkbox-wrapper">
  <input type="checkbox" class="isf-checkbox" />
  <span class="isf-checkbox-label">Option Label</span>
</label>

<label class="isf-radio-wrapper">
  <input type="radio" name="group" class="isf-radio" />
  <span class="isf-radio-label">Radio Label</span>
</label>`}
            </pre>
          </div>

          {/* Toggle & Range */}
          <div className="isf-mb-12">
            <h3 className="isf-text-2xl isf-font-display isf-mb-6">TOGGLE & RANGE</h3>
            
            <div className="isf-grid isf-grid-2 isf-gap-8 isf-mb-8">
              <div>
                <label className="isf-form-label isf-mb-4">SYSTEM TOGGLES</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <label className="isf-toggle-wrapper">
                    <input type="checkbox" className="isf-toggle" defaultChecked />
                    <span className="isf-toggle-label">AUTO-PILOT ENGAGED</span>
                  </label>
                  <label className="isf-toggle-wrapper">
                    <input type="checkbox" className="isf-toggle" />
                    <span className="isf-toggle-label">MANUAL OVERRIDE</span>
                  </label>
                  <label className="isf-toggle-wrapper">
                    <input type="checkbox" className="isf-toggle" defaultChecked />
                    <span className="isf-toggle-label">TELEMETRY ACTIVE</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="isf-form-label isf-mb-4">POWER DISTRIBUTION</label>
                <div className="isf-range-wrapper isf-mb-6">
                  <input 
                    type="range" 
                    min="0"
                    max="100"
                    defaultValue="75"
                    className="isf-range"
                  />
                  <div className="isf-range-value">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
                <label className="isf-form-label isf-mb-4">SENSOR SENSITIVITY</label>
                <div className="isf-range-wrapper">
                  <input 
                    type="range" 
                    min="0"
                    max="100"
                    defaultValue="45"
                    className="isf-range"
                  />
                  <div className="isf-range-value">
                    <span>LOW</span>
                    <span>HIGH</span>
                  </div>
                </div>
              </div>
            </div>

            <pre className="isf-panel isf-text-xs">
{`<label class="isf-toggle-wrapper">
  <input type="checkbox" class="isf-toggle" />
  <span class="isf-toggle-label">TOGGLE LABEL</span>
</label>

<input type="range" class="isf-range" min="0" max="100" />`}
            </pre>
          </div>

          {/* Input Groups & File Upload */}
          <div className="isf-mb-12">
            <h3 className="isf-text-2xl isf-font-display isf-mb-6">INPUT GROUPS & FILE UPLOAD</h3>
            
            <div className="isf-grid isf-grid-2 isf-gap-8 isf-mb-8">
              <div className="isf-form-group">
                <label className="isf-form-label">UNIT IDENTIFICATION</label>
                <div className="isf-input-group">
                  <span className="isf-input-prefix">ID:</span>
                  <input type="text" className="isf-input" placeholder="XXXXX" />
                  <span className="isf-input-suffix">-F</span>
                </div>
              </div>

              <div className="isf-form-group">
                <label className="isf-form-label">OPERATIONAL COST</label>
                <div className="isf-input-group">
                  <span className="isf-input-prefix">$</span>
                  <input type="number" className="isf-input" placeholder="0.00" />
                  <span className="isf-input-suffix">USD</span>
                </div>
              </div>
            </div>

            <div className="isf-form-group isf-mb-8">
              <label className="isf-form-label">UPLOAD MISSION DATA</label>
              <div className="isf-file-wrapper">
                <input type="file" className="isf-file" />
                <div className="isf-file-label">
                  <span>No file selected</span>
                  <span className="isf-file-button">Browse</span>
                </div>
              </div>
              <span className="isf-form-help">Accepted formats: .dat, .sys, .log</span>
            </div>

            <pre className="isf-panel isf-text-xs">
{`<div class="isf-input-group">
  <span class="isf-input-prefix">ID:</span>
  <input type="text" class="isf-input" />
  <span class="isf-input-suffix">-F</span>
</div>

<div class="isf-file-wrapper">
  <input type="file" class="isf-file" />
  <div class="isf-file-label">
    <span>No file selected</span>
    <span class="isf-file-button">Browse</span>
  </div>
</div>`}
            </pre>
          </div>

          {/* Complete Form Example */}
          <div className="isf-mb-12">
            <h3 className="isf-text-2xl isf-font-display isf-mb-6">COMPLETE FORM EXAMPLE</h3>
            
            <div className="isf-card">
              <div className="isf-card-header">
                <span className="isf-card-id">FORM-001-A</span>
                <span className="isf-chip">MISSION BRIEFING</span>
              </div>

              <fieldset className="isf-fieldset">
                <legend className="isf-fieldset-legend">OPERATOR INFORMATION</legend>
                
                <div className="isf-grid isf-grid-2 isf-gap-8 isf-mb-6">
                  <div className="isf-form-group">
                    <label htmlFor="opName" className="isf-form-label isf-form-label-required">OPERATOR NAME</label>
                    <input 
                      id="opName"
                      type="text" 
                      className="isf-input" 
                      placeholder="FULL NAME"
                    />
                  </div>

                  <div className="isf-form-group">
                    <label htmlFor="opId" className="isf-form-label isf-form-label-required">OPERATOR ID</label>
                    <div className="isf-input-group">
                      <span className="isf-input-prefix">OP</span>
                      <input 
                        id="opId"
                        type="text" 
                        className="isf-input" 
                        placeholder="00000"
                      />
                    </div>
                  </div>
                </div>

                <div className="isf-form-group isf-mb-6">
                  <label htmlFor="opSector" className="isf-form-label">ASSIGNED SECTOR</label>
                  <select id="opSector" className="isf-select">
                    <option>SELECT SECTOR</option>
                    <option>SECTOR-001 / MANUFACTURING</option>
                    <option>SECTOR-002 / DEFENSE</option>
                    <option>SECTOR-003 / RESEARCH</option>
                  </select>
                </div>
              </fieldset>

              <fieldset className="isf-fieldset">
                <legend className="isf-fieldset-legend">MISSION PARAMETERS</legend>
                
                <div className="isf-form-group isf-mb-6">
                  <label className="isf-form-label isf-mb-4">MISSION TYPE</label>
                  <div className="isf-radio-group">
                    <label className="isf-radio-wrapper">
                      <input type="radio" name="missionType" className="isf-radio" defaultChecked />
                      <span className="isf-radio-label">Reconnaissance</span>
                    </label>
                    <label className="isf-radio-wrapper">
                      <input type="radio" name="missionType" className="isf-radio" />
                      <span className="isf-radio-label">Defensive Operations</span>
                    </label>
                    <label className="isf-radio-wrapper">
                      <input type="radio" name="missionType" className="isf-radio" />
                      <span className="isf-radio-label">Manufacturing Support</span>
                    </label>
                  </div>
                </div>

                <div className="isf-form-group isf-mb-6">
                  <label htmlFor="briefing" className="isf-form-label">MISSION BRIEFING</label>
                  <textarea 
                    id="briefing"
                    rows={5}
                    className="isf-textarea" 
                    placeholder="ENTER MISSION OBJECTIVES AND PARAMETERS..."
                  ></textarea>
                  <span className="isf-form-help">Minimum 50 characters required</span>
                </div>

                <div className="isf-form-group isf-mb-6">
                  <label className="isf-checkbox-wrapper">
                    <input type="checkbox" className="isf-checkbox" />
                    <span className="isf-checkbox-label">I confirm all mission parameters are accurate and operational protocols have been reviewed</span>
                  </label>
                </div>
              </fieldset>

              <div className="isf-flex isf-gap-4">
                <button className="isf-button isf-button-primary">ENGAGE DESIGN OPS</button>
                <button className="isf-button">CANCEL MISSION</button>
              </div>
            </div>
          </div>

          {/* Form Validation */}
          <div className="isf-mb-8">
            <h3 className="isf-text-2xl isf-font-display isf-mb-6">FORM VALIDATION</h3>
            
            <div className="isf-grid isf-grid-2 isf-gap-8">
              <div className="isf-form-group">
                <label htmlFor="errorInput" className="isf-form-label isf-form-label-required">REQUIRED FIELD</label>
                <input 
                  id="errorInput"
                  type="text" 
                  className="isf-input isf-input-error" 
                  placeholder="INVALID INPUT"
                />
                <span className="isf-form-error">ERROR: FIELD CANNOT BE EMPTY</span>
              </div>

              <div className="isf-form-group">
                <label htmlFor="helpInput" className="isf-form-label">FIELD WITH HELP</label>
                <input 
                  id="helpInput"
                  type="text" 
                  className="isf-input" 
                  placeholder="VALID FORMAT"
                />
                <span className="isf-form-help">Enter alphanumeric characters only</span>
              </div>
            </div>
          </div>
        </section>

        {/* UI Components */}
        <section className="isf-mb-20">
          <h2 className="isf-text-4xl isf-font-display isf-mb-12 isf-border-b isf-pb-4">
            UI COMPONENTS
          </h2>

          {/* Modal */}
          <div className="isf-mb-12">
            <h3 className="isf-text-2xl isf-font-display isf-mb-6">MODAL DIALOG</h3>
            
            <button className="isf-button isf-button-primary" onClick={() => setModalOpen(true)}>
              OPEN MODAL
            </button>

            {modalOpen && (
              <div className="isf-modal-overlay" onClick={() => setModalOpen(false)}>
                <div className="isf-modal" onClick={(e) => e.stopPropagation()}>
                  <div className="isf-modal-header">
                    <div className="isf-modal-title">MISSION BRIEFING</div>
                    <button className="isf-modal-close" onClick={() => setModalOpen(false)}>×</button>
                  </div>
                  <div className="isf-modal-body">
                    <p className="isf-text-md isf-mb-6">
                      This is a modal dialog component with a clean industrial design aesthetic.
                      It features smooth animations and proper backdrop handling.
                    </p>
                    <div className="isf-readout">
                      <div>STATUS: AWAITING CONFIRMATION</div>
                      <div>PRIORITY: HIGH</div>
                      <div>SECTOR: 001-F</div>
                    </div>
                  </div>
                  <div className="isf-modal-footer">
                    <button className="isf-button" onClick={() => setModalOpen(false)}>CANCEL</button>
                    <button className="isf-button isf-button-primary" onClick={() => setModalOpen(false)}>CONFIRM</button>
                  </div>
                </div>
              </div>
            )}

            <pre className="isf-panel isf-text-xs isf-mt-8">
{`<Modal 
  isOpen={modalOpen} 
  onClose={() => setModalOpen(false)}
  title="MISSION BRIEFING"
  footer={<>
    <button className="isf-button">CANCEL</button>
    <button className="isf-button isf-button-primary">CONFIRM</button>
  </>}
>
  <p>Modal content goes here...</p>
</Modal>`}
            </pre>
          </div>

          {/* Alerts */}
          <div className="isf-mb-12">
            <h3 className="isf-text-2xl isf-font-display isf-mb-6">ALERTS & NOTIFICATIONS</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="isf-mb-8">
              <div className="isf-alert isf-alert-success">
                <div className="isf-alert-content">
                  <div className="isf-alert-title">SUCCESS</div>
                  <div>Operation completed successfully. All systems nominal.</div>
                </div>
                <button className="isf-alert-dismiss">×</button>
              </div>

              <div className="isf-alert isf-alert-error">
                <div className="isf-alert-content">
                  <div className="isf-alert-title">ERROR</div>
                  <div>System malfunction detected. Immediate action required.</div>
                </div>
                <button className="isf-alert-dismiss">×</button>
              </div>

              <div className="isf-alert isf-alert-warning">
                <div className="isf-alert-content">
                  <div className="isf-alert-title">WARNING</div>
                  <div>Resource levels approaching critical threshold.</div>
                </div>
                <button className="isf-alert-dismiss">×</button>
              </div>

              <div className="isf-alert isf-alert-info">
                <div className="isf-alert-content">
                  <div className="isf-alert-title">INFO</div>
                  <div>System update available. Scheduled maintenance in 24 hours.</div>
                </div>
                <button className="isf-alert-dismiss">×</button>
              </div>
            </div>

            <pre className="isf-panel isf-text-xs">
{`<Alert type="success" title="SUCCESS" onDismiss={handleDismiss}>
  Operation completed successfully.
</Alert>`}
            </pre>
          </div>

          {/* Toasts */}
          <div className="isf-mb-12">
            <h3 className="isf-text-2xl isf-font-display isf-mb-6">TOAST NOTIFICATIONS</h3>
            
            <div className="isf-flex isf-gap-4 isf-mb-8">
              <button className="isf-button" onClick={() => addToast('success')}>SUCCESS</button>
              <button className="isf-button" onClick={() => addToast('error')}>ERROR</button>
              <button className="isf-button" onClick={() => addToast('warning')}>WARNING</button>
              <button className="isf-button" onClick={() => addToast('info')}>INFO</button>
            </div>

            {toasts.length > 0 && (
              <div className="isf-toast-container">
                {toasts.map(toast => (
                  <div key={toast.id} className={`isf-toast isf-toast-${toast.type}`}>
                    <div className="isf-toast-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                        {toast.type === 'success' && <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm-2 15l-5-5 1.4-1.4L8 12.2l7.6-7.6L17 6l-9 9z"/>}
                        {toast.type === 'error' && <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm1 15H9v-2h2v2zm0-4H9V5h2v6z"/>}
                        {toast.type === 'warning' && <path d="M10 0L0 18h20L10 0zm1 15H9v-2h2v2zm0-4H9V6h2v5z"/>}
                        {toast.type === 'info' && <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm1 15H9V9h2v6zm0-8H9V5h2v2z"/>}
                      </svg>
                    </div>
                    <div className="isf-toast-content">
                      <div className="isf-toast-title">{toast.title}</div>
                      <div className="isf-toast-message">{toast.message}</div>
                    </div>
                    <button className="isf-toast-close" onClick={() => setToasts(toasts.filter(t => t.id !== toast.id))}>×</button>
                  </div>
                ))}
              </div>
            )}

            <pre className="isf-panel isf-text-xs isf-mt-8">
{`<ToastContainer>
  <Toast 
    type="success" 
    title="SUCCESS" 
    message="Operation completed." 
    onClose={handleClose} 
  />
</ToastContainer>`}
            </pre>
          </div>

          {/* Tabs */}
          <div className="isf-mb-12">
            <h3 className="isf-text-2xl isf-font-display isf-mb-6">TABS</h3>
            
            <div className="isf-tabs isf-mb-8">
              <div className="isf-tabs-nav">
                <button 
                  className={`isf-tab ${activeTab === 0 ? 'active' : ''}`}
                  onClick={() => setActiveTab(0)}
                >
                  OVERVIEW
                </button>
                <button 
                  className={`isf-tab ${activeTab === 1 ? 'active' : ''}`}
                  onClick={() => setActiveTab(1)}
                >
                  SPECIFICATIONS
                </button>
                <button 
                  className={`isf-tab ${activeTab === 2 ? 'active' : ''}`}
                  onClick={() => setActiveTab(2)}
                >
                  OPERATIONS
                </button>
              </div>

              <div className={`isf-tab-content ${activeTab === 0 ? 'active' : ''}`}>
                <p className="isf-text-md isf-mb-4">
                  System overview and status information. All operational parameters within nominal ranges.
                </p>
                <div className="isf-readout">
                  <div>STATUS: OPERATIONAL</div>
                  <div>UPTIME: 99.7%</div>
                  <div>LAST CHECK: 00:02:14</div>
                </div>
              </div>

              <div className={`isf-tab-content ${activeTab === 1 ? 'active' : ''}`}>
                <p className="isf-text-md isf-mb-4">
                  Technical specifications and hardware configuration details.
                </p>
                <div className="isf-readout">
                  <div>PROCESSOR: QUANTUM CORE v4.2</div>
                  <div>MEMORY: 512 TB</div>
                  <div>NETWORK: 10 GBPS</div>
                </div>
              </div>

              <div className={`isf-tab-content ${activeTab === 2 ? 'active' : ''}`}>
                <p className="isf-text-md isf-mb-4">
                  Current operational status and active mission parameters.
                </p>
                <div className="isf-readout">
                  <div>ACTIVE MISSIONS: 12</div>
                  <div>UNITS DEPLOYED: 47</div>
                  <div>SECTORS COVERED: 8</div>
                </div>
              </div>
            </div>

            <pre className="isf-panel isf-text-xs">
{`<Tabs>
  <TabsNav>
    <Tab label="OVERVIEW" isActive={activeTab === 0} onClick={...} />
    <Tab label="SPECIFICATIONS" isActive={activeTab === 1} onClick={...} />
  </TabsNav>
  <TabContent isActive={activeTab === 0}>Content 1</TabContent>
  <TabContent isActive={activeTab === 1}>Content 2</TabContent>
</Tabs>`}
            </pre>
          </div>

          {/* Accordion */}
          <div className="isf-mb-12">
            <h3 className="isf-text-2xl isf-font-display isf-mb-6">ACCORDION</h3>
            
            <div className="isf-accordion isf-mb-8">
              <div className={`isf-accordion-item ${openAccordion === 0 ? 'active' : ''}`}>
                <div className="isf-accordion-header" onClick={() => setOpenAccordion(openAccordion === 0 ? null : 0)}>
                  <span>SYSTEM CONFIGURATION</span>
                  <svg className="isf-accordion-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 11L3 6h10z"/>
                  </svg>
                </div>
                <div className="isf-accordion-content">
                  <div className="isf-accordion-body">
                    Core system configuration parameters and environmental settings. All values are dynamically
                    adjustable through the control interface.
                  </div>
                </div>
              </div>

              <div className={`isf-accordion-item ${openAccordion === 1 ? 'active' : ''}`}>
                <div className="isf-accordion-header" onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)}>
                  <span>SECURITY PROTOCOLS</span>
                  <svg className="isf-accordion-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 11L3 6h10z"/>
                  </svg>
                </div>
                <div className="isf-accordion-content">
                  <div className="isf-accordion-body">
                    Advanced security measures including multi-factor authentication, encrypted communications,
                    and automated threat detection systems.
                  </div>
                </div>
              </div>

              <div className={`isf-accordion-item ${openAccordion === 2 ? 'active' : ''}`}>
                <div className="isf-accordion-header" onClick={() => setOpenAccordion(openAccordion === 2 ? null : 2)}>
                  <span>MAINTENANCE SCHEDULE</span>
                  <svg className="isf-accordion-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 11L3 6h10z"/>
                  </svg>
                </div>
                <div className="isf-accordion-content">
                  <div className="isf-accordion-body">
                    Routine maintenance windows and system update schedules. All operations are performed
                    during designated off-peak hours to minimize disruption.
                  </div>
                </div>
              </div>
            </div>

            <pre className="isf-panel isf-text-xs">
{`<Accordion>
  <AccordionItem 
    title="SYSTEM CONFIGURATION" 
    isOpen={openAccordion === 0}
    onClick={handleToggle}
  >
    Content goes here...
  </AccordionItem>
</Accordion>`}
            </pre>
          </div>

          {/* Loading States */}
          <div className="isf-mb-12">
            <h3 className="isf-text-2xl isf-font-display isf-mb-6">LOADING STATES</h3>
            
            <div className="isf-flex isf-gap-8 isf-mb-8 isf-items-center">
              <div className="isf-spinner isf-spinner-small"></div>
              <div className="isf-spinner"></div>
              <div className="isf-spinner isf-spinner-large"></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="isf-mb-8">
              <div className="isf-skeleton isf-skeleton-title"></div>
              <div className="isf-skeleton isf-skeleton-text"></div>
              <div className="isf-skeleton isf-skeleton-text"></div>
              <div className="isf-skeleton isf-skeleton-block"></div>
            </div>

            <pre className="isf-panel isf-text-xs">
{`<Spinner size="small" />
<Skeleton type="title" />
<Skeleton type="text" />
<Skeleton type="block" />`}
            </pre>
          </div>

          {/* Tooltip */}
          <div className="isf-mb-8">
            <h3 className="isf-text-2xl isf-font-display isf-mb-6">TOOLTIP</h3>
            
            <div className="isf-mb-8">
              <div className="isf-tooltip-wrapper isf-inline-block">
                <button className="isf-button">HOVER FOR INFO</button>
                <div className="isf-tooltip">ADDITIONAL INFORMATION</div>
              </div>
            </div>

            <pre className="isf-panel isf-text-xs">
{`<Tooltip text="ADDITIONAL INFORMATION">
  <button className="isf-button">HOVER FOR INFO</button>
</Tooltip>`}
            </pre>
          </div>
        </section>

        {/* Feature Blocks */}
        <section className="isf-mb-20">
          <h2 className="isf-text-4xl isf-font-display isf-mb-12 isf-border-b isf-pb-4">
            FEATURE BLOCKS
          </h2>
          
          <div className="isf-feature-block isf-feature-block-primary isf-mb-8">
            <div className="isf-feature-id">R9</div>
            <div className="isf-stripe-pattern"></div>
            <div className="isf-p-16">
              <div className="isf-mb-8">
                <span className="isf-system-text">INTERNAL ROBOTICS PROGRAM</span>
              </div>
              <h3 className="isf-text-8xl isf-text-display isf-mb-6">
                Adaptive<br/>Manufacturing
              </h3>
              <p className="isf-text-2xl isf-mb-8 isf-opacity-90">
                Engineered for continuous industrial output, this robotics system integrates directly into the manufacturing floor
              </p>
              <div className="isf-flex isf-flex-between isf-border-t isf-pt-6">
                <span className="isf-system-text">5-WEST</span>
                <span className="isf-system-text">ACTUATOR SYNC</span>
                <span className="isf-system-text">SECTOR-001</span>
              </div>
            </div>
          </div>

          <pre className="isf-panel isf-text-xs">
{`<div class="isf-feature-block isf-feature-block-primary">
  <div class="isf-feature-id">R9</div>
  <div class="isf-stripe-pattern"></div>
  <div class="isf-p-16">
    <h3 class="isf-text-8xl isf-text-display">Your Title</h3>
    <p>Your content here...</p>
  </div>
</div>`}
          </pre>
        </section>

        {/* Typography */}
        <section className="isf-mb-20">
          <h2 className="isf-text-4xl isf-font-display isf-mb-12 isf-border-b isf-pb-4">
            TYPOGRAPHY SCALE
          </h2>
          
          <div className="isf-card isf-mb-8">
            <div className="isf-text-hero isf-text-display isf-mb-4">Hero Text</div>
            <div className="isf-text-8xl isf-text-display isf-mb-4">Display 8XL</div>
            <div className="isf-text-6xl isf-weight-black isf-mb-4">Display 6XL</div>
            <div className="isf-text-4xl isf-weight-bold isf-mb-4">Display 4XL</div>
            <div className="isf-text-2xl isf-mb-4">Text 2XL</div>
            <div className="isf-text-base isf-font-mono isf-mb-4">Monospace Base</div>
            <div className="isf-text-xs isf-font-mono">Monospace XS</div>
          </div>

          <pre className="isf-panel isf-text-xs">
{`<div class="isf-text-hero isf-text-display">Hero Text</div>
<div class="isf-text-8xl isf-text-display">Display 8XL</div>
<div class="isf-text-base isf-font-mono">Monospace Base</div>`}
          </pre>
        </section>

        {/* Utilities */}
        <section className="isf-mb-20">
          <h2 className="isf-text-4xl isf-font-display isf-mb-12 isf-border-b isf-pb-4">
            UTILITY CLASSES
          </h2>
          
          <div className="isf-grid isf-grid-2 isf-gap-8">
            <div className="isf-panel">
              <div className="isf-panel-header">LAYOUT</div>
              <div className="isf-readout">
                <div>isf-flex, isf-flex-col, isf-flex-between</div>
                <div>isf-grid, isf-grid-2, isf-grid-3, isf-grid-auto</div>
                <div>isf-gap-4, isf-gap-8, isf-gap-16</div>
              </div>
            </div>

            <div className="isf-panel">
              <div className="isf-panel-header">SPACING</div>
              <div className="isf-readout">
                <div>isf-m-8, isf-mt-8, isf-mb-8</div>
                <div>isf-p-8, isf-pt-8, isf-pb-8</div>
                <div>Sizes: 2, 4, 6, 8, 12, 16, 20</div>
              </div>
            </div>

            <div className="isf-panel">
              <div className="isf-panel-header">COLORS</div>
              <div className="isf-readout">
                <div>isf-color-accent, isf-color-light, isf-color-dark</div>
                <div>isf-bg-accent, isf-bg-light, isf-bg-dark</div>
                <div>isf-opacity-30 through isf-opacity-100</div>
              </div>
            </div>

            <div className="isf-panel">
              <div className="isf-panel-header">BORDERS</div>
              <div className="isf-readout">
                <div>isf-border, isf-border-t, isf-border-b</div>
                <div>isf-border-accent</div>
                <div>isf-border-thick</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="isf-border-t isf-pt-16 isf-text-center">
          <div className="isf-text-5xl isf-text-display isf-color-accent isf-mb-4">
            INDUSTRIAL SCI-FI CSS
          </div>
          <div className="isf-text-lg isf-mb-8">
            (A design system for the future)
          </div>
          <div className="isf-flex isf-flex-center isf-gap-8 isf-system-text">
            <span>V1.0.0</span>
            <span>MIT LICENSE</span>
            <span>© 2026</span>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default ComponentShowcase
