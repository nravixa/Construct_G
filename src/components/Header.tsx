'use client';

import React, { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { Search, ArrowRight, Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onOpenEstimator?: () => void;
  onNavigateHome?: () => void;
}

export default function Header({ onOpenEstimator, onNavigateHome }: HeaderProps) {
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlTheme = urlParams.get('theme');
      let saved = localStorage.getItem('gj_theme');
      if (urlTheme === 'dark' || urlTheme === 'light') {
        saved = urlTheme;
        localStorage.setItem('gj_theme', urlTheme);
      }
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = saved ? saved === 'dark' : Boolean(prefersDark);
      if (shouldBeDark) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleDarkMode = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      if (next) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('gj_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('gj_theme', 'light');
      }
    } catch {
      // ignore
    }
  };

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, name: string, href: string) => {
    e.preventDefault();
    setActiveNav(name);
    setMobileMenuOpen(false);
    if (name === 'Home' && onNavigateHome) onNavigateHome();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 'max(14px, env(safe-area-inset-top, 14px))',
        left: 0,
        right: 0,
        zIndex: 100,
        pointerEvents: 'none',
      }}
    >
      <div className="container-image-style" style={{ pointerEvents: 'auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          {/* Left: Brand Monogram & Wordmark (Consistent Architectural Logo) */}
          <button
            onClick={onNavigateHome}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              padding: 0,
            }}
            aria-label="G&J Buildcon Home"
          >
            <BrandLogo variant="compact" size="md" />
          </button>

          {/* Center: Floating Frosted Pill Menu (Coastal Architecture Style) */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '4px',
              background: isDark ? 'rgba(10, 20, 32, 0.92)' : 'rgba(247, 247, 245, 0.92)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '9999px',
              padding: '6px 8px',
              boxShadow: isDark
                ? '0 12px 32px rgba(0, 0, 0, 0.45), 0 0 16px rgba(212, 168, 83, 0.1)'
                : '0 12px 32px rgba(13, 27, 42, 0.08), 0 2px 6px rgba(212, 168, 83, 0.06)',
              border: isDark ? '1px solid rgba(212, 168, 83, 0.35)' : '1px solid rgba(220, 205, 179, 0.6)',
              transition: 'all 0.3s ease',
            }}
            className="navbar-desktop-pill"
          >
            {navItems.map((item) => {
              const isActive = activeNav === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.name, item.href)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '9999px',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    color: isActive
                      ? (isDark ? '#0D1B2A' : '#F7F7F5')
                      : (isDark ? '#D1D5DB' : 'var(--ocean-navy)'),
                    background: isActive
                      ? (isDark ? 'linear-gradient(135deg, #ECC675 0%, #D4A853 100%)' : 'var(--ocean-navy)')
                      : 'transparent',
                    backgroundImage: isActive
                      ? (isDark ? 'linear-gradient(135deg, #ECC675 0%, #D4A853 100%)' : 'linear-gradient(145deg, #162638 0%, #0D1B2A 100%)')
                      : 'none',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive
                      ? (isDark ? '0 4px 16px rgba(212, 168, 83, 0.35)' : '0 4px 14px rgba(13, 27, 42, 0.25)')
                      : 'none',
                    letterSpacing: '0.02em',
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Quick Search + Dark Mode Toggle + "Start a Project" Pill Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Circular Search Icon */}
            <button
              onClick={() => {
                const el = document.querySelector('#projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: isDark ? 'rgba(13, 27, 42, 0.92)' : 'rgba(247, 247, 245, 0.92)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: isDark ? '1px solid rgba(212, 168, 83, 0.35)' : '1px solid rgba(220, 205, 179, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isDark ? '#F7F7F5' : 'var(--ocean-navy)',
                boxShadow: '0 4px 14px rgba(13, 27, 42, 0.06)',
                transition: 'all 0.2s ease',
              }}
              aria-label="Search Projects"
              className="navbar-search-btn"
            >
              <Search size={16} />
            </button>

            {/* Circular Dark Mode Toggle Button (Beside Search Button, Perfect Space) */}
            <button
              onClick={toggleDarkMode}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: isDark ? 'rgba(13, 27, 42, 0.92)' : 'rgba(247, 247, 245, 0.92)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: isDark ? '1px solid rgba(212, 168, 83, 0.5)' : '1px solid rgba(220, 205, 179, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isDark ? '#D4A853' : 'var(--ocean-navy)',
                boxShadow: isDark
                  ? '0 4px 16px rgba(212, 168, 83, 0.25)'
                  : '0 4px 14px rgba(13, 27, 42, 0.06)',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="navbar-theme-btn"
            >
              {isDark ? (
                <Sun size={17} style={{ color: '#D4A853', filter: 'drop-shadow(0 0 5px rgba(212, 168, 83, 0.6))' }} />
              ) : (
                <Moon size={17} />
              )}
            </button>

            {/* "Start a Project ->" Pill Button with Sunset Gold Arrow */}
            <button
              onClick={onOpenEstimator}
              className="btn-dark-pill-action header-cta-pill"
            >
              <span>Start a Project</span>
              <div className="arrow-circle">
                <ArrowRight size={14} />
              </div>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: isDark ? 'rgba(13, 27, 42, 0.95)' : 'rgba(247, 247, 245, 0.95)',
                border: isDark ? '1px solid rgba(212, 168, 83, 0.4)' : '1px solid rgba(220, 205, 179, 0.8)',
                color: isDark ? '#F7F7F5' : 'var(--ocean-navy)',
                boxShadow: '0 4px 14px rgba(13, 27, 42, 0.08)',
              }}
              className="navbar-mobile-toggle"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Card with Coastal Palette */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '76px',
            left: '16px',
            right: '16px',
            background: isDark ? 'rgba(10, 20, 32, 0.98)' : 'rgba(247, 247, 245, 0.98)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            borderRadius: '24px',
            padding: '24px',
            boxShadow: isDark ? '0 24px 50px rgba(0, 0, 0, 0.5)' : '0 24px 50px rgba(13, 27, 42, 0.18)',
            border: isDark ? '1px solid rgba(212, 168, 83, 0.35)' : '1px solid rgba(220, 205, 179, 0.8)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            pointerEvents: 'auto',
          }}
        >
          <div style={{ paddingBottom: '12px', borderBottom: isDark ? '1px solid rgba(212, 168, 83, 0.2)' : '1px solid rgba(13, 27, 42, 0.08)' }}>
            <BrandLogo variant="full" size="sm" />
          </div>

          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={(e) => handleNavClick(e, item.name, item.href)}
              style={{
                textAlign: 'left',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: isDark ? '#F5F1E8' : 'var(--ocean-navy)',
                padding: '12px 4px',
                borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(13, 27, 42, 0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>{item.name}</span>
              <ArrowRight size={16} color="var(--sunset-gold)" />
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenEstimator) onOpenEstimator();
            }}
            className="btn-dark-pill-action"
            style={{ width: '100%', marginTop: '10px' }}
          >
            <span>Start a Project</span>
            <div className="arrow-circle">
              <ArrowRight size={14} />
            </div>
          </button>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .navbar-desktop-pill {
            display: flex !important;
          }
          .navbar-mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .header-cta-pill {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .navbar-search-btn,
          .navbar-theme-btn,
          .navbar-mobile-toggle {
            width: 38px !important;
            height: 38px !important;
          }
        }
        .navbar-search-btn:hover,
        .navbar-theme-btn:hover {
          transform: scale(1.08);
          border-color: var(--sunset-gold);
          box-shadow: var(--shadow-gold-glow);
        }
      `}</style>
    </header>
  );
}
