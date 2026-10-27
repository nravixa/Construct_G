'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MACHINERY_FLEET, FleetMachineryItem } from '@/data/services';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Layers,
  ShieldCheck,
  Wrench,
  Activity,
  ArrowRight,
  Radio,
  Truck,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MachineryFleet() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const bgContourRef = useRef<SVGSVGElement>(null);

  // Parallax setup with GSAP ScrollTrigger
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1. Subtle background topography parallax
      if (bgContourRef.current) {
        gsap.fromTo(
          bgContourRef.current,
          { y: 40 },
          {
            y: -40,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.4,
            },
          }
        );
      }

      // 2. Vertical differential wave float on cards
      const cards = el.querySelectorAll('.fleet-card-container');
      cards.forEach((card, idx) => {
        const offset = idx % 2 === 0 ? 15 : -15;
        gsap.fromTo(
          card,
          { y: offset },
          {
            y: -offset,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  // Update active index based on horizontal scroll position
  const handleScroll = () => {
    if (!scrollTrackRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = scrollTrackRef.current;
    const cardWidth = 380 + 24; // card width + gap approx
    const idx = Math.min(
      MACHINERY_FLEET.length - 1,
      Math.max(0, Math.round(scrollLeft / cardWidth))
    );
    setActiveIndex(idx);
  };

  // Scroll to specific card index smoothly
  const scrollToIndex = (idx: number) => {
    if (!scrollTrackRef.current) return;
    const targetIdx = Math.max(0, Math.min(idx, MACHINERY_FLEET.length - 1));
    const cardElements = scrollTrackRef.current.querySelectorAll('.fleet-card-container');
    if (cardElements[targetIdx]) {
      (cardElements[targetIdx] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setActiveIndex(targetIdx);
    }
  };

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  // Prefilled WhatsApp tender inquiry for specific equipment
  const handleEquipmentInquiry = (mach: FleetMachineryItem) => {
    const text = encodeURIComponent(
      `Hello G&J Buildcon, I am inquiring about equipment availability and mobilization:\n` +
      `• Equipment: ${mach.name}\n` +
      `• Category: ${mach.category}\n` +
      `• Capacity: ${mach.capacity}\n\n` +
      `Please provide deployment timeline and tender rate card for Pune sites.`
    );
    window.open(`https://wa.me/919168777272?text=${text}`, '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="machinery"
      style={{
        padding: 'clamp(80px, 8vw, 130px) 0',
        background: 'var(--coastal-white, #F7F7F5)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 0.35s ease',
      }}
    >
      {/* Background Topographical Elevation Contour Curves */}
      <svg
        ref={bgContourRef}
        viewBox="0 0 1440 800"
        fill="none"
        style={{
          position: 'absolute',
          top: '-10%',
          left: 0,
          width: '100%',
          height: '120%',
          pointerEvents: 'none',
          opacity: 0.16,
          zIndex: 1,
        }}
      >
        <path d="M -100 160 C 250 120, 600 240, 950 170 C 1220 110, 1420 220, 1600 180" stroke="var(--sunset-gold, #D4A853)" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M -100 340 C 300 300, 680 430, 1020 370 C 1280 320, 1450 400, 1600 380" stroke="var(--seafoam-turquoise, #7FB8B6)" strokeWidth="1.2" strokeDasharray="8 6" />
        <path d="M -100 520 C 380 480, 720 600, 1080 540 C 1320 500, 1480 570, 1600 550" stroke="var(--driftwood-gray, #8A857F)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Top Left Golden Ambient Glaze */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle at 40% 40%, rgba(212, 168, 83, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container-editorial" style={{ position: 'relative', zIndex: 10 }}>
        {/* ============================================================
            SECTION HEADER WITH FLEET METRICS & CONTROLS
            ============================================================ */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: 'clamp(36px, 4vw, 54px)',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
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
                background: 'rgba(212, 168, 83, 0.1)',
                padding: '6px 14px',
                borderRadius: '9999px',
                border: '1px solid rgba(212, 168, 83, 0.28)',
                marginBottom: '14px',
              }}
            >
              <Wrench size={13} />
              <span>IN-HOUSE ROTARY DRILLING RIGS • 100% OWNED</span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.1rem, 3.6vw, 3.2rem)',
                color: 'var(--text-primary, #0D1B2A)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                marginBottom: '14px',
                transition: 'color 0.35s ease',
              }}
            >
              Heavy Geotechnical <br />
              <span style={{ fontWeight: 700, color: 'var(--text-primary, #0D1B2A)' }}>
                Machinery Fleet
              </span>
            </h2>

            <p
              style={{
                fontSize: 'clamp(0.92rem, 1.15vw, 1.04rem)',
                color: 'var(--text-muted, #8A857F)',
                lineHeight: 1.6,
                transition: 'color 0.35s ease',
              }}
            >
              We own and operate 15+ heavy hydraulic rotary drill rigs, crawler cranes, and high-reach concrete boom placers in-house. Zero subcontractor waiting, guaranteed rock borehole casting, and IS 2911 engineering compliance across Pune.
            </p>
          </div>

          {/* Navigation Controls & Scrubber Indicator */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
            {/* Live Fleet Counter Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'var(--bg-surface-translucent, rgba(255, 255, 255, 0.9))',
                backdropFilter: 'blur(12px)',
                padding: '8px 16px',
                borderRadius: '9999px',
                border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.65))',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--text-primary, #0D1B2A)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
            >
              <span style={{ color: 'var(--sunset-gold, #D4A853)' }}>15+ In-House Rigs</span>
              <span style={{ opacity: 0.3 }}>•</span>
              <span style={{ color: 'var(--seafoam-dark, #5E9F9D)' }}>180 MPa Basalt Rated</span>
            </div>

            {/* Carousel Arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.8))',
                  background: 'var(--bg-surface, #ffffff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
                  color: 'var(--text-primary, #0D1B2A)',
                  opacity: activeIndex === 0 ? 0.45 : 1,
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                }}
                className="hover:scale-105"
                aria-label="Previous Machinery"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                disabled={activeIndex === MACHINERY_FLEET.length - 1}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.8))',
                  background: 'var(--bg-surface, #ffffff)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: activeIndex === MACHINERY_FLEET.length - 1 ? 'not-allowed' : 'pointer',
                  color: 'var(--text-primary, #0D1B2A)',
                  opacity: activeIndex === MACHINERY_FLEET.length - 1 ? 0.45 : 1,
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                }}
                className="hover:scale-105"
                aria-label="Next Machinery"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================
            BUTTERY-SMOOTH HORIZONTAL SCROLL CAROUSEL TRACK
            With Touch Momentum, Snap, and Differential Parallax Cards
            ============================================================ */}
        <div
          ref={scrollTrackRef}
          onScroll={handleScroll}
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            paddingBottom: '24px',
            paddingTop: '8px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
          className="hide-scrollbar"
        >
          {MACHINERY_FLEET.map((mach, i) => {
            return (
              <div
                key={mach.id}
                className="fleet-card-container hover:scale-[1.02] hover:shadow-xl"
                style={{
                  flex: '0 0 auto',
                  width: 'clamp(280px, 82vw, 380px)',
                  scrollSnapAlign: 'start',
                  background: 'var(--bg-surface-translucent, rgba(255, 255, 255, 0.94))',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card, 0 12px 32px rgba(13, 27, 42, 0.06))',
                  border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.75))',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                {/* ----------------------------------------------------
                    MEDIA AREA WITH LIVE TELEMETRY & STATUS BEACONS
                    ---------------------------------------------------- */}
                <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
                  <Image
                    src={mach.image}
                    alt={mach.name}
                    fill
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    sizes="(max-width: 768px) 90vw, 400px"
                    priority={i < 2}
                  />

                  {/* Gradient Overlay for Readable Badges */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(13, 27, 42, 0.4) 0%, rgba(13, 27, 42, 0.1) 40%, rgba(13, 27, 42, 0.88) 100%)',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Top Left: Live Status Beacon */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(13, 27, 42, 0.88)',
                      backdropFilter: 'blur(10px)',
                      color: '#F7F7F5',
                      padding: '5px 12px',
                      borderRadius: '9999px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      border: '1px solid rgba(212, 168, 83, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        boxShadow: '0 0 8px #22c55e',
                        display: 'inline-block',
                      }}
                    />
                    <span>{mach.liveStatus}</span>
                  </div>

                  {/* Top Right: Category Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'linear-gradient(135deg, rgba(212, 168, 83, 0.95) 0%, rgba(168, 122, 40, 0.95) 100%)',
                      color: '#0D1B2A',
                      borderRadius: '9999px',
                      padding: '4px 10px',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    {mach.badge}
                  </div>

                  {/* Bottom Floating Telemetry Ribbon */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      right: '12px',
                      background: 'rgba(13, 27, 42, 0.88)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      borderRadius: '12px',
                      padding: '8px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: '1px solid rgba(212, 168, 83, 0.3)',
                      color: '#F7F7F5',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Gauge size={13} style={{ color: 'var(--sunset-gold, #D4A853)' }} />
                      <span style={{ color: 'var(--sunset-gold, #D4A853)' }}>{mach.specs.torqueOrPower}</span>
                    </div>
                    <div style={{ color: 'var(--limestone-beige, #DCCDB3)' }}>
                      {mach.specs.maxDepth}
                    </div>
                  </div>
                </div>

                {/* ----------------------------------------------------
                    CARD SPECIFICATIONS & SCOPE CONTENT
                    ---------------------------------------------------- */}
                <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: 'var(--sunset-gold, #D4A853)',
                        marginBottom: '6px',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {mach.category}
                    </div>

                    <h4
                      style={{
                        fontSize: '1.08rem',
                        fontWeight: 800,
                        color: 'var(--text-primary, #0D1B2A)',
                        marginBottom: '10px',
                        lineHeight: 1.3,
                        transition: 'color 0.35s ease',
                      }}
                    >
                      {mach.name}
                    </h4>

                    {/* Capacity Tag */}
                    <div
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--text-primary, #0D1B2A)',
                        fontWeight: 700,
                        marginBottom: '16px',
                        background: 'rgba(127, 184, 182, 0.14)',
                        border: '1px solid rgba(127, 184, 182, 0.35)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                      }}
                    >
                      {mach.capacity}
                    </div>

                    {/* Engineering Feature Bullets */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
                      {mach.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '7px',
                            fontSize: '0.78rem',
                            color: 'var(--text-muted, #8A857F)',
                            lineHeight: 1.45,
                          }}
                        >
                          <CheckCircle2 size={13} color="var(--sunset-gold, #D4A853)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Row: Fleet Units Owned & WhatsApp Inquiry */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid var(--border-light, rgba(13, 27, 42, 0.08))',
                      paddingTop: '14px',
                      marginTop: '8px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: 'var(--text-muted, #8A857F)', fontWeight: 600 }}>
                      <Truck size={14} style={{ color: 'var(--sunset-gold, #D4A853)' }} />
                      <span>{mach.specs.unitsOwned}</span>
                    </div>

                    <button
                      onClick={() => handleEquipmentInquiry(mach)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--sunset-gold, #D4A853)',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        transition: 'transform 0.2s ease',
                      }}
                      className="hover:translate-x-1"
                      title="Request deployment schedule"
                    >
                      <span>Mobilize Rig</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================
            BOTTOM CAROUSEL SCRUBBER & DOTS INDICATOR
            ============================================================ */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginTop: '24px',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-light, rgba(13, 27, 42, 0.08))',
          }}
        >
          {/* Active Card Counter */}
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary, #0D1B2A)', letterSpacing: '0.04em' }}>
            FLEET UNIT <span style={{ color: 'var(--sunset-gold, #D4A853)' }}>0{activeIndex + 1}</span> / 0{MACHINERY_FLEET.length}
          </div>

          {/* Interactive Progress Bar & Dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {MACHINERY_FLEET.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => scrollToIndex(dotIdx)}
                style={{
                  height: '6px',
                  width: activeIndex === dotIdx ? '28px' : '8px',
                  borderRadius: '9999px',
                  background: activeIndex === dotIdx ? 'var(--sunset-gold, #D4A853)' : 'var(--border-light, rgba(13, 27, 42, 0.2))',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                aria-label={`Jump to fleet unit ${dotIdx + 1}`}
              />
            ))}
          </div>

          {/* Guarantee Note */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: 'var(--text-muted, #8A857F)', fontWeight: 600 }}>
            <ShieldCheck size={14} style={{ color: 'var(--seafoam-dark, #5E9F9D)' }} />
            <span>100% In-House Mechanical & Operator Team</span>
          </div>
        </div>
      </div>
    </section>
  );
}
