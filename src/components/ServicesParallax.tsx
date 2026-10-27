'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES_DATA } from '@/data/services';
import { CheckCircle2, ArrowRight, Building2, Hammer, GraduationCap, Landmark, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesParallax() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const ctx = gsap.context(() => {
      // Image internal parallax scrub for every service card
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const img = card.querySelector('.parallax-service-img');
        const numWatermark = card.querySelector('.service-num-watermark');
        const contentCol = card.querySelector('.service-content-col');

        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -14, scale: 1.14 },
            {
              yPercent: 14,
              scale: 1.0,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          );
        }

        if (numWatermark) {
          gsap.fromTo(
            numWatermark,
            { y: -30, opacity: 0.1 },
            {
              y: 35,
              opacity: 0.28,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5,
              },
            }
          );
        }

        if (contentCol) {
          gsap.fromTo(
            contentCol,
            { y: index % 2 === 0 ? 25 : -25 },
            {
              y: 0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'top 50%',
                scrub: 0.8,
              },
            }
          );
        }
      });
    }, sectionEl);

    return () => ctx.revert();
  }, []);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 size={22} color="var(--sunset-gold, #D4A853)" />;
      case 'Hammer':
        return <Hammer size={22} color="var(--sunset-gold, #D4A853)" />;
      case 'GraduationCap':
        return <GraduationCap size={22} color="var(--sunset-gold, #D4A853)" />;
      case 'Landmark':
        return <Landmark size={22} color="var(--sunset-gold, #D4A853)" />;
      default:
        return <Building2 size={22} color="var(--sunset-gold, #D4A853)" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        padding: '120px 0',
        background: 'var(--coastal-white, #F7F7F5)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-editorial">
        {/* Editorial Section Header */}
        <div style={{ maxWidth: '740px', marginBottom: '70px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.74rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--sunset-gold, #D4A853)',
              marginBottom: '10px',
            }}
          >
            <Sparkles size={13} />
            <span>Four Architectural Engineering Pillars</span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2.4rem, 3.8vw, 3.4rem)',
              color: 'var(--ocean-navy, #0D1B2A)',
              fontWeight: 400,
              lineHeight: 1.08,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
          >
            Civil RCC Superstructures & <br />
            <span style={{ fontWeight: 600, color: 'var(--ocean-navy, #0D1B2A)' }}>Deep Foundation Piling</span>
          </h2>
          <p style={{ color: 'var(--driftwood-gray, #8A857F)', fontSize: '1.02rem', lineHeight: 1.65 }}>
            By maintaining direct in-house ownership of heavy SANY and MAT rotary rigs, self-climbing crane systems, and 700+ certified personnel, G&J Buildcon eliminates contractor bottlenecks across Maharashtra.
          </p>
        </div>

        {/* Alternating Parallax Storytelling Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          {SERVICES_DATA.map((service, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={service.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '40px',
                  alignItems: 'center',
                  background: '#ffffff',
                  borderRadius: '30px',
                  padding: 'clamp(20px, 4vw, 36px)',
                  boxShadow: '0 12px 35px rgba(13, 27, 42, 0.06), 0 0 24px rgba(212, 168, 83, 0.06)',
                  border: '1px solid rgba(220, 205, 179, 0.65)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="service-editorial-card"
              >
                {/* Floating Large Index Watermark */}
                <div
                  className="service-num-watermark"
                  style={{
                    position: 'absolute',
                    top: isEven ? '10px' : 'auto',
                    bottom: isEven ? 'auto' : '10px',
                    left: isEven ? 'auto' : '30px',
                    right: isEven ? '30px' : 'auto',
                    fontSize: 'clamp(6rem, 12vw, 10rem)',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 900,
                    color: 'var(--sunset-gold, #D4A853)',
                    opacity: 0.12,
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    zIndex: 0,
                  }}
                >
                  0{idx + 1}
                </div>

                {/* Content Side */}
                <div
                  className="service-content-col"
                  style={{ order: isEven ? 2 : 1, position: 'relative', zIndex: 1 }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '18px',
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '14px',
                        background: 'rgba(212, 168, 83, 0.12)',
                        border: '1px solid rgba(212, 168, 83, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {getIcon(service.icon)}
                    </div>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: 'var(--sunset-gold, #D4A853)',
                        background: 'rgba(212, 168, 83, 0.1)',
                        border: '1px solid rgba(212, 168, 83, 0.25)',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                      }}
                    >
                      0{idx + 1} • {service.stats}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(1.5rem, 2.2vw, 1.9rem)',
                      fontWeight: 800,
                      color: 'var(--ocean-navy, #0D1B2A)',
                      marginBottom: '6px',
                      lineHeight: 1.2,
                    }}
                  >
                    {service.title}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--sunset-gold, #D4A853)',
                      marginBottom: '16px',
                    }}
                  >
                    {service.tagline}
                  </div>
                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--driftwood-gray, #8A857F)',
                      lineHeight: 1.65,
                      marginBottom: '22px',
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Deployed Equipment Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {service.equipment.map((eq, i) => (
                      <span
                        key={i}
                        style={{
                          background: 'rgba(127, 184, 182, 0.1)',
                          border: '1px solid rgba(127, 184, 182, 0.3)',
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          color: 'var(--ocean-navy, #0D1B2A)',
                          padding: '5px 12px',
                          borderRadius: '8px',
                        }}
                      >
                        {eq}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: 'var(--ocean-navy, #0D1B2A)',
                      borderBottom: '2px solid var(--sunset-gold, #D4A853)',
                      paddingBottom: '2px',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span>Request Engineering Scope & Estimates</span>
                    <ArrowRight size={14} color="var(--sunset-gold, #D4A853)" />
                  </a>
                </div>

                {/* Parallax Image Container */}
                <div
                  className="service-image-box"
                  style={{
                    order: isEven ? 1 : 2,
                    position: 'relative',
                    height: 'clamp(220px, 45vw, 360px)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    zIndex: 1,
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{
                      objectFit: 'cover',
                      willChange: 'transform',
                    }}
                    className="parallax-service-img"
                    sizes="(max-width: 768px) 100vw, 550px"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, transparent 65%, rgba(0,0,0,0.4) 100%)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .service-editorial-card {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .service-editorial-card .service-image-box {
            order: 1 !important;
          }
          .service-editorial-card .service-content-col {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}
