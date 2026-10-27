'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  Layers,
  Building2,
  ExternalLink,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Structural scope options for the audit inquiry
const SCOPE_OPTIONS = [
  { id: 'piling', label: 'Deep Basalt Piling', icon: Layers },
  { id: 'rcc', label: 'Turnkey RCC Structure', icon: Building2 },
  { id: 'commercial', label: 'Commercial IT Complex', icon: Sparkles },
  { id: 'institutional', label: 'Institutional Campus', icon: ShieldCheck },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    scope: 'Deep Basalt Piling',
    area: '',
    notes: '',
  });

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Parallax element references
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  // Copy to clipboard helper
  const handleCopy = (text: string, key: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2400);
    }
  };

  // Structured WhatsApp inquiry handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const message = encodeURIComponent(
      `Hello G&J Buildcon Senior Engineering Desk,\n\nI would like to schedule an on-site project audit and tender review:\n` +
      `• Client / Developer: ${formData.name || 'Not provided'}\n` +
      `• Mobile: ${formData.phone || 'Not provided'}\n` +
      `• Structural Scope: ${formData.scope}\n` +
      `• Built-Up / Plot Area: ${formData.area ? formData.area + ' sq.ft.' : 'To be discussed'}\n` +
      `• Location & Soil Details: ${formData.notes || 'Pune region'}\n\n` +
      `Please connect me with your chief civil engineering team.`
    );
    window.open(`https://wa.me/919168777272?text=${message}`, '_blank');
  };

  // Multi-plane natural scroll parallax setup
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const ctx = gsap.context(() => {
      // 1. Panoramic Background Architectural Image Parallax (Hero-style smooth scrub)
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 22,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionEl,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      // 2. Left Column Gentle Drift
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { y: 20 },
          {
            y: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionEl,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.1,
            },
          }
        );
      }

      // 3. Right Frosted Card Differential Float
      if (formCardRef.current) {
        gsap.fromTo(
          formCardRef.current,
          { y: 35 },
          {
            y: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionEl,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        );
      }
    }, sectionEl);

    // Subtle 3D cursor camera drift on desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024 || !bgImageRef.current) return;
      const xNorm = (e.clientX / window.innerWidth - 0.5) * 2;
      const yNorm = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(bgImageRef.current, {
        x: -xNorm * 8,
        duration: 1.6,
        ease: 'power1.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(70px, 8vw, 120px) 0',
        overflow: 'hidden',
        background: 'var(--coastal-white, #F7F7F5)',
        transition: 'background-color 0.35s ease',
      }}
    >
      {/* ============================================================
          NATURAL ARCHITECTURAL PANORAMIC BACKGROUND WITH PARALLAX
          Matching the Hero Section's sunlit daylight aesthetic
          ============================================================ */}
      <div
        ref={bgImageRef}
        style={{
          position: 'absolute',
          inset: '-80px',
          zIndex: 1,
          overflow: 'hidden',
          willChange: 'transform',
        }}
      >
        <Image
          src="/images/consultation_engineering_pavilion.jpg"
          alt="G&J Buildcon Engineering Headquarters & Design Pavilion"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 40%',
            filter: 'contrast(1.02) saturate(1.06)',
          }}
        />

        {/* Soft Coastal Daylight Atmospheric Haze & Sunset Gold Sun Glaze */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--contact-glaze-radial)',
            transition: 'background 0.35s ease',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--contact-glaze-linear)',
            transition: 'background 0.35s ease',
          }}
        />
      </div>

      {/* ============================================================
          CONTENT CONTAINER (Natural Editorial Split Layout)
          ============================================================ */}
      <div className="container-editorial" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div
          className="contact-split-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
          }}
        >
          {/* ============================================================
              LEFT COLUMN: EDITORIAL SENIOR ENGINEERING AUTHORITY
              Clean, human-crafted typography and authentic credentials
              ============================================================ */}
          <div ref={leftColRef}>
            {/* Direct Senior Consultation Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.76rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--sunset-gold, #D4A853)',
                background: 'rgba(212, 168, 83, 0.12)',
                padding: '6px 14px',
                borderRadius: '9999px',
                border: '1px solid rgba(212, 168, 83, 0.32)',
                marginBottom: '16px',
              }}
            >
              <ShieldCheck size={14} />
              <span>DIRECT SENIOR CONSULTATION</span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3.2rem)',
                color: 'var(--text-primary, #0D1B2A)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: '16px',
                transition: 'color 0.35s ease',
              }}
            >
              Direct Consultation with Our <br />
              <span style={{ fontWeight: 700, color: 'var(--text-primary, #0D1B2A)' }}>
                Senior Engineering Team
              </span>
            </h2>

            <p
              style={{
                fontSize: 'clamp(0.94rem, 1.2vw, 1.06rem)',
                color: 'var(--text-secondary, #D1D5DB)',
                lineHeight: 1.65,
                marginBottom: '32px',
                maxWidth: '540px',
                transition: 'color 0.35s ease',
              }}
            >
              Plan your on-site engineering visit, request structural tender pricing, or review deep rock borehole geotechnical data directly with Mr. Umesh Gatkal and our senior civil engineers.
            </p>

            {/* 3 Natural Tactile Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '520px' }}>
              {/* Senior Engineer Hotline */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-surface-translucent, rgba(255, 255, 255, 0.9))',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  padding: '14px 18px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.65))',
                  boxShadow: 'var(--shadow-card, 0 4px 16px rgba(13, 27, 42, 0.04))',
                  transition: 'all 0.25s ease',
                  gap: '12px',
                }}
                className="contact-info-card hover:scale-[1.01]"
              >
                <a
                  href="tel:+919168777272"
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', color: 'inherit', flex: 1, minWidth: 0 }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'var(--ocean-navy, #0D1B2A)',
                      color: 'var(--sunset-gold, #D4A853)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 10px rgba(13, 27, 42, 0.2)',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div style={{ minWidth: 0, overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted, #8A857F)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.06em' }}>
                      Senior Engineer Hotline (Direct)
                    </div>
                    <div style={{ fontSize: 'clamp(0.92rem, 3.6vw, 1.05rem)', fontWeight: 800, color: 'var(--text-primary, #0D1B2A)' }}>
                      +91 9168777272
                    </div>
                  </div>
                </a>

                <button
                  onClick={() => handleCopy('+919168777272', 'phone')}
                  style={{
                    background: copiedKey === 'phone' ? 'rgba(34, 197, 94, 0.14)' : 'rgba(212, 168, 83, 0.1)',
                    border: '1px solid rgba(212, 168, 83, 0.3)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    color: copiedKey === 'phone' ? '#16a34a' : 'var(--text-primary, #0D1B2A)',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                  }}
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedKey === 'phone' ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedKey === 'phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Blueprint Tender Desk */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-surface-translucent, rgba(255, 255, 255, 0.9))',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  padding: '14px 18px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.65))',
                  boxShadow: 'var(--shadow-card, 0 4px 16px rgba(13, 27, 42, 0.04))',
                  transition: 'all 0.25s ease',
                  gap: '12px',
                }}
                className="contact-info-card hover:scale-[1.01]"
              >
                <a
                  href="mailto:gjconstruction111@gmail.com"
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', color: 'inherit', flex: 1, minWidth: 0 }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(212, 168, 83, 0.15)',
                      color: 'var(--sunset-gold, #D4A853)',
                      border: '1px solid rgba(212, 168, 83, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div style={{ minWidth: 0, overflow: 'hidden' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted, #8A857F)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.06em' }}>
                      Blueprint & BOQ Tender Desk
                    </div>
                    <div
                      style={{
                        fontSize: 'clamp(0.78rem, 3.2vw, 0.96rem)',
                        fontWeight: 700,
                        color: 'var(--text-primary, #0D1B2A)',
                        wordBreak: 'break-all',
                      }}
                    >
                      gjconstruction111@gmail.com
                    </div>
                  </div>
                </a>

                <button
                  onClick={() => handleCopy('gjconstruction111@gmail.com', 'email')}
                  style={{
                    background: copiedKey === 'email' ? 'rgba(34, 197, 94, 0.14)' : 'rgba(212, 168, 83, 0.1)',
                    border: '1px solid rgba(212, 168, 83, 0.3)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    color: copiedKey === 'email' ? '#16a34a' : 'var(--text-primary, #0D1B2A)',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                  }}
                  title="Copy Email Address"
                  aria-label="Copy Email Address"
                >
                  {copiedKey === 'email' ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copiedKey === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Pune Headquarters & Yard */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'var(--bg-surface-translucent, rgba(255, 255, 255, 0.9))',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  padding: '14px 18px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.65))',
                  boxShadow: 'var(--shadow-card, 0 4px 16px rgba(13, 27, 42, 0.04))',
                  transition: 'all 0.25s ease',
                  gap: '12px',
                }}
                className="contact-info-card hover:scale-[1.01]"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(127, 184, 182, 0.16)',
                      color: 'var(--seafoam-dark, #5E9F9D)',
                      border: '1px solid rgba(127, 184, 182, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted, #8A857F)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.06em' }}>
                      Pune Headquarters & Yard
                    </div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary, #0D1B2A)', lineHeight: 1.35 }}>
                      Flat No-3, B Wing, Ganga Park, Pimple Saudagar, Pune 411027
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Ganga+Park+Pimple+Saudagar+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(127, 184, 182, 0.14)',
                    border: '1px solid rgba(127, 184, 182, 0.35)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    color: 'var(--text-primary, #0D1B2A)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                  }}
                  title="View on Google Maps"
                >
                  <ExternalLink size={13} />
                  <span>Map</span>
                </a>
              </div>
            </div>

            {/* Authentic Engineering Trust Metrics */}
            <div
              className="contact-metrics-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                marginTop: '32px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-light, rgba(13, 27, 42, 0.08))',
                maxWidth: '520px',
              }}
            >
              <div>
                <div style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)', fontWeight: 800, color: 'var(--sunset-gold, #D4A853)' }}>
                  25+ Lakh
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted, #8A857F)', fontWeight: 600 }}>
                  Sq. Ft. Civil Delivered
                </div>
              </div>

              <div>
                <div style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)', fontWeight: 800, color: 'var(--text-primary, #0D1B2A)' }}>
                  100% In-House
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted, #8A857F)', fontWeight: 600 }}>
                  Heavy Piling Fleet
                </div>
              </div>

              <div>
                <div style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)', fontWeight: 800, color: 'var(--seafoam-dark, #5E9F9D)' }}>
                  &lt; 24 Hours
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted, #8A857F)', fontWeight: 600 }}>
                  Site Audit Response
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================
              RIGHT COLUMN: FROSTED ARCHITECTURAL AUDIT CONSOLE
              Real glassmorphism with smooth inputs & responsive spacing
              ============================================================ */}
          <div
            ref={formCardRef}
            className="contact-form-card"
            style={{
              background: 'var(--bg-surface-translucent, rgba(255, 255, 255, 0.94))',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              borderRadius: 'clamp(24px, 3vw, 36px)',
              padding: 'clamp(28px, 4vw, 44px)',
              boxShadow: 'var(--shadow-hover, 0 20px 50px rgba(13, 27, 42, 0.08))',
              border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.75))',
              position: 'relative',
              transition: 'background-color 0.35s ease, border-color 0.35s ease',
            }}
          >
            {/* Header Badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--sunset-gold, #D4A853)',
                  background: 'rgba(212, 168, 83, 0.12)',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(212, 168, 83, 0.3)',
                }}
              >
                <ShieldCheck size={13} />
                <span>24-HOUR SITE AUDIT GUARANTEE</span>
              </div>

              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted, #8A857F)', fontWeight: 600 }}>
                DIRECT WITH MR. UMESH GATKAL
              </div>
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: 'clamp(1.5rem, 2.2vw, 1.85rem)',
                fontWeight: 700,
                color: 'var(--text-primary, #0D1B2A)',
                marginBottom: '8px',
                lineHeight: 1.2,
                transition: 'color 0.35s ease',
              }}
            >
              Request a Project Audit
            </h3>
            <p
              style={{
                fontSize: '0.86rem',
                color: 'var(--text-secondary, #D1D5DB)',
                marginBottom: '22px',
                lineHeight: 1.5,
                transition: 'color 0.35s ease',
              }}
            >
              Our chief civil and piling engineers review structural blueprints and inspect soil reports across Pune within 24 hours.
            </p>

            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '36px 16px',
                  background: 'rgba(212, 168, 83, 0.06)',
                  borderRadius: '20px',
                  border: '1px solid rgba(212, 168, 83, 0.25)',
                }}
              >
                <CheckCircle2 size={44} color="var(--sunset-gold, #D4A853)" style={{ margin: '0 auto 12px auto' }} />
                <h4 style={{ color: 'var(--text-primary, #0D1B2A)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>
                  Inquiry Dispatched
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted, #8A857F)', maxWidth: '380px', margin: '0 auto 20px auto', lineHeight: 1.5 }}>
                  Your specifications have been routed directly to our chief civil engineering team. An engineer will follow up shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: 'var(--ocean-navy, #0D1B2A)',
                    color: '#F7F7F5',
                    border: '1px solid var(--sunset-gold, #D4A853)',
                    padding: '10px 24px',
                    borderRadius: '9999px',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Submit Another Specification
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* 1. Natural Scope Selector Chips */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--text-muted, #8A857F)',
                      marginBottom: '8px',
                    }}
                  >
                    Select Structural Scope of Work
                  </label>
                  <div className="contact-scope-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))', gap: '8px' }}>
                    {SCOPE_OPTIONS.map((opt) => {
                      const isSelected = formData.scope === opt.label;
                      const IconComponent = opt.icon;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, scope: opt.label })}
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            padding: '10px 10px',
                            borderRadius: '12px',
                            border: isSelected
                              ? '1px solid var(--sunset-gold, #D4A853)'
                              : '1px solid var(--border-limestone, rgba(220, 205, 179, 0.65))',
                            background: isSelected
                              ? 'var(--grad-ocean-dark, linear-gradient(145deg, #162638 0%, #0D1B2A 100%))'
                              : 'var(--bg-surface, #ffffff)',
                            color: isSelected ? '#F5F1E8' : 'var(--text-primary, #0D1B2A)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '7px',
                            boxShadow: isSelected ? '0 4px 12px rgba(212, 168, 83, 0.25)' : 'none',
                            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                            textAlign: 'left',
                          }}
                        >
                          <IconComponent
                            size={15}
                            style={{
                              color: isSelected ? 'var(--sunset-gold, #D4A853)' : 'var(--seafoam-dark, #5E9F9D)',
                              flexShrink: 0,
                            }}
                          />
                          <span style={{ lineHeight: 1.25, fontSize: '0.75rem', flex: 1 }}>
                            {opt.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Client / Developer Name */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--text-muted, #8A857F)',
                      marginBottom: '6px',
                    }}
                  >
                    Your Name / Developer Entity
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Kulkarni / GK Associates"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.65))',
                      background: 'rgba(247, 247, 245, 0.6)',
                      color: 'var(--text-primary, #0D1B2A)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                  />
                </div>

                {/* 3. Mobile Number & Built-up Area */}
                <div className="contact-two-col-inputs" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--text-muted, #8A857F)',
                        marginBottom: '6px',
                      }}
                    >
                      Direct Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.65))',
                        background: 'rgba(247, 247, 245, 0.6)',
                        color: 'var(--text-primary, #0D1B2A)',
                        fontSize: '0.92rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--text-muted, #8A857F)',
                        marginBottom: '6px',
                      }}
                    >
                      Built-Up / Plot Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 75,000 sq.ft."
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.65))',
                        background: 'rgba(247, 247, 245, 0.6)',
                        color: 'var(--text-primary, #0D1B2A)',
                        fontSize: '0.92rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* 4. Project Notes & Soil Conditions */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--text-muted, #8A857F)',
                      marginBottom: '6px',
                    }}
                  >
                    Location & Geological / Tender Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Site location in Pune, depth of rock strata, borehole test status, or specific contractor queries..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.65))',
                      background: 'rgba(247, 247, 245, 0.6)',
                      color: 'var(--text-primary, #0D1B2A)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                </div>

                {/* Submit to WhatsApp Button */}
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '15px 22px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #162638 0%, #0D1B2A 100%)',
                    color: '#F7F7F5',
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    border: '1px solid var(--sunset-gold, #D4A853)',
                    boxShadow: '0 10px 25px rgba(13, 27, 42, 0.3), 0 0 16px rgba(212, 168, 83, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="hover:scale-[1.02]"
                >
                  <MessageSquare size={18} style={{ color: 'var(--sunset-gold, #D4A853)' }} />
                  <span>Send WhatsApp Inquiry</span>
                  <ArrowRight size={16} />
                </button>

                {/* Confidentiality Guarantee */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted, #8A857F)',
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                >
                  <ShieldCheck size={14} style={{ color: 'var(--seafoam-dark, #5E9F9D)' }} />
                  <span>Direct review by senior civil engineer within 24 hours</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .contact-split-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 640px) {
          .contact-form-card {
            padding: 20px 16px !important;
            border-radius: 22px !important;
          }
          .contact-info-card {
            padding: 12px 14px !important;
          }
          .contact-scope-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
          .contact-two-col-inputs {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .contact-metrics-grid {
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
