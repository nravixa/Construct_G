'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { COMPANY_HERITAGE } from '@/data/services';
import { Quote, History, ShieldCheck, CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LeadershipStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Parallax on Founder portrait
      if (imageCardRef.current) {
        gsap.fromTo(
          imageCardRef.current,
          { y: 30 },
          {
            y: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      // Parallax on milestone items
      if (milestonesRef.current) {
        const items = milestonesRef.current.querySelectorAll('.milestone-node');
        items.forEach((item, index) => {
          gsap.fromTo(
            item,
            { opacity: 0.7, y: 15 * (index + 1) },
            {
              opacity: 1,
              y: 0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'top 60%',
                scrub: 0.5,
              },
            }
          );
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="leadership"
      style={{
        padding: '110px 0',
        background: 'var(--coastal-white, #F7F7F5)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Background Watermark Parallax */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-5%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(5rem, 12vw, 13rem)',
          fontFamily: 'var(--font-serif)',
          fontWeight: 900,
          color: 'var(--ocean-navy, #0D1B2A)',
          opacity: 0.03,
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        UMESH GATKAL
      </div>

      <div className="container-editorial" style={{ position: 'relative', zIndex: 10 }}>
        <div
          className="leadership-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left: Founder Portrait & Direct Engineering Ethos */}
          <div ref={imageCardRef}>
            <div
              style={{
                position: 'relative',
                borderRadius: '32px',
                overflow: 'hidden',
                background: '#ffffff',
                padding: '12px',
                boxShadow: '0 24px 60px rgba(13, 27, 42, 0.08), 0 0 20px rgba(212, 168, 83, 0.08)',
                border: '1px solid rgba(220, 205, 179, 0.65)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '420px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/umesh_gatkal.jpg"
                  alt="Mr. Umesh Gatkal - Founder & Managing Director, G&J Buildcon"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, transparent 55%, rgba(13, 27, 42, 0.9) 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    color: '#ffffff',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: 'var(--sunset-gold, #D4A853)',
                      marginBottom: '4px',
                    }}
                  >
                    FOUNDER & MANAGING DIRECTOR
                  </div>
                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: '#F7F7F5',
                      marginBottom: '4px',
                    }}
                  >
                    Mr. Umesh Gatkal
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#DCCDB3', lineHeight: 1.4 }}>
                    Leading Pune’s civil engineering & heavy rotary foundation sector since 2008.
                  </p>
                </div>
              </div>

              {/* Verified Trust Badges */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 12px 6px 12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={18} color="var(--sunset-gold, #D4A853)" />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--ocean-navy, #0D1B2A)' }}>
                    IS 2911 Piling Standard
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={18} color="var(--seafoam-turquoise, #7FB8B6)" />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--ocean-navy, #0D1B2A)' }}>
                    Zero Contractor Middlemen
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Concrete Evolution & Direct Words */}
          <div ref={milestonesRef}>
            <div
              style={{
                fontSize: '0.74rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                color: 'var(--sunset-gold, #D4A853)',
                marginBottom: '10px',
              }}
            >
              LEADERSHIP & TRACK RECORD
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.2rem, 3.4vw, 3.2rem)',
                color: 'var(--ocean-navy, #0D1B2A)',
                fontWeight: 400,
                lineHeight: 1.12,
                marginBottom: '16px',
                letterSpacing: '-0.02em',
              }}
            >
              Built On Rock, <br />
              <span style={{ fontWeight: 600, color: 'var(--ocean-navy, #0D1B2A)' }}>Not Shortcuts.</span>
            </h2>

            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--driftwood-gray, #8A857F)',
                lineHeight: 1.65,
                marginBottom: '24px',
              }}
            >
              “A building is only as permanent as the basalt strata beneath it. By investing directly into high-torque SANY rotary drill rigs and maintaining an in-house skilled workforce of 700+ professionals, G&J Buildcon eliminates all subcontractor dependencies across Pune.”
            </p>

            {/* Quote Card */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '22px 26px',
                boxShadow: '0 8px 24px rgba(13, 27, 42, 0.05)',
                borderLeft: '4px solid var(--sunset-gold, #D4A853)',
                borderTop: '1px solid rgba(220, 205, 179, 0.5)',
                borderRight: '1px solid rgba(220, 205, 179, 0.5)',
                borderBottom: '1px solid rgba(220, 205, 179, 0.5)',
                position: 'relative',
                marginBottom: '32px',
              }}
            >
              <Quote
                size={24}
                color="var(--sunset-gold, #D4A853)"
                style={{ opacity: 0.35, position: 'absolute', top: '16px', right: '20px' }}
              />
              <p
                style={{
                  fontSize: '0.88rem',
                  fontStyle: 'italic',
                  color: 'var(--ocean-navy, #0D1B2A)',
                  lineHeight: 1.6,
                  marginBottom: '8px',
                }}
              >
                “Whether casting a 22-storey residential tower in Ravet or drilling 1200mm piles into highway rock, our word is our bond. When G&J accepts a handover date, we deliver.”
              </p>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--ocean-navy, #0D1B2A)' }}>
                Umesh Gatkal • Founder & Managing Director
              </div>
            </div>

            {/* Milestone Chronology */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '28px 24px',
                boxShadow: '0 10px 30px rgba(13, 27, 42, 0.05)',
                border: '1px solid rgba(220, 205, 179, 0.65)',
              }}
            >
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--ocean-navy, #0D1B2A)',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <History size={16} color="var(--sunset-gold, #D4A853)" />
                <span>Verified Milestones</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {COMPANY_HERITAGE.journey.map((item, idx) => (
                  <div
                    key={idx}
                    className="milestone-node"
                    style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: idx === 3 ? 'var(--ocean-navy, #0D1B2A)' : 'rgba(212, 168, 83, 0.15)',
                        color: idx === 3 ? 'var(--sunset-gold, #D4A853)' : 'var(--sunset-gold, #D4A853)',
                        border: idx === 3 ? '1px solid rgba(212, 168, 83, 0.5)' : '1px solid rgba(212, 168, 83, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {item.year.slice(2)}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: 'var(--sunset-gold, #D4A853)',
                          marginBottom: '2px',
                        }}
                      >
                        {item.year}
                      </div>
                      <h4
                        style={{
                          fontSize: '0.98rem',
                          fontWeight: 800,
                          color: 'var(--ocean-navy, #0D1B2A)',
                          marginBottom: '2px',
                        }}
                      >
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--driftwood-gray, #8A857F)', lineHeight: 1.45 }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .leadership-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
