'use client';

import React, { useState, useEffect } from 'react';
import {
  Home,
  LayoutGrid,
  Wrench,
  Calculator,
  Phone,
  MessageSquare,
} from 'lucide-react';

interface MobileBottomNavProps {
  onOpenEstimator?: () => void;
}

export default function MobileBottomNav({ onOpenEstimator }: MobileBottomNavProps) {
  const [activeTab, setActiveTab] = useState<string>('hero');

  const navItems = [
    { id: '#hero', tab: 'hero', label: 'Home', icon: Home },
    { id: '#projects', tab: 'projects', label: 'Projects', icon: LayoutGrid },
    { id: '#machinery', tab: 'machinery', label: 'Fleet', icon: Wrench },
    { id: 'estimator', tab: 'estimator', label: 'Estimator', icon: Calculator, isAction: true },
    { id: '#contact', tab: 'contact', label: 'Audit', icon: MessageSquare },
  ];

  // Real-time mobile scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { tab: 'hero', id: '#hero' },
        { tab: 'projects', id: '#projects' },
        { tab: 'machinery', id: '#machinery' },
        { tab: 'contact', id: '#contact' },
      ];

      const scrollPos = window.scrollY + window.innerHeight * 0.4;

      for (let i = sections.length - 1; i >= 0; i--) {
        const item = sections[i];
        const el = document.querySelector(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPos >= top) {
            setActiveTab(item.tab);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (item: (typeof navItems)[0]) => {
    if (item.isAction) {
      if (onOpenEstimator) onOpenEstimator();
      return;
    }

    setActiveTab(item.tab);
    const el = document.querySelector(item.id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="mobile-app-bottom-nav"
      style={{
        position: 'fixed',
        bottom: 'max(14px, env(safe-area-inset-bottom, 14px))',
        left: '14px',
        right: '14px',
        zIndex: 120,
        display: 'none',
        pointerEvents: 'none',
      }}
      aria-label="Mobile App Navigation Bar"
    >
      <div
        style={{
          pointerEvents: 'auto',
          maxWidth: '460px',
          margin: '0 auto',
          background: 'var(--bg-surface-translucent, rgba(247, 247, 245, 0.94))',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          borderRadius: '9999px',
          padding: '8px 12px',
          border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.8))',
          boxShadow: '0 16px 40px -8px rgba(13, 27, 42, 0.28), 0 0 20px rgba(212, 168, 83, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          transition: 'background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.tab && !item.isAction;
          const isEstimator = item.isAction;

          return (
            <button
              key={item.tab}
              onClick={() => handleTabClick(item)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                padding: isEstimator ? '8px 14px' : '6px 8px',
                borderRadius: isEstimator ? '22px' : '16px',
                border: isEstimator ? '1.5px solid var(--sunset-gold, #D4A853)' : 'none',
                background: isEstimator
                  ? 'linear-gradient(145deg, #162638 0%, #0D1B2A 100%)'
                  : 'transparent',
                color: isEstimator
                  ? 'var(--sunset-gold, #D4A853)'
                  : isActive
                  ? 'var(--sunset-gold, #D4A853)'
                  : 'var(--text-primary, #0D1B2A)',
                boxShadow: isEstimator
                  ? '0 6px 18px rgba(13, 27, 42, 0.4), 0 0 14px rgba(212, 168, 83, 0.35)'
                  : 'none',
                cursor: 'pointer',
                transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                minWidth: isEstimator ? '64px' : '52px',
                marginTop: isEstimator ? '-12px' : '0',
                position: 'relative',
              }}
              className="mobile-nav-btn"
              aria-label={item.label}
            >
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={isEstimator ? 19 : 18} strokeWidth={isActive || isEstimator ? 2.5 : 2} />

                {/* Active Gold Indicator Dot */}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-4px',
                      right: '-4px',
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: 'var(--sunset-gold, #D4A853)',
                      boxShadow: '0 0 6px var(--sunset-gold, #D4A853)',
                    }}
                  />
                )}
              </div>

              <span
                style={{
                  fontSize: '0.62rem',
                  fontWeight: isActive || isEstimator ? 800 : 600,
                  letterSpacing: '0.02em',
                  lineHeight: 1,
                  color: isEstimator
                    ? 'var(--sunset-gold, #D4A853)'
                    : isActive
                    ? 'var(--sunset-gold, #D4A853)'
                    : 'var(--text-muted, #8A857F)',
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .mobile-app-bottom-nav {
            display: block !important;
          }
        }
        .mobile-nav-btn:active {
          transform: scale(0.92);
        }
      `}</style>
    </nav>
  );
}
