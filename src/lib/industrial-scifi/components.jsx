/**
 * INDUSTRIAL SCI-FI DESIGN SYSTEM
 * SVG Component Library
 * 
 * Reusable SVG components for the design system
 */

// Corner Registration Mark
export const CornerMark = ({ className = "" }) => (
  <svg className={className} width="60" height="60" viewBox="0 0 60 60">
    <rect x="0" y="0" width="2" height="20" fill="currentColor"/>
    <rect x="0" y="0" width="20" height="2" fill="currentColor"/>
    <rect x="18" y="18" width="24" height="24" fill="#FF5722" opacity="0.8"/>
  </svg>
);

// Crosshair Reticle
export const Crosshair = ({ size = 16, color = "#FF5722" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16">
    <line x1="8" y1="0" x2="8" y2="16" stroke={color} strokeWidth="1"/>
    <line x1="0" y1="8" x2="16" y2="8" stroke={color} strokeWidth="1"/>
    <circle cx="8" cy="8" r="4" stroke={color} strokeWidth="1" fill="none"/>
  </svg>
);

// Registered Mark Badge
export const RegisteredMark = ({ size = 40, color = "#D4C5B0" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="2" fill="none"/>
    <text x="20" y="26" fontSize="20" fontWeight="700" fill={color} textAnchor="middle">R</text>
  </svg>
);

// Dot Matrix Logo Generator
export const DotMatrix = ({ size = 200, pattern = "center" }) => {
  const dots = [];
  const gridSize = 5;
  const spacing = 30;
  const baseOffset = 40;
  
  for (let i = 0; i < gridSize * gridSize; i++) {
    const row = Math.floor(i / gridSize);
    const col = i % gridSize;
    const x = baseOffset + col * spacing;
    const y = baseOffset + row * spacing;
    
    let inPattern = false;
    let radius = 3;
    
    if (pattern === "center") {
      inPattern = (row === 2 && col === 2) || 
                  (row === 1 && col === 2) || 
                  (row === 3 && col === 2) ||
                  (row === 2 && col === 1) || 
                  (row === 2 && col === 3);
      radius = inPattern ? 6 : 3;
    }
    
    dots.push({
      x, y, radius,
      fill: inPattern ? "#FF5722" : "#D4C5B0",
      opacity: inPattern ? 1 : 0.6
    });
  }
  
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={dot.radius}
          fill={dot.fill}
          opacity={dot.opacity}
        />
      ))}
    </svg>
  );
};

// Wave Pattern for Audio/Data Visualization
export const WavePattern = ({ width = 300, height = 150, bars = 15, color = "#FF5722" }) => {
  const barWidth = 3;
  const spacing = width / bars;
  
  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      {Array.from({ length: bars }).map((_, i) => {
        const barHeight = 30 + Math.sin(i * 0.5) * 20;
        const y = height / 2 - barHeight / 2;
        return (
          <rect
            key={i}
            x={i * spacing}
            y={y}
            width={barWidth}
            height={barHeight}
            fill={color}
          />
        );
      })}
    </svg>
  );
};

// Triangle Indicator
export const TriangleIndicator = ({ size = 20, color = "#FF5722", direction = "up" }) => {
  const rotations = {
    up: 0,
    down: 180,
    left: 270,
    right: 90
  };
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20"
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
    >
      <polygon points="10,2 18,18 2,18" fill={color}/>
    </svg>
  );
};

// Corner Marks Container Component
export const CornerMarks = () => (
  <div className="isf-corner-marks">
    <CornerMark className="corner top-left" />
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
);

export default {
  CornerMark,
  CornerMarks,
  Crosshair,
  RegisteredMark,
  DotMatrix,
  WavePattern,
  TriangleIndicator
};
