'use client';

import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'monogram';
  theme?: 'dark' | 'light' | 'auto';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function BrandLogo({
  variant = 'full',
  theme = 'auto',
  size = 'md',
  className = '',
  onClick,
}: BrandLogoProps) {
  // Sizing tokens
  const monogramSizes = {
    sm: { w: 32, h: 32 },
    md: { w: 42, h: 42 },
    lg: { w: 56, h: 56 },
  };

  const titleSizes = {
    sm: '0.94rem',
    md: '1.18rem',
    lg: '1.5rem',
  };

  const subSizes = {
    sm: '0.52rem',
    md: '0.62rem',
    lg: '0.74rem',
  };

  const { w, h } = monogramSizes[size];

  // Dynamic theme colors
  const primaryTextColor =
    theme === 'light'
      ? '#F7F7F5'
      : theme === 'dark'
      ? '#0D1B2A'
      : 'var(--text-primary, #0D1B2A)';

  const subTextColor =
    theme === 'light'
      ? 'rgba(247, 247, 245, 0.72)'
      : theme === 'dark'
      ? 'var(--driftwood-gray, #8A857F)'
      : 'var(--text-muted, #8A857F)';

  const jColumnColor =
    theme === 'light'
      ? '#F7F7F5'
      : theme === 'dark'
      ? '#0D1B2A'
      : 'var(--text-primary, #0D1B2A)';

  return (
    <div
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size === 'sm' ? '10px' : '14px',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
      }}
      className={`brand-logo-container ${className}`}
      aria-label="G&J Buildcon Logo"
    >
      {/* ============================================================
          BESPOKE ARCHITECTURAL MONOGRAM (Interlocking G & J Monolith)
          Precision structural geometry, 24K gold bevels & keystone
          ============================================================ */}
      <div
        style={{
          width: `${w}px`,
          height: `${h}px`,
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <defs>
            {/* 24K Architectural Sunset Gold Gradient */}
            <linearGradient id="brandGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5DEB3" />
              <stop offset="35%" stopColor="#ECC675" />
              <stop offset="70%" stopColor="#D4A853" />
              <stop offset="100%" stopColor="#A87A28" />
            </linearGradient>

            {/* Seafoam Turquoise Keystone Accent */}
            <linearGradient id="brandSeafoamGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5E9F9D" />
              <stop offset="100%" stopColor="#7FB8B6" />
            </linearGradient>

            {/* Plinth Base Gradient */}
            <linearGradient id="brandPlinthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(212, 168, 83, 0.16)" />
              <stop offset="100%" stopColor="rgba(13, 27, 42, 0.05)" />
            </linearGradient>

            {/* Soft Ambient Halo Shadow */}
            <filter id="brandGlow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#D4A853" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Precision Architectural Plinth (Luxury Beveled Squircle) */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="20"
            fill="url(#brandPlinthGrad)"
            stroke="url(#brandGoldGrad)"
            strokeWidth="1.8"
          />

          {/* Subtle Inset Construction Guideline */}
          <rect
            x="8.5"
            y="8.5"
            width="83"
            height="83"
            rx="16"
            stroke="rgba(212, 168, 83, 0.22)"
            strokeWidth="0.8"
            strokeDasharray="3 3"
          />

          {/* ============================================================
              FOUNDATION PILLAR 'J' (Rock-Socketed Vertical Column)
              ============================================================ */}
          <path
            d="M 52 20 
               L 64 20 
               L 64 61 
               C 64 70.5, 57 76.5, 47 76.5 
               C 37 76.5, 30 70, 30 61.5 
               L 40.5 61.5 
               C 40.5 65.5, 43 68, 47 68 
               C 51 68, 54 65, 54 60.5 
               L 54 20 
               Z"
            fill={jColumnColor}
          />

          {/* ============================================================
              STRUCTURAL ARCHITECTURAL 'G' (Cantilever Beam Monolith)
              Outer cantilever frame wrapping and interlocking
              ============================================================ */}
          <path
            d="M 76 29 
               L 38 29 
               C 26 29, 18 38, 18 50 
               C 18 62, 26 71, 38 71 
               L 41 71 
               L 41 62.5 
               L 38 62.5 
               C 31 62.5, 27 57, 27 50 
               C 27 43.5, 31 38, 38 38 
               L 76 38 
               Z"
            fill="url(#brandGoldGrad)"
            filter="url(#brandGlow)"
          />

          {/* 'G' Crossbar & Return Cantilever Column */}
          <path
            d="M 68 45 
               L 82 45 
               L 82 66 
               C 82 72.5, 76 77.5, 69 77.5 
               L 53 77.5 
               L 53 69 
               L 68 69 
               C 71.5 69, 73.5 67, 73.5 64 
               L 73.5 53.5 
               L 68 53.5 
               Z"
            fill="url(#brandGoldGrad)"
            filter="url(#brandGlow)"
          />

          {/* Architectural Keystone Crown Facet (Seafoam Turquoise) */}
          <polygon
            points="50,11 54.5,16 50,21 45.5,16"
            fill="url(#brandSeafoamGrad)"
            stroke="url(#brandGoldGrad)"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      {/* ============================================================
          BRAND WORDMARK TYPOGRAPHY (Architectural Sans & Kerning)
          ============================================================ */}
      {variant !== 'monogram' && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-heading), "Outfit", sans-serif',
              fontSize: titleSizes[size],
              fontWeight: 800,
              letterSpacing: '0.14em',
              lineHeight: 1.05,
              color: primaryTextColor,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'color 0.35s ease',
            }}
          >
            <span>G&J</span>
            <span style={{ color: 'var(--sunset-gold, #D4A853)', fontWeight: 800 }}>BUILDCON</span>
          </div>

          {variant === 'full' && (
            <div
              style={{
                fontSize: subSizes[size],
                fontWeight: 700,
                letterSpacing: '0.26em',
                textTransform: 'uppercase',
                color: subTextColor,
                marginTop: '4px',
                transition: 'color 0.35s ease',
              }}
            >
              Civil • Piling • Architecture
            </div>
          )}
        </div>
      )}
    </div>
  );
}
