import { useState } from 'react'
import LandingPage from './components/LandingPage'
import ComponentShowcase from './components/ComponentShowcase'
import './App.css'

function App() {
  const [view, setView] = useState<'landing' | 'showcase'>('landing')

  return (
    <>
      {/* Navigation Toggle */}
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '80px',
        zIndex: 1000,
        display: 'flex',
        gap: '8px',
        fontFamily: 'monospace',
        fontSize: '11px'
      }}>
        <button
          onClick={() => setView('landing')}
          style={{
            padding: '8px 16px',
            background: view === 'landing' ? '#FF5722' : 'transparent',
            color: view === 'landing' ? '#1a1a1a' : '#D4C5B0',
            border: '1px solid ' + (view === 'landing' ? '#FF5722' : '#D4C5B0'),
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            letterSpacing: '1px'
          }}
        >
          LANDING
        </button>
        <button
          onClick={() => setView('showcase')}
          style={{
            padding: '8px 16px',
            background: view === 'showcase' ? '#FF5722' : 'transparent',
            color: view === 'showcase' ? '#1a1a1a' : '#D4C5B0',
            border: '1px solid ' + (view === 'showcase' ? '#FF5722' : '#D4C5B0'),
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            letterSpacing: '1px'
          }}
        >
          SHOWCASE
        </button>
      </div>

      {view === 'landing' ? <LandingPage /> : <ComponentShowcase />}
    </>
  )
}

export default App
