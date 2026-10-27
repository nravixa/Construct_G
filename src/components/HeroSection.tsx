'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '@/types';
import {
  ArrowRight,
  Play,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Building,
  Users,
  Globe,
  Sparkles,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  projects: Project[];
  onOpenProjectDetail: (project: Project) => void;
  onOpenEstimator: () => void;
  onWatchShowreel: () => void;
}

export default function HeroSection({
  projects,
  onOpenProjectDetail,
  onOpenEstimator,
  onWatchShowreel,
}: HeroSectionProps) {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const bottomDockRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const attributeStackRef = useRef<HTMLDivElement>(null);

  const currentProject = projects[featuredIndex] || projects[0];

  const handleNext = () => {
    setFeaturedIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setFeaturedIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Parallax and smooth transitions
  useEffect(() => {
    if (bgImageRef.current) {
      gsap.fromTo(
        bgImageRef.current.querySelector('img'),
        { scale: 1.08, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }
      );
    }
  }, [featuredIndex]);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const ctx = gsap.context(() => {
      // Parallax on background panoramic landscape scroll
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 26,
          ease: 'none',
          scrollTrigger: {
            trigger: heroEl,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Parallax on headline column (upward floating drift)
      if (headlineRef.current) {
        gsap.to(headlineRef.current, {
          yPercent: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: heroEl,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Parallax on attribute stack (counter drift)
      if (attributeStackRef.current) {
        gsap.to(attributeStackRef.current, {
          yPercent: 22,
          ease: 'none',
          scrollTrigger: {
            trigger: heroEl,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Parallax on bottom dock cards
      if (bottomDockRef.current) {
        gsap.fromTo(
          bottomDockRef.current,
          { y: 25 },
          {
            y: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: heroEl,
              start: '55% bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    }, heroEl);

    // Subtle 3D cursor tilt on desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const xNorm = (e.clientX / window.innerWidth - 0.5) * 2;
      const yNorm = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(bgImageRef.current, {
        x: -xNorm * 10,
        y: -yNorm * 8,
        duration: 1.4,
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
      ref={heroRef}
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '110px',
        paddingBottom: '32px',
        overflow: 'hidden',
        background: 'var(--bg-page, #F7F7F5)',
      }}
      id="hero"
    >
      {/* Background Architectural Panorama with Coastal Glow & Dark Mode Ambiance */}
      <div
        ref={bgImageRef}
        className="hero-bg-container"
        style={{
          position: 'absolute',
          inset: '-60px',
          zIndex: 1,
          overflow: 'hidden',
          willChange: 'transform',
        }}
      >
        <Image
          src={currentProject.mainImage}
          alt={currentProject.title}
          fill
          priority
          className="hero-bg-image"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 40%',
            filter: 'contrast(1.02) saturate(1.08) brightness(1.02)',
          }}
        />
        {/* Coastal Daylight Atmospheric Haze & Sunset Gold Sun Glaze (Adaptive to Dark Mode) */}
        <div className="hero-glaze-radial" />
        <div className="hero-glaze-linear" />
      </div>

      {/* Hero Content Area */}
      <div
        className="container-image-style"
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '40px',
          }}
        >
          {/* Left Column: Editorial Headline & Actions */}
          <div ref={headlineRef} style={{ maxWidth: '640px' }}>
            {/* Top Sub-category tracker */}
            <div
              className="hero-tracker-badge"
              style={{
                fontSize: '0.74rem',
                fontWeight: 700,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                className="hero-tracker-bar"
                style={{ width: '18px', height: '2px' }}
              />
              PUNE INFRASTRUCTURE • TURNKEY CIVIL RCC • HEAVY ROTARY PILING
            </div>

            {/* Main Headline in Playfair Display Serif */}
            <h1
              className="font-serif hero-headline"
              style={{
                fontSize: 'clamp(2.4rem, 6.5vw, 5.4rem)',
                lineHeight: 1.05,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
              }}
            >
              Spaces <br />
              <span className="hero-headline-sub" style={{ fontWeight: 600 }}>That </span>
              <span className="hero-headline-accent" style={{ fontWeight: 600 }}>Inspire</span>
            </h1>

            {/* Description Subtext */}
            <p
              className="hero-description"
              style={{
                fontSize: 'clamp(0.96rem, 1.2vw, 1.08rem)',
                lineHeight: 1.65,
                marginBottom: '32px',
                maxWidth: '500px',
              }}
            >
              Engineering Pune's architectural landmarks with turnkey precision. Delivering high-rise monolithic residential towers, deep basalt rock-socketed rotary piling, and commercial tech parks.
            </p>

            {/* Dual Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  const el = document.querySelector('#projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-pill-explore"
              >
                <span>Explore Portfolio</span>
                <ArrowRight size={15} />
              </button>

              <button onClick={onWatchShowreel} className="btn-watch-showreel">
                <div className="play-ring">
                  <Play size={13} fill="currentColor" />
                </div>
                <span>Watch Showreel</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Attribute Words */}
          <div
            ref={attributeStackRef}
            className="hero-attribute-stack"
            style={{
              display: 'none',
              borderLeft: '2px solid var(--sunset-gold, #D4A853)',
              paddingLeft: '16px',
              fontSize: '0.74rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              lineHeight: 2,
            }}
          >
            <div>TIMELESS</div>
            <div>REFINED</div>
            <div>EFFORTLESS</div>
            <div>SUSTAINABLE</div>
          </div>
        </div>
      </div>

      {/* Bottom Floating 3-Card Composition (Exact Match to Reference Image Bottom Bar) */}
      <div
        ref={bottomDockRef}
        className="container-image-style"
        style={{
          position: 'relative',
          zIndex: 20,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.45fr 1.1fr 0.95fr',
            gap: '18px',
            alignItems: 'stretch',
          }}
          className="bottom-cards-grid"
        >
          {/* Card 1: Featured Project Card with Slider Controls */}
          <div
            className="hero-featured-card"
            style={{
              borderRadius: '26px',
              padding: '16px 20px',
              display: 'flex',
              gap: '18px',
              alignItems: 'center',
            }}
          >
            {/* Project Thumbnail with Badge */}
            <div
              style={{
                position: 'relative',
                width: '128px',
                height: '110px',
                borderRadius: '18px',
                overflow: 'hidden',
                flexShrink: 0,
              }}
              className="featured-thumb-box"
            >
              <Image
                src={currentProject.mainImage}
                alt={currentProject.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="150px"
              />
              <div
                style={{
                  position: 'absolute',
                  top: '8px',
                  left: '8px',
                  background: '#0D1B2A',
                  color: '#D4A853',
                  border: '1px solid rgba(212, 168, 83, 0.4)',
                  fontSize: '0.58rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '3px 8px',
                  borderRadius: '9999px',
                }}
              >
                FEATURED PROJECT
              </div>
            </div>

            {/* Project Details & Slider Controls */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '2px',
                }}
              >
                <h4
                  className="hero-card-title"
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {currentProject.title}
                </h4>
                <span
                  className="hero-card-index"
                  style={{ fontSize: '0.72rem', fontWeight: 600 }}
                >
                  0{featuredIndex + 1} / 0{projects.length}
                </span>
              </div>

              <p
                className="hero-card-desc"
                style={{
                  fontSize: '0.78rem',
                  lineHeight: 1.4,
                  marginBottom: '8px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {currentProject.description}
              </p>

              {/* View Project link */}
              <button
                onClick={() => onOpenProjectDetail(currentProject)}
                className="hero-view-project-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                }}
              >
                <span>View Project</span>
                <ArrowRight size={13} />
              </button>

              {/* Bottom Row: Client Avatars, Dash Pagination & Arrow Buttons */}
              <div
                className="hero-card-footer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '8px',
                }}
              >
                {/* Verified Developer Partner Badges */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    className="hero-partner-badge"
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#0D1B2A',
                      color: '#ECC675',
                      fontSize: '0.6rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1.5px solid #ffffff',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    }}
                    title="GK Associates"
                  >
                    GK
                  </div>
                  <div
                    className="hero-partner-badge"
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#D4A853',
                      color: '#0D1B2A',
                      fontSize: '0.6rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: '-6px',
                      border: '1.5px solid #ffffff',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    }}
                    title="GS Builders"
                  >
                    GS
                  </div>
                  <div
                    className="hero-partner-badge"
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#5E9F9D',
                      color: '#0D1B2A',
                      fontSize: '0.6rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: '-6px',
                      border: '1.5px solid #ffffff',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    }}
                    title="SNBP Group"
                  >
                    SN
                  </div>
                  <div
                    className="hero-partner-badge"
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#0D1B2A',
                      color: '#ECC675',
                      fontSize: '0.6rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: '-6px',
                      border: '1.5px solid #ffffff',
                    }}
                    title="More Developer Partners"
                  >
                    +4
                  </div>
                </div>

                {/* Dash Pagination Indicators */}
                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                  {projects.slice(0, 4).map((_, i) => (
                    <div
                      key={i}
                      className={i === featuredIndex ? 'hero-dot-active' : 'hero-dot-inactive'}
                      style={{
                        width: i === featuredIndex ? '16px' : '6px',
                        height: '3px',
                        borderRadius: '2px',
                        transition: 'all 0.3s ease',
                      }}
                    />
                  ))}
                </div>

                {/* Arrow Controls */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    onClick={handlePrev}
                    className="hero-slider-btn-prev"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}
                    aria-label="Previous Project"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="hero-slider-btn-next"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}
                    aria-label="Next Project"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Stats Container */}
          <div
            className="hero-stats-card"
            style={{
              borderRadius: '26px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Stat 1 */}
            <div>
              <div className="hero-stat-icon" style={{ marginBottom: '4px' }}>
                <Building size={18} />
              </div>
              <div
                className="hero-stat-value"
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 900,
                  lineHeight: 1.1,
                }}
              >
                250+
              </div>
              <div className="hero-stat-label" style={{ fontSize: '0.68rem', fontWeight: 600 }}>
                Projects Complete
              </div>
            </div>

            <div className="hero-stat-divider" style={{ width: '1px', height: '40px' }} />

            {/* Stat 2 */}
            <div>
              <div className="hero-stat-icon" style={{ marginBottom: '4px' }}>
                <Users size={18} />
              </div>
              <div
                className="hero-stat-value"
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 900,
                  lineHeight: 1.1,
                }}
              >
                700+
              </div>
              <div className="hero-stat-label" style={{ fontSize: '0.68rem', fontWeight: 600 }}>
                Skilled Workforce
              </div>
            </div>

            <div className="hero-stat-divider" style={{ width: '1px', height: '40px' }} />

            {/* Stat 3 */}
            <div>
              <div className="hero-stat-icon" style={{ marginBottom: '4px' }}>
                <Globe size={18} />
              </div>
              <div
                className="hero-stat-value"
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 900,
                  lineHeight: 1.1,
                }}
              >
                15+
              </div>
              <div className="hero-stat-label" style={{ fontSize: '0.68rem', fontWeight: 600 }}>
                Heavy Rotary Rigs
              </div>
            </div>
          </div>

          {/* Card 3: Ocean Navy CTA Card with Sunset Gold Accents */}
          <div
            onClick={onOpenEstimator}
            className="cta-hero-card hero-cta-card"
            style={{
              borderRadius: '26px',
              padding: '22px 24px',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Top row: Circular Unique Thumbnail + Circular Diagonal Arrow Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(212, 168, 83, 0.6)',
                }}
              >
                <Image
                  src="/images/villa_cantilever_deck.jpg"
                  alt="Vision"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="48px"
                />
              </div>

              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--sunset-gold, #D4A853)',
                  color: 'var(--ocean-navy, #0D1B2A)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.25s ease',
                }}
                className="cta-card-arrow"
              >
                <ArrowUpRight size={18} strokeWidth={2.4} />
              </div>
            </div>

            <div>
              <h4
                className="hero-cta-title"
                style={{
                  fontSize: '1.18rem',
                  fontWeight: 800,
                  marginBottom: '6px',
                  lineHeight: 1.25,
                }}
              >
                Turnkey Civil & Piling Contracts
              </h4>
              <p
                className="hero-cta-desc"
                style={{
                  fontSize: '0.8rem',
                  lineHeight: 1.45,
                }}
              >
                Direct mobilization of SANY rotary rigs & 700+ skilled personnel. Calculate your project estimate instantly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 900px) {
          .hero-attribute-stack {
            display: block !important;
          }
        }
        @media (max-width: 1200px) {
          .bottom-cards-grid {
            grid-template-columns: 1.35fr 1.05fr 0.95fr !important;
            gap: 14px !important;
          }
        }
        @media (max-width: 1024px) {
          .bottom-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
        }
        @media (max-width: 640px) {
          .hero-featured-card {
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 14px !important;
            gap: 12px !important;
          }
          .hero-featured-card .featured-thumb-box {
            width: 100% !important;
            height: 140px !important;
          }
          .hero-stats-card {
            padding: 16px 14px !important;
          }
          .cta-hero-card {
            padding: 18px 16px !important;
          }
        }
        .cta-hero-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(28, 25, 23, 0.45);
        }
        .cta-hero-card:hover .cta-card-arrow {
          transform: translate(2px, -2px);
        }
      `}</style>
    </section>
  );
}
