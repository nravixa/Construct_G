'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Home,
  LayoutGrid,
  Building2,
  Wrench,
  Award,
  MessageSquare,
  Play,
  Calculator,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  Radio,
  Layers,
} from 'lucide-react';

interface LeftFloatingDockProps {
  onWatchShowreel?: () => void;
  onOpenEstimator?: () => void;
  activeProjectImage?: string;
}

interface NavSection {
  id: string;
  tab: string;
  label: string;
  subtitle: string;
  metric: string;
  icon: React.ElementType;
}

export default function LeftFloatingDock({
  onWatchShowreel,
  onOpenEstimator,
  activeProjectImage = '/images/hero_coastal_villa.jpg',
}: LeftFloatingDockProps) {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navSections: NavSection[] = [
    {
      id: '#hero',
      tab: 'hero',
      label: 'Overview',
      subtitle: 'Pune Civil & Piling Headquarters',
      metric: 'EST. 2008 • PCMC',
      icon: Home,
    },
    {
      id: '#projects',
      tab: 'projects',
      label: 'Landmarks',
      subtitle: 'Curated Architectural Portfolio',
      metric: '25L+ Sq. Ft. Delivered',
      icon: LayoutGrid,
    },
    {
      id: '#services',
      tab: 'services',
      label: 'Core Services',
      subtitle: 'Turnkey RCC & Deep Foundations',
      metric: 'IS 2911 Class-A',
      icon: Building2,
    },
    {
      id: '#machinery',
      tab: 'machinery',
      label: 'Piling Fleet',
      subtitle: 'In-House Heavy Rotary Drill Rigs',
      metric: '15+ Rigs • SANY SR285R',
      icon: Wrench,
    },
    {
      id: '#leadership',
      tab: 'leadership',
      label: 'Leadership',
      subtitle: 'Mr. Umesh Gatkal & Milestone History',
      metric: '700+ Workforce',
      icon: Award,
    },
    {
      id: '#contact',
      tab: 'contact',
      label: 'Consultation',
      subtitle: 'Direct Senior Engineering Desk',
      metric: '24h Site Feasibility',
      icon: MessageSquare,
    },
  ];

  // ============================================================
  // ADVANCED SCROLL-SPY & SCROLL PROGRESS TRACKING
  // ============================================================
  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate overall scroll percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(Math.round(currentProgress));
      }

      // 2. Determine active section based on scroll offsets
      const sectionElements = navSections.map((s) => ({
        tab: s.tab,
        el: document.querySelector(s.id),
      }));

      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el) {
          const rect = item.el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPos >= top) {
            setActiveSection(item.tab);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string, tab: string) => {
    setActiveSection(tab);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      style={{
        position: 'fixed',
        left: isCollapsed ? '-46px' : '18px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 95,
        display: 'none',
        transition: 'left 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="advanced-floating-dock"
      aria-label="Advanced Architectural Navigation Console"
    >
      <div
        style={{
          position: 'relative',
          background: 'var(--bg-surface-translucent, rgba(247, 247, 245, 0.94))',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          borderRadius: '34px',
          padding: '16px 8px 14px 8px',
          boxShadow: 'var(--shadow-dock, 0 24px 50px -10px rgba(13, 27, 42, 0.18), 0 0 20px rgba(212, 168, 83, 0.1))',
          border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.8))',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          width: '56px',
          boxSizing: 'border-box',
          transition: 'background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        {/* ========================================================
            VERTICAL GOLD PROGRESS TRACK (Fluid Telemetry Spine)
            ======================================================== */}
        <div
          style={{
            position: 'absolute',
            left: '3px',
            top: '20px',
            bottom: '20px',
            width: '2px',
            background: 'rgba(212, 168, 83, 0.18)',
            borderRadius: '9999px',
            overflow: 'hidden',
          }}
          title={`Page Progress: ${scrollProgress}%`}
        >
          <div
            style={{
              width: '100%',
              height: `${scrollProgress}%`,
              background: 'linear-gradient(180deg, var(--sunset-gold, #D4A853) 0%, var(--seafoam-turquoise, #7FB8B6) 100%)',
              boxShadow: '0 0 6px var(--sunset-gold, #D4A853)',
              transition: 'height 0.15s ease-out',
            }}
          />
        </div>

        {/* ========================================================
            COLLAPSE / EXPAND TOGGLE TAB (With Gold Glow)
            ======================================================== */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            position: 'absolute',
            right: '-13px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            background: 'var(--ocean-navy, #0D1B2A)',
            color: '#F7F7F5',
            border: '1.5px solid var(--sunset-gold, #D4A853)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(13, 27, 42, 0.35), 0 0 10px rgba(212, 168, 83, 0.25)',
            cursor: 'pointer',
            transition: 'transform 0.25s ease, background 0.25s ease',
            zIndex: 20,
          }}
          className="dock-collapse-toggle"
          title={isCollapsed ? 'Expand Dock' : 'Collapse Dock'}
          aria-label={isCollapsed ? 'Expand Navigation Dock' : 'Collapse Navigation Dock'}
        >
          {isCollapsed ? <ChevronRight size={14} strokeWidth={2.5} /> : <ChevronLeft size={14} strokeWidth={2.5} />}
        </button>

        {/* ========================================================
            LIVE TELEMETRY STATUS PILL (Mini Beacon)
            ======================================================== */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '38px',
            height: '20px',
            borderRadius: '9999px',
            background: 'rgba(13, 27, 42, 0.08)',
            border: '1px solid rgba(212, 168, 83, 0.3)',
            cursor: 'pointer',
            fontSize: '0.62rem',
            fontWeight: 800,
            color: 'var(--text-primary, #0D1B2A)',
            letterSpacing: '0.04em',
            padding: '2px 4px',
          }}
          onClick={scrollToTop}
          title="Click to Scroll to Top"
        >
          <span>{scrollProgress}%</span>
        </div>

        {/* Divider */}
        <div style={{ width: '22px', height: '1px', background: 'var(--border-limestone, rgba(220, 205, 179, 0.6))' }} />

        {/* ========================================================
            NAVIGATION ICONS CLUSTER (With Scroll-Spy & HUD Flyouts)
            ======================================================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          {navSections.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.tab;
            const isHovered = hoveredSection === item.tab;

            return (
              <div
                key={item.tab}
                style={{ position: 'relative' }}
                onMouseEnter={() => setHoveredSection(item.tab)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <button
                  onClick={() => scrollTo(item.id, item.tab)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: isActive ? 'var(--ocean-navy, #0D1B2A)' : 'transparent',
                    backgroundImage: isActive ? 'linear-gradient(145deg, #162638 0%, #0D1B2A 100%)' : 'none',
                    color: isActive ? 'var(--sunset-gold, #D4A853)' : 'var(--text-primary, #0D1B2A)',
                    border: isActive ? '1.5px solid var(--sunset-gold, #D4A853)' : '1px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isActive
                      ? '0 6px 18px rgba(13, 27, 42, 0.35), 0 0 12px rgba(212, 168, 83, 0.3)'
                      : 'none',
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                  aria-label={item.label}
                  className="dock-icon-btn"
                >
                  <Icon size={17} strokeWidth={isActive ? 2.4 : 2} />

                  {/* Active Indicator Pulse Ring */}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        inset: '-3px',
                        borderRadius: '50%',
                        border: '1px solid var(--sunset-gold, #D4A853)',
                        opacity: 0.6,
                        animation: 'dockPulse 2.5s infinite',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                </button>

                {/* ====================================================
                    ADVANCED ARCHITECTURAL HUD CARD (On Hover)
                    ==================================================== */}
                {isHovered && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '52px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: '#0D1B2A',
                      color: '#F5F1E8',
                      border: '1px solid var(--sunset-gold, #D4A853)',
                      padding: '10px 16px',
                      borderRadius: '16px',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 12px 32px rgba(13, 27, 42, 0.4), 0 0 16px rgba(212, 168, 83, 0.25)',
                      pointerEvents: 'none',
                      zIndex: 150,
                      animation: 'fadeInHUD 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                      minWidth: '180px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '2px' }}>
                      <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#F5F1E8' }}>
                        {item.label}
                      </span>
                      <span
                        style={{
                          fontSize: '0.62rem',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          color: 'var(--sunset-gold, #D4A853)',
                          background: 'rgba(212, 168, 83, 0.14)',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          border: '1px solid rgba(212, 168, 83, 0.3)',
                        }}
                      >
                        {item.metric}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#D1D5DB', fontWeight: 500 }}>
                      {item.subtitle}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ width: '22px', height: '1px', background: 'var(--border-limestone, rgba(220, 205, 179, 0.6))' }} />

        {/* ========================================================
            QUICK COST ESTIMATOR MODAL TRIGGER (Calculator Shortcut)
            ======================================================== */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={onOpenEstimator}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(212, 168, 83, 0.14)',
              border: '1px solid rgba(212, 168, 83, 0.45)',
              color: 'var(--sunset-gold, #D4A853)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(13, 27, 42, 0.08)',
              transition: 'all 0.25s ease',
            }}
            className="dock-calc-btn"
            title="Open Piling & Civil Estimator Modal"
            aria-label="Open Project Cost Estimator"
          >
            <Calculator size={17} />
          </button>
        </div>

        {/* ========================================================
            FEATURED PROJECT THUMBNAIL PREVIEW (With Gold Halo)
            ======================================================== */}
        <div
          style={{
            position: 'relative',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid var(--sunset-gold, #D4A853)',
            boxShadow: '0 4px 14px rgba(212, 168, 83, 0.3)',
            cursor: 'pointer',
            transition: 'transform 0.25s ease',
          }}
          className="dock-thumb-preview"
          onClick={() => scrollTo('#projects', 'projects')}
          title="View Featured Architectural Landmarks"
        >
          <Image
            src={activeProjectImage}
            alt="Current Project Thumbnail"
            fill
            style={{ objectFit: 'cover' }}
            sizes="40px"
          />
        </div>

        {/* ========================================================
            CINEMATIC SHOWREEL TRIGGER (With Glowing Radar Ring)
            ======================================================== */}
        <div
          onClick={onWatchShowreel}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            gap: '3px',
          }}
          title="Watch Architectural Engineering Showreel"
        >
          <div
            style={{
              position: 'relative',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'var(--bg-surface, #ffffff)',
              border: '1.5px solid var(--sunset-gold, #D4A853)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--ocean-navy, #0D1B2A)',
              boxShadow: '0 4px 12px rgba(13, 27, 42, 0.12)',
              transition: 'transform 0.25s ease, background 0.25s ease, color 0.25s ease',
            }}
            className="showreel-play-btn"
          >
            <Play size={12} fill="var(--sunset-gold, #D4A853)" color="var(--sunset-gold, #D4A853)" />

            {/* Ripple Radar Wave */}
            <span
              style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '50%',
                border: '1px solid var(--sunset-gold, #D4A853)',
                opacity: 0.5,
                animation: 'dockRadarWave 2.8s infinite',
                pointerEvents: 'none',
              }}
            />
          </div>
          <span
            style={{
              fontSize: '0.58rem',
              color: 'var(--text-muted, #8A857F)',
              fontWeight: 800,
              textAlign: 'center',
              lineHeight: 1.1,
              letterSpacing: '0.04em',
            }}
          >
            REEL
          </span>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .advanced-floating-dock {
            display: block !important;
          }
        }
        .dock-icon-btn:hover {
          background: rgba(212, 168, 83, 0.16) !important;
          color: var(--sunset-gold) !important;
          transform: scale(1.1);
        }
        .dock-calc-btn:hover {
          background: #162638 !important;
          color: var(--sunset-gold) !important;
          border-color: var(--sunset-gold) !important;
          transform: scale(1.12);
          box-shadow: 0 0 16px rgba(212, 168, 83, 0.35) !important;
        }
        .dock-thumb-preview:hover {
          transform: scale(1.15);
          box-shadow: 0 0 18px rgba(212, 168, 83, 0.5);
        }
        .showreel-play-btn:hover {
          transform: scale(1.18);
          background: #162638 !important;
          border-color: var(--sunset-gold) !important;
          box-shadow: var(--shadow-gold-glow) !important;
        }
        .dock-collapse-toggle:hover {
          background: var(--sunset-gold);
          color: #0D1B2A !important;
          transform: translateY(-50%) scale(1.18);
        }
        @keyframes fadeInHUD {
          from {
            opacity: 0;
            transform: translate(-8px, -50%) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translate(0, -50%) scale(1);
          }
        }
        @keyframes dockPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.14);
            opacity: 0.15;
          }
        }
        @keyframes dockRadarWave {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.28);
            opacity: 0.25;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </aside>
  );
}
