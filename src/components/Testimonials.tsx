'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TESTIMONIALS_DATA } from '@/data/projects';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Building2, MapPin, Layers } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Architectural building mapping for each developer endorsement
const PROJECT_SHOWCASE_META: Record<string, { image: string; tag: string; metric1: string; metric2: string; location: string }> = {
  'test-1': {
    image: '/images/towers_seafoam_balconies.jpg',
    tag: '30 DAYS AHEAD',
    metric1: '6.8 LAKH SQ. FT.',
    metric2: '1200MM BASALT ANCHOR',
    location: 'Pimple Saudagar, Pune',
  },
  'test-2': {
    image: '/images/campus_limestone_colonnade.jpg',
    tag: 'ZERO DELAYS',
    metric1: '5.2 LAKH SQ. FT.',
    metric2: 'HIGH-SPAN RCC COLONNADE',
    location: 'Ravet, Pune',
  },
  'test-3': {
    image: '/images/techpark_glass_facade.jpg',
    tag: 'POST-TENSIONED SLABS',
    metric1: '8.4 LAKH SQ. FT.',
    metric2: 'GRADE-A COMMERCIAL IT PARK',
    location: 'Hinjawadi Phase 1, Pune',
  },
  'test-4': {
    image: '/images/towers_arrival_plaza.jpg',
    tag: 'SURGICAL PRECISION',
    metric1: '4.5 LAKH SQ. FT.',
    metric2: 'ZERO-VIBRATION PILING',
    location: 'Baner, Pune',
  },
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS_DATA[index];
  const currentMeta = PROJECT_SHOWCASE_META[current.id] || PROJECT_SHOWCASE_META['test-1'];

  const sectionRef = useRef<HTMLDivElement>(null);
  const bgTopoRef = useRef<SVGSVGElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);
  const quoteCardRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  // 3D tilt tracking for the photo card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!photoCardRef.current) return;
    const rect = photoCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setTilt({
      x: (y - centerY) * -0.035,
      y: (x - centerX) * 0.035,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleNext = () => setIndex((i) => (i + 1) % TESTIMONIALS_DATA.length);
  const handlePrev = () => setIndex((i) => (i - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1. Background Topography Grid Parallax
      if (bgTopoRef.current) {
        gsap.fromTo(
          bgTopoRef.current,
          { y: 50 },
          {
            y: -50,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        );
      }

      // 2. Left Architectural Photo Card Parallax
      if (photoCardRef.current) {
        gsap.fromTo(
          photoCardRef.current,
          { y: 35 },
          {
            y: -25,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }

      // 3. Right Testimonial Card Differential Parallax
      if (quoteCardRef.current) {
        gsap.fromTo(
          quoteCardRef.current,
          { y: 20 },
          {
            y: -35,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.6,
            },
          }
        );
      }

      // 4. Partner Selector Tabs Parallax
      if (tabsRef.current) {
        gsap.fromTo(
          tabsRef.current,
          { y: 15 },
          {
            y: -15,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.1,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      style={{
        padding: 'clamp(80px, 8vw, 130px) 0',
        background: 'var(--coastal-white, #F7F7F5)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 0.35s ease',
      }}
    >
      {/* Background Topographical Architectural Contour Lines (Scroll Parallax) */}
      <svg
        ref={bgTopoRef}
        viewBox="0 0 1440 800"
        fill="none"
        style={{
          position: 'absolute',
          top: '-10%',
          left: 0,
          width: '100%',
          height: '120%',
          pointerEvents: 'none',
          opacity: 0.18,
          zIndex: 1,
        }}
      >
        <path d="M -100 150 C 300 120, 600 250, 900 180 C 1200 110, 1400 220, 1600 180" stroke="var(--sunset-gold, #D4A853)" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M -100 280 C 350 240, 700 380, 1050 310 C 1300 260, 1450 340, 1600 320" stroke="var(--driftwood-gray, #8A857F)" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M -100 420 C 250 380, 550 510, 850 440 C 1150 370, 1380 480, 1600 450" stroke="var(--seafoam-turquoise, #7FB8B6)" strokeWidth="1.2" strokeDasharray="8 6" />
        <path d="M -100 560 C 400 520, 750 640, 1100 580 C 1320 540, 1480 610, 1600 590" stroke="var(--sunset-gold, #D4A853)" strokeWidth="1" strokeDasharray="5 5" />
      </svg>

      {/* Ambient Top Right Golden Radial Glaze */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle at 60% 30%, rgba(212, 168, 83, 0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container-editorial" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto clamp(36px, 4vw, 54px) auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.76rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: 'var(--sunset-gold, #D4A853)',
              background: 'rgba(212, 168, 83, 0.08)',
              padding: '6px 14px',
              borderRadius: '9999px',
              border: '1px solid rgba(212, 168, 83, 0.25)',
              marginBottom: '12px',
            }}
          >
            <Building2 size={13} />
            <span>DEVELOPER ENDORSEMENTS • VERIFIED TRACK RECORD</span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.1rem, 3.5vw, 3.1rem)',
              color: 'var(--ocean-navy, #0D1B2A)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '12px',
            }}
          >
            Trusted by Pune’s Leading Developers
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
              color: 'var(--driftwood-gray, #8A857F)',
              lineHeight: 1.6,
            }}
          >
            Delivering 25+ Lakh sq. ft. of deep rock piling, structural RCC frames, and landmark commercial tech parks on schedule with surgical precision.
          </p>
        </div>

        {/* ========================================================
            SPLIT EDITORIAL ARCHITECTURAL SHOWCASE
            Left: Dynamic 3D-Tilt Building Photo & Telemetry Specs
            Right: Frosted Testimonial Card with Quotes & Avatar
            ======================================================== */}
        <div
          className="testimonials-split-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(24px, 3.5vw, 44px)',
            alignItems: 'stretch',
            maxWidth: '1240px',
            margin: '0 auto',
          }}
        >
          {/* ----------------------------------------------------
              LEFT: DYNAMIC ARCHITECTURAL PROJECT SHOWCASE CARD
              With Mouse 3D-Tilt + Scroll Parallax
              ---------------------------------------------------- */}
          <div
            ref={photoCardRef}
            className="testimonials-photo-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'relative',
              borderRadius: 'clamp(24px, 3vw, 36px)',
              overflow: 'hidden',
              height: 'clamp(300px, 42vw, 540px)',
              boxShadow: '0 25px 65px -15px rgba(13, 27, 42, 0.22), 0 0 35px rgba(212, 168, 83, 0.12)',
              border: '1px solid rgba(212, 168, 83, 0.4)',
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
          >
            {/* Project Building Image */}
            <Image
              src={currentMeta.image}
              alt={current.projectDelivered}
              fill
              style={{
                objectFit: 'cover',
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />

            {/* Cinematic Gradient Glaze Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(13, 27, 42, 0.3) 0%, rgba(13, 27, 42, 0.1) 40%, rgba(13, 27, 42, 0.88) 100%)',
                pointerEvents: 'none',
              }}
            />

            {/* Top Left: Project Name Pill */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: 'rgba(13, 27, 42, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(212, 168, 83, 0.4)',
                borderRadius: '9999px',
                padding: '6px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#F7F7F5',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Building2 size={13} style={{ color: 'var(--sunset-gold, #D4A853)' }} />
              <span>{current.projectDelivered}</span>
            </div>

            {/* Top Right: Performance Badge */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'linear-gradient(135deg, rgba(127, 184, 182, 0.95) 0%, rgba(94, 159, 157, 0.95) 100%)',
                color: '#0D1B2A',
                borderRadius: '9999px',
                padding: '6px 14px',
                fontSize: '0.74rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <CheckCircle2 size={12} />
              <span>{currentMeta.tag}</span>
            </div>

            {/* Bottom: Structural Telemetry Ribbon */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(13, 27, 42, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '18px',
                padding: '14px 18px',
                border: '1px solid rgba(212, 168, 83, 0.3)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div>
                <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--sunset-gold, #D4A853)', fontWeight: 700 }}>
                  Structural Scope
                </div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.03em' }}>
                  {currentMeta.metric1} • {currentMeta.metric2}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--limestone-beige, #DCCDB3)', fontSize: '0.78rem', fontWeight: 600 }}>
                <MapPin size={13} style={{ color: 'var(--seafoam-turquoise, #7FB8B6)' }} />
                <span>{currentMeta.location}</span>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------
              RIGHT: FROSTED EDITORIAL TESTIMONIAL CARD
              With Parallax Float, Gold Accents & Controls
              ---------------------------------------------------- */}
          <div
            ref={quoteCardRef}
            style={{
              background: 'var(--bg-surface-translucent, rgba(255, 255, 255, 0.94))',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderRadius: 'clamp(24px, 3vw, 36px)',
              padding: 'clamp(28px, 4vw, 44px)',
              boxShadow: 'var(--shadow-card, 0 20px 50px rgba(13, 27, 42, 0.08))',
              border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.7))',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
              transition: 'background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
            }}
          >
            {/* Giant Background Quote Icon */}
            <Quote
              size={64}
              color="var(--sunset-gold, #D4A853)"
              style={{
                opacity: 0.15,
                position: 'absolute',
                top: '24px',
                right: '28px',
                pointerEvents: 'none',
              }}
            />

            {/* Top Bar: Stars & Verified Badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="var(--sunset-gold, #D4A853)"
                    color="var(--sunset-gold, #D4A853)"
                    style={{ filter: 'drop-shadow(0 0 4px rgba(212, 168, 83, 0.4))' }}
                  />
                ))}
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: 'var(--text-primary, #0D1B2A)',
                  background: 'rgba(127, 184, 182, 0.16)',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(127, 184, 182, 0.35)',
                }}
              >
                <CheckCircle2 size={12} color="var(--seafoam-dark, #5E9F9D)" />
                <span>Verified Developer Endorsement</span>
              </div>
            </div>

            {/* The Client Quote */}
            <blockquote style={{ margin: 0 }}>
              <p
                className="font-serif"
                style={{
                  fontSize: 'clamp(1.15rem, 1.65vw, 1.45rem)',
                  lineHeight: 1.6,
                  color: 'var(--text-primary, #0D1B2A)',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  marginBottom: '16px',
                  transition: 'color 0.35s ease',
                }}
              >
                “{current.quote}”
              </p>

              {/* Delivered Reference Pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '8px',
                  background: 'rgba(212, 168, 83, 0.12)',
                  border: '1px solid rgba(212, 168, 83, 0.28)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--text-primary, #0D1B2A)',
                  transition: 'color 0.35s ease',
                }}
              >
                <Layers size={12} style={{ color: 'var(--sunset-gold, #D4A853)' }} />
                <span>Scope Delivered: {current.projectDelivered}</span>
              </div>
            </blockquote>

            {/* Bottom Row: Client Identity & Slide Switcher */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                borderTop: '1px solid var(--border-light, rgba(13, 27, 42, 0.08))',
                paddingTop: '20px',
              }}
            >
              {/* Client Executive Monogram Seal & Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    position: 'relative',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #162638 0%, #0D1B2A 100%)',
                    border: '2px solid var(--sunset-gold, #D4A853)',
                    boxShadow: '0 4px 14px rgba(212, 168, 83, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--sunset-gold, #D4A853)',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading), "Outfit", sans-serif',
                    letterSpacing: '0.04em',
                    flexShrink: 0,
                  }}
                  title={current.company}
                >
                  {current.company.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--text-primary, #0D1B2A)', margin: 0, transition: 'color 0.35s ease' }}>
                    {current.clientName}
                  </h4>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted, #8A857F)', fontWeight: 600 }}>
                    {current.clientRole} • <span style={{ color: 'var(--sunset-gold, #D4A853)', fontWeight: 700 }}>{current.company}</span>
                  </div>
                </div>
              </div>

              {/* Progress Indicator & Arrows */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Visual Progress Dashes */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  {TESTIMONIALS_DATA.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      style={{
                        height: '6px',
                        width: index === i ? '24px' : '7px',
                        borderRadius: '9999px',
                        background: index === i ? 'var(--sunset-gold, #D4A853)' : 'var(--border-light, rgba(13, 27, 42, 0.18))',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                      }}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '6px' }}>
                  <button
                    onClick={handlePrev}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.8))',
                      background: 'var(--bg-surface, #ffffff)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'var(--text-primary, #0D1B2A)',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                    }}
                    aria-label="Previous Testimonial"
                    className="hover:scale-105"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={handleNext}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.8))',
                      background: 'var(--bg-surface, #ffffff)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'var(--text-primary, #0D1B2A)',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
                    }}
                    aria-label="Next Testimonial"
                    className="hover:scale-105"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            BOTTOM: INTERACTIVE DEVELOPER PARTNER SELECTOR TABS
            Clicking any tab switches the active building & quote
            ======================================================== */}
        <div
          ref={tabsRef}
          className="hide-scrollbar testimonial-tabs-container"
          style={{
            marginTop: 'clamp(36px, 4vw, 52px)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            maxWidth: '100%',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            padding: '4px 2px',
          }}
        >
          {TESTIMONIALS_DATA.map((item, i) => {
            const isSelected = index === i;
            return (
              <button
                key={item.id}
                onClick={() => setIndex(i)}
                style={{
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: isSelected ? '#F5F1E8' : 'var(--text-primary, #0D1B2A)',
                  background: isSelected
                    ? 'var(--grad-ocean-dark, linear-gradient(135deg, #162638 0%, #0D1B2A 100%))'
                    : 'var(--bg-surface-translucent, rgba(255, 255, 255, 0.85))',
                  border: isSelected
                    ? '1px solid var(--sunset-gold, #D4A853)'
                    : '1px solid var(--border-limestone, rgba(220, 205, 179, 0.65))',
                  padding: '10px 22px',
                  borderRadius: '9999px',
                  boxShadow: isSelected
                    ? '0 8px 24px rgba(13, 27, 42, 0.25), 0 0 15px rgba(212, 168, 83, 0.25)'
                    : '0 2px 8px rgba(0, 0, 0, 0.03)',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
                className="hover:scale-105"
              >
                {/* Active Indicator Dot */}
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: isSelected ? 'var(--sunset-gold, #D4A853)' : 'transparent',
                    boxShadow: isSelected ? '0 0 8px var(--sunset-gold, #D4A853)' : 'none',
                    display: 'inline-block',
                  }}
                />
                <span>{item.company}</span>
              </button>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .testimonials-split-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .testimonials-photo-card {
            height: clamp(260px, 60vw, 380px) !important;
          }
          .testimonial-tabs-container {
            justify-content: flex-start !important;
          }
        }
        @media (min-width: 769px) {
          .testimonial-tabs-container {
            justify-content: center !important;
            flex-wrap: wrap !important;
          }
        }
      `}</style>
    </section>
  );
}
