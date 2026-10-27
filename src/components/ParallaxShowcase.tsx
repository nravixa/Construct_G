'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HardHat, Compass, Shield, Wrench, Sparkles, Layers, Activity } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerDeepRef = useRef<HTMLDivElement>(null);
  const layerMidRef = useRef<HTMLDivElement>(null);
  const layerTopRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Background bedrock layer scrubs smoothly with depth
      if (layerDeepRef.current) {
        gsap.fromTo(
          layerDeepRef.current,
          { yPercent: -18, scale: 1.12 },
          {
            yPercent: 18,
            scale: 1.0,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }

      // Midground superstructure card translates upward against scroll
      if (layerMidRef.current) {
        gsap.fromTo(
          layerMidRef.current,
          { y: 100, opacity: 0.85 },
          {
            y: -90,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.3,
            },
          }
        );
      }

      // Foreground floating badge chips scrub in counter direction
      if (layerTopRef.current) {
        gsap.fromTo(
          layerTopRef.current,
          { y: -70, x: 25 },
          {
            y: 75,
            x: -25,
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

      // Left text column slight upward parallax
      if (textColRef.current) {
        gsap.fromTo(
          textColRef.current,
          { y: 40 },
          {
            y: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }

      // Big headline horizontal watermark drift
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { xPercent: 10 },
          {
            xPercent: -35,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.8,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        padding: '130px 0',
        background: 'linear-gradient(180deg, #09121c 0%, #0D1B2A 50%, #09121c 100%)',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Background Architectural Bedrock Texture with Parallax */}
      <div
        ref={layerDeepRef}
        style={{
          position: 'absolute',
          inset: '-70px',
          zIndex: 1,
          opacity: 0.35,
          willChange: 'transform',
        }}
      >
        <Image
          src="/images/piling_geotechnical_survey.jpg"
          alt="Parallax Foundation Bedrock Piling in Pune"
          fill
          style={{ objectFit: 'cover', filter: 'contrast(1.15) brightness(0.85)' }}
          sizes="100vw"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(13, 27, 42, 0.55) 0%, rgba(13, 27, 42, 0.95) 80%, #0D1B2A 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, #09121c 0%, transparent 20%, transparent 80%, #09121c 100%)',
          }}
        />
      </div>

      {/* Drifting Parallax Watermark Text */}
      <div
        ref={titleRef}
        style={{
          position: 'absolute',
          top: '32%',
          left: '0%',
          width: '200%',
          fontSize: 'clamp(5rem, 15vw, 14rem)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 900,
          color: '#ffffff',
          opacity: 0.04,
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 2,
          willChange: 'transform',
        }}
      >
        DEEP BASALT ANCHORING & TOWERS
      </div>

      <div className="container-editorial" style={{ position: 'relative', zIndex: 10 }}>
        <div
          className="showcase-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left Text Column */}
          <div ref={textColRef}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(212, 168, 83, 0.15)',
                border: '1px solid rgba(212, 168, 83, 0.35)',
                padding: '6px 16px',
                borderRadius: '9999px',
                color: 'var(--sunset-gold, #D4A853)',
                fontSize: '0.74rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '18px',
              }}
            >
              <Shield size={14} />
              <span>GEOTECHNICAL & FOUNDATION MASTERY</span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                color: '#ffffff',
                fontWeight: 400,
                lineHeight: 1.08,
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}
            >
              From 24m Deccan Basalt Strata <br />
              <span style={{ fontWeight: 600, color: 'var(--sunset-gold, #D4A853)' }}>
                To Pune’s High-Rise Skylines
              </span>
            </h2>

            <p
              style={{
                fontSize: '1.02rem',
                color: 'var(--limestone-beige, #DCCDB3)',
                lineHeight: 1.7,
                marginBottom: '32px',
                maxWidth: '540px',
              }}
            >
              Before a single column rises into the Pune skyline, G&J Buildcon anchors deep into hard basalt bedrock. Utilizing high-torque SANY SR285R and MAT rotary rigs, our engineers cast bored piles up to 1200mm diameter with ultrasonic crosshole pile integrity testing—guaranteeing zero differential settlement for multi-decade structural performance.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(212, 168, 83, 0.3)',
                  borderRadius: '18px',
                  padding: '18px 20px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--sunset-gold, #D4A853)' }}>
                  24+ Meters
                </div>
                <div style={{ fontSize: '0.72rem', color: '#DCCDB3', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em' }}>
                  Basalt Rock Socketing
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(212, 168, 83, 0.3)',
                  borderRadius: '18px',
                  padding: '18px 20px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--seafoam-turquoise, #7FB8B6)' }}>
                  1200 mm
                </div>
                <div style={{ fontSize: '0.72rem', color: '#DCCDB3', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em' }}>
                  High-Torque Boreholes
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '18px',
                  padding: '18px 20px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ffffff' }}>
                  IS 2911
                </div>
                <div style={{ fontSize: '0.72rem', color: '#DCCDB3', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em' }}>
                  Certified Testing
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Parallax Composition */}
          <div style={{ position: 'relative' }}>
            {/* Midground Layer: Architectural Card */}
            <div
              ref={layerMidRef}
              style={{
                position: 'relative',
                background: 'rgba(247, 247, 245, 0.96)',
                borderRadius: '30px',
                padding: '20px',
                boxShadow: '0 30px 70px rgba(0, 0, 0, 0.55), 0 0 30px rgba(212, 168, 83, 0.12)',
                border: '1px solid rgba(220, 205, 179, 0.7)',
                color: 'var(--ocean-navy, #0D1B2A)',
                maxWidth: '460px',
                margin: '0 auto',
                willChange: 'transform',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: '280px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  marginBottom: '18px',
                }}
              >
                <Image
                  src="/images/geotechnical_strata_drilling.jpg"
                  alt="Geotechnical Rock Core Drilling in Pune"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 440px"
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '14px',
                    background: 'rgba(13, 27, 42, 0.92)',
                    backdropFilter: 'blur(10px)',
                    color: 'var(--sunset-gold, #D4A853)',
                    border: '1px solid rgba(212, 168, 83, 0.4)',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                  }}
                >
                  IS 2911 Class-A Rock Socketing
                </div>
              </div>

              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--ocean-navy, #0D1B2A)', marginBottom: '6px' }}>
                Heavy Foundation Engineering
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--driftwood-gray, #8A857F)', lineHeight: 1.55 }}>
                Cast-in-situ bored piling executing continuous rock socketing through hard basalt for major IT parks and residential towers across Pune.
              </p>
            </div>

            {/* Foreground Parallax Floating Badge Chip */}
            <div
              ref={layerTopRef}
              className="showcase-floating-chip"
              style={{
                position: 'absolute',
                top: '-35px',
                right: '-15px',
                background: 'rgba(247, 247, 245, 0.96)',
                backdropFilter: 'blur(18px)',
                borderRadius: '22px',
                padding: '16px 22px',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.35)',
                color: 'var(--ocean-navy, #0D1B2A)',
                border: '1px solid rgba(220, 205, 179, 0.8)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                zIndex: 20,
                willChange: 'transform',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--sunset-gold, #D4A853)',
                  color: 'var(--ocean-navy, #0D1B2A)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <HardHat size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--ocean-navy, #0D1B2A)' }}>700+ Manpower</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--driftwood-gray, #8A857F)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  In-House Site Operators
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .showcase-floating-chip {
            right: 8px !important;
            top: -24px !important;
            padding: 10px 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
