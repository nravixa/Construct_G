'use client';

import React, { useEffect, useRef } from 'react';
import BrandLogo from './BrandLogo';
import { Phone, Mail, ArrowUp, ExternalLink, MessageCircle, Compass, HardHat, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const skylineRef = useRef<SVGGElement>(null);
  const mountainsRef = useRef<SVGGElement>(null);
  const foregroundRef = useRef<SVGGElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // 1. Watermark slow float parallax
      if (watermarkRef.current && footerRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { y: 35, opacity: 0.6 },
          {
            y: -25,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: 1.2,
            },
          }
        );
      }

      // 2. Mountains Layer Parallax
      if (mountainsRef.current && footerRef.current) {
        gsap.fromTo(
          mountainsRef.current,
          { y: 15 },
          {
            y: -15,
            ease: 'none',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: 1,
            },
          }
        );
      }

      // 3. Skyline & Cranes Parallax
      if (skylineRef.current && footerRef.current) {
        gsap.fromTo(
          skylineRef.current,
          { y: 25 },
          {
            y: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: 1.5,
            },
          }
        );
      }

      // 4. Foreground flora parallax
      if (foregroundRef.current && footerRef.current) {
        gsap.fromTo(
          foregroundRef.current,
          { y: 35 },
          {
            y: -10,
            ease: 'none',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: 0.8,
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        background: '#060D15',
        padding: 'clamp(24px, 4vw, 56px) clamp(16px, 3.5vw, 44px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Overhead Golden Ambient Glaze */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          height: '600px',
          background: 'radial-gradient(circle at 50% 0%, rgba(212, 168, 83, 0.08) 0%, transparent 75%)',
          pointerEvents: 'none',
        }}
      />

      {/* Main Giant Rounded Card Container (Directly Mirrors User Reference Image) */}
      <div
        style={{
          maxWidth: '1380px',
          margin: '0 auto',
          background: 'var(--coastal-white, #F7F7F5)',
          borderRadius: 'clamp(32px, 4.5vw, 48px)',
          border: '1px solid rgba(212, 168, 83, 0.35)',
          boxShadow: '0 35px 90px -20px rgba(0, 0, 0, 0.65), 0 0 50px rgba(212, 168, 83, 0.08)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* ========================================================
            TOP SECTION: BRAND HEADER & NAVIGATION COLUMNS
            ======================================================== */}
        <div
          style={{
            padding: 'clamp(36px, 5vw, 64px) clamp(24px, 5vw, 68px) clamp(20px, 3vw, 36px)',
            position: 'relative',
            zIndex: 10,
            background: 'var(--coastal-white, #F7F7F5)',
          }}
        >
          <div
            className="footer-nav-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'clamp(28px, 4vw, 56px)',
              alignItems: 'start',
            }}
          >
            {/* Brand Column (Left) */}
            <div style={{ maxWidth: '380px' }}>
              <div style={{ marginBottom: '18px' }}>
                <BrandLogo variant="full" size="md" />
              </div>
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary, #D1D5DB)',
                  marginBottom: '18px',
                }}
              >
                Pioneering high-precision deep foundation piling, heavy civil superstructures, and coastal architectural engineering in Pune & Maharashtra.
              </p>

              {/* Demo by NRAVIXA Callout Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 14px',
                  borderRadius: '10px',
                  background: 'rgba(212, 168, 83, 0.08)',
                  border: '1px solid rgba(212, 168, 83, 0.28)',
                  boxShadow: '0 4px 12px rgba(212, 168, 83, 0.08)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.74rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 600,
                    color: 'var(--text-muted, #B0B7C3)',
                  }}
                >
                  Demo by
                </span>
                <a
                  href="https://nravixa.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    color: 'var(--sunset-gold, #D4A853)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  className="hover:opacity-80"
                >
                  NRAVIXA
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Column 1: Company */}
            <div>
              <h4
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-primary, #0D1B2A)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Compass size={14} style={{ color: 'var(--sunset-gold, #D4A853)' }} />
                Company
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', padding: 0, margin: 0 }}>
                <li><a href="#hero" style={{ color: 'var(--text-secondary, #D1D5DB)', textDecoration: 'none' }} className="hover:text-ocean-navy">Overview</a></li>
                <li><a href="#projects" style={{ color: 'var(--text-secondary, #D1D5DB)', textDecoration: 'none' }} className="hover:text-ocean-navy">Selected Projects</a></li>
                <li><a href="#services" style={{ color: 'var(--text-secondary, #D1D5DB)', textDecoration: 'none' }} className="hover:text-ocean-navy">Piling & Foundation</a></li>
                <li><a href="#machinery" style={{ color: 'var(--text-secondary, #D1D5DB)', textDecoration: 'none' }} className="hover:text-ocean-navy">Machinery Fleet</a></li>
                <li><a href="#leadership" style={{ color: 'var(--text-secondary, #D1D5DB)', textDecoration: 'none' }} className="hover:text-ocean-navy">Founder & Heritage</a></li>
              </ul>
            </div>

            {/* Column 2: Specialties */}
            <div>
              <h4
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-primary, #0D1B2A)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <HardHat size={14} style={{ color: 'var(--sunset-gold, #D4A853)' }} />
                Specialties
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', padding: 0, margin: 0 }}>
                <li><span style={{ color: 'var(--text-secondary, #D1D5DB)' }}>1200mm Rotary Piling</span></li>
                <li><span style={{ color: 'var(--text-secondary, #D1D5DB)' }}>Deccan Basalt Excavation</span></li>
                <li><span style={{ color: 'var(--text-secondary, #D1D5DB)' }}>High-Rise RCC Frames</span></li>
                <li><span style={{ color: 'var(--text-secondary, #D1D5DB)' }}>Commercial IT Parks</span></li>
                <li><span style={{ color: 'var(--text-secondary, #D1D5DB)' }}>Heritage Sanctuary Stone</span></li>
              </ul>
            </div>

            {/* Column 3: Connect / HQ */}
            <div>
              <h4
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-primary, #0D1B2A)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <ShieldCheck size={14} style={{ color: 'var(--sunset-gold, #D4A853)' }} />
                Pune HQ
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary, #D1D5DB)' }}>
                <div style={{ lineHeight: 1.5 }}>Flat No-3, B Wing, Ganga Park, Pimple Saudagar, Pune 411027</div>
                <a
                  href="tel:+919168777272"
                  style={{ color: 'var(--text-primary, #0D1B2A)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <Phone size={13} style={{ color: 'var(--sunset-gold, #D4A853)' }} />
                  +91 9168777272
                </a>
                <a
                  href="mailto:gjconstruction111@gmail.com"
                  style={{ color: 'var(--text-secondary, #D1D5DB)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <Mail size={13} style={{ color: 'var(--seafoam-turquoise, #7FB8B6)' }} />
                  gjconstruction111@gmail.com
                </a>
                <a
                  href="https://wa.me/919168777272"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#128C7E',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '2px',
                  }}
                >
                  <MessageCircle size={14} />
                  WhatsApp Direct Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            MIDDLE WATERMARK: "BUILDCON" (Like "Natural" in Reference)
            ======================================================== */}
        <div
          ref={watermarkRef}
          className="footer-watermark-wrap"
          style={{
            position: 'relative',
            textAlign: 'center',
            userSelect: 'none',
            pointerEvents: 'none',
            marginBottom: '-50px',
            zIndex: 4,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(5rem, 14vw, 12rem)',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(13, 27, 42, 0.045)',
              display: 'inline-block',
              lineHeight: 0.9,
            }}
          >
            BUILDCON
          </span>
        </div>

        {/* ========================================================
            SCENIC LANDSCAPE CANVAS WITH LIVE CONSTRUCTION MOVEMENT
            ======================================================== */}
        <div
          className="footer-scenic-container"
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(380px, 46vw, 620px)',
            overflow: 'hidden',
          }}
        >
          <svg
            viewBox="0 0 1440 600"
            preserveAspectRatio="xMidYMax slice"
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
            }}
          >
            <defs>
              {/* Soft Atmospheric Sunset Sky Gradient */}
              <linearGradient id="naturalSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F7F7F5" stopOpacity="0.2" />
                <stop offset="35%" stopColor="#F4ECE1" stopOpacity="0.75" />
                <stop offset="65%" stopColor="#E2ECEB" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#D2E6E3" stopOpacity="1" />
              </linearGradient>

              {/* Winding River Gradient */}
              <linearGradient id="windingRiverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7FB8B6" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#87C4C2" stopOpacity="0.92" />
                <stop offset="75%" stopColor="#2E5568" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#0D1B2A" stopOpacity="1" />
              </linearGradient>

              {/* Distant Mountain Ridges */}
              <linearGradient id="ridgeFarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A8C4C1" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#7B8F8D" stopOpacity="0.4" />
              </linearGradient>

              <linearGradient id="ridgeMidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DCCDB3" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#8A857F" stopOpacity="0.7" />
              </linearGradient>

              <linearGradient id="ridgeNearGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3E6B5C" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#1C382E" stopOpacity="1" />
              </linearGradient>

              {/* Building Facade Gradient */}
              <linearGradient id="archTowerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1B2B3B" />
                <stop offset="60%" stopColor="#0D1B2A" />
                <stop offset="100%" stopColor="#263A4E" />
              </linearGradient>
            </defs>

            {/* Sky Background */}
            <rect width="1440" height="600" fill="url(#naturalSkyGrad)" />

            {/* ====================================================
                LAYER 1: DISTANT MISTY MOUNTAINS (PARALLAX)
                ==================================================== */}
            <g ref={mountainsRef}>
              {/* Far Mountain Ridge */}
              <path
                d="M -50 360 Q 220 250 480 320 Q 720 380 960 290 Q 1200 230 1500 330 L 1500 600 L -50 600 Z"
                fill="url(#ridgeFarGrad)"
              />
              {/* Mid-Distant Rolling Hill Ridge */}
              <path
                d="M -20 385 Q 260 310 560 370 Q 860 420 1140 335 Q 1340 300 1480 355 L 1480 600 L -20 600 Z"
                fill="url(#ridgeMidGrad)"
              />
            </g>

            {/* ====================================================
                LAYER 2: LIVE FLOCK OF COASTAL BIRDS GLIDING
                ==================================================== */}
            <g style={{ animation: 'footerFlockGlide 28s linear infinite' }}>
              <g transform="translate(100, 200) scale(0.9)">
                <path d="M 0 0 Q 8 -10 16 0 Q 24 -10 32 0 Q 24 -2 16 2 Q 8 -2 0 0 Z" fill="#4A453E" style={{ animation: 'footerBirdWingFlap 0.75s ease-in-out infinite', transformOrigin: '16px 0px' }} />
              </g>
              <g transform="translate(140, 215) scale(0.7)">
                <path d="M 0 0 Q 8 -10 16 0 Q 24 -10 32 0 Q 24 -2 16 2 Q 8 -2 0 0 Z" fill="#5D5750" style={{ animation: 'footerBirdWingFlap 0.8s ease-in-out infinite 0.15s', transformOrigin: '16px 0px' }} />
              </g>
              <g transform="translate(70, 225) scale(0.65)">
                <path d="M 0 0 Q 8 -10 16 0 Q 24 -10 32 0 Q 24 -2 16 2 Q 8 -2 0 0 Z" fill="#6A645D" style={{ animation: 'footerBirdWingFlap 0.7s ease-in-out infinite 0.3s', transformOrigin: '16px 0px' }} />
              </g>
              <g transform="translate(170, 195) scale(0.8)">
                <path d="M 0 0 Q 8 -10 16 0 Q 24 -10 32 0 Q 24 -2 16 2 Q 8 -2 0 0 Z" fill="#4A453E" style={{ animation: 'footerBirdWingFlap 0.85s ease-in-out infinite 0.45s', transformOrigin: '16px 0px' }} />
              </g>
              <g transform="translate(210, 210) scale(0.6)">
                <path d="M 0 0 Q 8 -10 16 0 Q 24 -10 32 0 Q 24 -2 16 2 Q 8 -2 0 0 Z" fill="#6A645D" style={{ animation: 'footerBirdWingFlap 0.65s ease-in-out infinite 0.2s', transformOrigin: '16px 0px' }} />
              </g>
            </g>

            {/* ====================================================
                LAYER 3: RISING ARCHITECTURE & ACTIVE LIVE CONSTRUCTION
                ==================================================== */}
            <g ref={skylineRef}>
              {/* DISTANT TOWER 1 (LEFT) */}
              <rect x="90" y="290" width="75" height="230" fill="#243447" rx="3" opacity="0.85" />
              <line x1="105" y1="300" x2="105" y2="500" stroke="#D4A853" strokeWidth="1" strokeDasharray="4 6" opacity="0.35" />
              <line x1="125" y1="300" x2="125" y2="500" stroke="#D4A853" strokeWidth="1" strokeDasharray="4 6" opacity="0.35" />
              <line x1="145" y1="300" x2="145" y2="500" stroke="#D4A853" strokeWidth="1" strokeDasharray="4 6" opacity="0.35" />

              {/* --------------------------------------------------
                  LIVE ACTIVE TOWER CRANE #1 (LEFT - SLEWING & TROLLEY)
                  -------------------------------------------------- */}
              <g transform="translate(260, 210)">
                {/* Mast */}
                <rect x="-4" y="0" width="8" height="260" fill="#0D1B2A" />
                <line x1="-4" y1="0" x2="-4" y2="260" stroke="#D4A853" strokeWidth="1.5" />
                <line x1="4" y1="0" x2="4" y2="260" stroke="#D4A853" strokeWidth="1.5" />
                {[...Array(13)].map((_, i) => (
                  <line key={`mast1-${i}`} x1="-4" y1={i * 20} x2="4" y2={i * 20 + 20} stroke="#D4A853" strokeWidth="1" opacity="0.8" />
                ))}

                {/* Cabin */}
                <rect x="-8" y="-12" width="16" height="12" fill="#D4A853" rx="2" />
                <rect x="-5" y="-10" width="10" height="7" fill="#0D1B2A" />

                {/* Apex Tower */}
                <polygon points="0,-35 -6,-12 6,-12" fill="#D4A853" />
                {/* Flashing Red Aviation Strobe */}
                <circle cx="0" cy="-36" r="3.5" fill="#FF3B30" style={{ animation: 'footerBeaconStrobe 1.2s ease-in-out infinite' }} />

                {/* Slewing Horizontal Jib */}
                <g style={{ animation: 'footerCraneSlew1 14s ease-in-out infinite', transformOrigin: '0px -12px' }}>
                  {/* Tie-back cables */}
                  <line x1="0" y1="-35" x2="-45" y2="-12" stroke="#D4A853" strokeWidth="1" />
                  <line x1="0" y1="-35" x2="95" y2="-12" stroke="#D4A853" strokeWidth="1" />

                  {/* Counter-Jib */}
                  <line x1="0" y1="-12" x2="-55" y2="-12" stroke="#0D1B2A" strokeWidth="3" />
                  <rect x="-55" y="-18" width="16" height="12" fill="#8A857F" rx="1" />

                  {/* Main Jib */}
                  <line x1="0" y1="-12" x2="135" y2="-12" stroke="#D4A853" strokeWidth="3" />
                  <line x1="0" y1="-7" x2="135" y2="-7" stroke="#0D1B2A" strokeWidth="1" />
                  {[...Array(9)].map((_, i) => (
                    <line key={`jib1-${i}`} x1={i * 15} y1="-12" x2={i * 15 + 15} y2="-7" stroke="#D4A853" strokeWidth="0.8" />
                  ))}
                  <circle cx="135" cy="-12" r="2" fill="#FF9500" style={{ animation: 'footerGoldBeacon 1.4s ease-in-out infinite' }} />

                  {/* Running Trolley & Swaying Cable */}
                  <g style={{ animation: 'footerTrolleyMove 8s ease-in-out infinite' }}>
                    <rect x="35" y="-10" width="8" height="5" fill="#0D1B2A" rx="1" />
                    <g transform="translate(39, -5)" style={{ animation: 'footerGirderSway 3.2s ease-in-out infinite', transformOrigin: '0px 0px' }}>
                      <line x1="0" y1="0" x2="0" y2="45" stroke="#D4A853" strokeWidth="0.8" strokeDasharray="2 1" />
                      <rect x="-14" y="45" width="28" height="5" fill="#D4A853" rx="1" />
                      <line x1="-14" y1="47" x2="14" y2="47" stroke="#0D1B2A" strokeWidth="1.2" />
                    </g>
                  </g>
                </g>
              </g>

              {/* MIDGROUND TOWER 2 (UNDER CONSTRUCTION) */}
              <g transform="translate(180, 260)">
                <rect x="0" y="30" width="110" height="240" fill="url(#archTowerGrad)" rx="2" />
                <rect x="15" y="0" width="80" height="30" fill="#142332" />
                <rect x="30" y="-15" width="50" height="15" fill="#0D1B2A" />
                {[...Array(6)].map((_, i) => (
                  <rect key={`balc-${i}`} x={i % 2 === 0 ? -8 : 6} y={i * 32 + 20} width="112" height="4" fill="#7FB8B6" opacity="0.8" />
                ))}
                {/* Live Welding Spark on Penthouse Slab */}
                <circle cx="55" cy="-16" r="4" fill="#FFF8E7" style={{ animation: 'footerWeldSpark 4.5s ease-in-out infinite' }} />
              </g>

              {/* --------------------------------------------------
                  LIVE ACTIVE TOWER CRANE #2 (RIGHT HIGH-RISE)
                  -------------------------------------------------- */}
              <g transform="translate(1120, 180)">
                <rect x="-4" y="0" width="8" height="270" fill="#0D1B2A" />
                <line x1="-4" y1="0" x2="-4" y2="270" stroke="#D4A853" strokeWidth="1.5" />
                <line x1="4" y1="0" x2="4" y2="270" stroke="#D4A853" strokeWidth="1.5" />
                {[...Array(13)].map((_, i) => (
                  <line key={`mast2-${i}`} x1="-4" y1={i * 20} x2="4" y2={i * 20 + 20} stroke="#D4A853" strokeWidth="1" opacity="0.7" />
                ))}
                <polygon points="0,-30 -5,-10 5,-10" fill="#D4A853" />
                <circle cx="0" cy="-31" r="3" fill="#FF3B30" style={{ animation: 'footerBeaconStrobe 1.5s ease-in-out infinite 0.4s' }} />

                {/* Slewing Jib #2 */}
                <g style={{ animation: 'footerCraneSlew2 16s ease-in-out infinite', transformOrigin: '0px -10px' }}>
                  <line x1="0" y1="-30" x2="35" y2="-10" stroke="#D4A853" strokeWidth="1" />
                  <line x1="0" y1="-30" x2="-75" y2="-10" stroke="#D4A853" strokeWidth="1" />
                  <line x1="0" y1="-10" x2="45" y2="-10" stroke="#0D1B2A" strokeWidth="3" />
                  <rect x="35" y="-16" width="14" height="10" fill="#8A857F" rx="1" />
                  <line x1="0" y1="-10" x2="-115" y2="-10" stroke="#D4A853" strokeWidth="3" />
                  <circle cx="-115" cy="-10" r="2" fill="#D4A853" style={{ animation: 'footerGoldBeacon 1.2s ease-in-out infinite' }} />
                  <g transform="translate(-65, -5)">
                    <line x1="0" y1="0" x2="0" y2="38" stroke="#D4A853" strokeWidth="0.8" strokeDasharray="2 1" />
                    <rect x="-6" y="38" width="12" height="10" fill="#D4A853" rx="1" />
                  </g>
                </g>
              </g>

              {/* RIGHT COMMERCIAL TOWER */}
              <g transform="translate(1040, 240)">
                <rect x="0" y="0" width="140" height="260" fill="url(#archTowerGrad)" rx="4" />
                {[...Array(9)].map((_, i) => (
                  <rect key={`louver-${i}`} x="10" y={i * 24 + 18} width="120" height="3" fill="#DCCDB3" opacity="0.6" />
                ))}
                <rect x="35" y="15" width="70" height="225" fill="#7FB8B6" opacity="0.25" />
              </g>

              {/* --------------------------------------------------
                  LIVE ACTIVE ROTARY PILING DRILL RIG (G&J SIGNATURE)
                  -------------------------------------------------- */}
              <g transform="translate(380, 390)">
                {/* Crawler Tracks */}
                <rect x="-24" y="65" width="48" height="16" fill="#0D1B2A" rx="3" />
                <circle cx="-16" cy="73" r="4" fill="#D4A853" />
                <circle cx="0" cy="73" r="4" fill="#D4A853" />
                <circle cx="16" cy="73" r="4" fill="#D4A853" />

                {/* Rig Cabin */}
                <polygon points="-20,65 15,65 20,44 -15,44" fill="#D4A853" />
                <rect x="-10" y="48" width="12" height="10" fill="#0D1B2A" rx="1" />

                {/* Mast */}
                <line x1="16" y1="52" x2="28" y2="-55" stroke="#0D1B2A" strokeWidth="6" />
                <line x1="16" y1="52" x2="28" y2="-55" stroke="#D4A853" strokeWidth="2.5" />
                {/* Amber Rotary Warning Beacon */}
                <circle cx="28" cy="-56" r="3" fill="#FFB300" style={{ animation: 'footerGoldBeacon 0.9s ease-in-out infinite' }} />

                {/* Rotary Drive Head */}
                <rect x="23" y="-10" width="12" height="16" fill="#0D1B2A" rx="2" />
                <rect x="25" y="-8" width="8" height="6" fill="#D4A853" />

                {/* Rotating Auger Bit Drilling into Rock */}
                <g style={{ animation: 'footerAugerDrill 2.5s linear infinite', transformOrigin: '29px 40px' }}>
                  <line x1="29" y1="6" x2="29" y2="65" stroke="#8A857F" strokeWidth="3" />
                  <path d="M 25 15 Q 29 20 33 25 Q 29 30 25 35 Q 29 40 33 45 Q 29 50 25 55" stroke="#D4A853" strokeWidth="2.5" fill="none" />
                </g>
                <rect x="22" y="63" width="14" height="12" fill="#DCCDB3" stroke="#8A857F" strokeWidth="1" rx="1" />
              </g>
            </g>

            {/* ====================================================
                LAYER 4: WINDING COASTAL RIVER (Mirroring Reference River)
                ==================================================== */}
            {/* Riverbed Shoreline Banks */}
            <path
              d="M 670 350 
                 C 630 380, 590 410, 640 440 
                 C 700 475, 840 460, 790 505 
                 C 735 545, 590 530, 510 600 
                 L 1040 600 
                 C 960 520, 900 490, 940 450 
                 C 990 405, 850 380, 770 350 
                 Z"
              fill="url(#windingRiverGrad)"
            />

            {/* Animated Water Shimmer Waves */}
            <g style={{ animation: 'footerWaterShimmer 6s ease-in-out infinite' }}>
              <path d="M 680 390 Q 730 395 750 390" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <path d="M 630 430 Q 700 436 730 430" stroke="#D4A853" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              <path d="M 690 470 Q 770 478 820 470" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" opacity="0.7" />
              <path d="M 620 520 Q 720 530 800 520" stroke="#7FB8B6" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
            </g>

            {/* Left Bank Lush Green Headland */}
            <path
              d="M -20 440 Q 240 430 480 450 Q 610 465 510 600 L -20 600 Z"
              fill="url(#ridgeNearGrad)"
            />
            {/* Right Bank Shoreline */}
            <path
              d="M 1460 420 Q 1200 410 980 445 Q 890 470 1040 600 L 1460 600 Z"
              fill="#183027"
            />

            {/* ====================================================
                LAYER 5: FOREGROUND COASTAL TREES, REEDS & WILDFLOWERS (PARALLAX)
                Directly matching the pine trees and flowers in the reference
                ==================================================== */}
            <g ref={foregroundRef}>
              {/* --- LEFT FOREGROUND: LUSH COASTAL DECIDUOUS TREE & REEDS --- */}
              <g transform="translate(60, 390)">
                {/* Tree Trunk */}
                <path d="M 40 200 Q 46 110 50 10 Q 55 110 60 200 Z" fill="#3D2D24" />
                {/* Lush Rounded Foliage Tiers */}
                <circle cx="50" cy="50" r="45" fill="#1C382E" />
                <circle cx="30" cy="70" r="35" fill="#254C3F" />
                <circle cx="70" cy="65" r="38" fill="#254C3F" />
                <circle cx="50" cy="35" r="36" fill="#366856" />

                {/* Swaying Coastal Sea Reeds Left */}
                <g style={{ animation: 'footerReedSwayLeft 4.5s ease-in-out infinite', transformOrigin: '0px 200px' }}>
                  <path d="M 15 200 Q 2 150 25 110 Q 10 155 18 200" fill="#7FB8B6" opacity="0.85" />
                  <path d="M 30 200 Q 45 140 20 100 Q 38 145 32 200" fill="#DCCDB3" opacity="0.9" />
                  <path d="M 5 200 Q -15 130 8 90 Q -8 135 8 200" fill="#D4A853" opacity="0.8" />
                </g>

                {/* White Coastal Wildflowers / Daisies */}
                <circle cx="10" cy="175" r="4" fill="#FFFFFF" />
                <circle cx="10" cy="175" r="1.5" fill="#D4A853" />
                <circle cx="28" cy="182" r="3.5" fill="#FFFFFF" />
                <circle cx="28" cy="182" r="1.2" fill="#D4A853" />
                <circle cx="45" cy="170" r="4.2" fill="#FFFFFF" />
                <circle cx="45" cy="170" r="1.6" fill="#D4A853" />
              </g>

              {/* --- RIGHT FOREGROUND: TALL COASTAL PINES, LUPINES & DAISIES --- */}
              <g transform="translate(1220, 340)">
                {/* Pine Trunk */}
                <path d="M 100 240 Q 95 120 90 0 Q 86 120 80 240 Z" fill="#44342A" />
                {/* Pine Needle Tiers */}
                <path d="M 45 150 Q 90 40 135 150 C 115 140 65 140 45 150 Z" fill="#18332A" />
                <path d="M 55 105 Q 90 20 125 105 C 108 97 72 97 55 105 Z" fill="#24473B" />
                <path d="M 65 60 Q 90 -10 115 60 C 102 52 78 52 65 60 Z" fill="#366856" />

                {/* Secondary Pine */}
                <path d="M 140 240 Q 138 140 135 40 Q 133 140 130 240 Z" fill="#3D2D24" />
                <path d="M 110 140 Q 135 70 160 140 Z" fill="#1C382E" />
                <path d="M 120 100 Q 135 50 150 100 Z" fill="#2E5748" />

                {/* Swaying Reeds Right */}
                <g style={{ animation: 'footerReedSwayRight 4.8s ease-in-out infinite', transformOrigin: '60px 240px' }}>
                  <path d="M 40 240 Q 15 170 45 120 Q 25 175 42 240" fill="#7FB8B6" opacity="0.8" />
                  <path d="M 65 240 Q 85 160 55 110 Q 75 165 67 240" fill="#D4A853" opacity="0.85" />
                  <path d="M 25 240 Q 5 150 35 100 Q 12 155 28 240" fill="#DCCDB3" opacity="0.9" />
                </g>

                {/* White Daisies on Riverbank */}
                <circle cx="65" cy="215" r="4.5" fill="#FFFFFF" />
                <circle cx="65" cy="215" r="1.6" fill="#D4A853" />
                <circle cx="85" cy="222" r="3.8" fill="#FFFFFF" />
                <circle cx="85" cy="222" r="1.3" fill="#D4A853" />
                <circle cx="45" cy="228" r="4" fill="#FFFFFF" />
                <circle cx="45" cy="228" r="1.5" fill="#D4A853" />
              </g>
            </g>
          </svg>

          {/* ========================================================
              FLOATING FROSTED PILL BOTTOM BAR (Mirrors Reference Pill)
              ======================================================== */}
          <div
            className="footer-bottom-bar"
            style={{
              position: 'absolute',
              bottom: 'clamp(14px, 2.5vw, 24px)',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'calc(100% - clamp(24px, 5vw, 64px))',
              maxWidth: '1240px',
              background: 'rgba(247, 247, 245, 0.94)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(212, 168, 83, 0.4)',
              borderRadius: '9999px',
              padding: '12px clamp(16px, 3vw, 32px)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px',
              boxShadow: '0 16px 40px -8px rgba(13, 27, 42, 0.35)',
              zIndex: 30,
            }}
          >
            {/* Left: Copyright */}
            <div
              style={{
                fontSize: 'clamp(0.76rem, 1.2vw, 0.84rem)',
                color: 'var(--text-primary, #0D1B2A)',
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}
            >
              © {new Date().getFullYear()} G&J Buildcon. All rights reserved.
            </div>

            {/* Center: Demo by NRAVIXA */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: 'clamp(0.76rem, 1.2vw, 0.84rem)',
              }}
            >
              <span style={{ color: 'var(--text-muted, #B0B7C3)', fontWeight: 500 }}>Demo by</span>
              <a
                href="https://nravixa.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--sunset-gold, #D4A853)',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 9px',
                  borderRadius: '6px',
                  background: 'rgba(212, 168, 83, 0.12)',
                  transition: 'all 0.2s ease',
                }}
                className="hover:opacity-80"
              >
                NRAVIXA
                <ExternalLink size={11} />
              </a>
            </div>

            {/* Right: Actions & Back to Top */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(8px, 1.5vw, 14px)',
              }}
            >
              {/* WhatsApp */}
              <a
                href="https://wa.me/919168777272"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(13, 27, 42, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#128C7E',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                title="WhatsApp Direct"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>

              {/* Phone */}
              <a
                href="tel:+919168777272"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(13, 27, 42, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary, #0D1B2A)',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                title="Call Pune Office"
                aria-label="Phone"
              >
                <Phone size={14} />
              </a>

              {/* Divider */}
              <div style={{ width: '1px', height: '18px', background: 'rgba(13, 27, 42, 0.15)' }} />

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  color: 'var(--sunset-gold, #D4A853)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 6px',
                  letterSpacing: '0.04em',
                }}
              >
                <span>TOP</span>
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-nav-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 28px 16px !important;
          }
          .footer-nav-grid > div:first-child {
            grid-column: 1 / -1 !important;
          }
          .footer-nav-grid > div:last-child {
            grid-column: 1 / -1 !important;
          }
          .footer-scenic-container {
            height: clamp(240px, 55vw, 320px) !important;
          }
          .footer-bottom-bar {
            position: relative !important;
            left: auto !important;
            bottom: auto !important;
            transform: none !important;
            width: calc(100% - 24px) !important;
            margin: 16px auto !important;
            border-radius: 20px !important;
            flex-direction: column !important;
            text-align: center !important;
            gap: 12px !important;
            padding: 16px 14px !important;
          }
          .footer-watermark-wrap {
            margin-bottom: -20px !important;
          }
        }
      `}</style>
    </footer>
  );
}
