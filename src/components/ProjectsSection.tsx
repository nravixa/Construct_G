'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '@/types';
import ProjectCard from './ProjectCard';
import { Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectsSectionProps {
  projects: Project[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedLocation: string;
  selectedMachinery: string;
  onOpenDetail: (project: Project) => void;
}

export default function ProjectsSection({
  projects,
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  selectedMachinery,
  onOpenDetail,
}: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Residential', 'Commercial', 'Piling', 'Institutional'];
  const gridRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const catMatch =
        activeTab === 'All'
          ? selectedCategory === 'All' || p.category === selectedCategory
          : p.category === activeTab;

      const locMatch =
        selectedLocation === 'All' ||
        p.location.toLowerCase().includes(selectedLocation.toLowerCase().split(' ')[0]);

      const machMatch =
        selectedMachinery === 'All' ||
        (p.specs.rigsUsed &&
          p.specs.rigsUsed.toLowerCase().includes(selectedMachinery.toLowerCase().split(' ')[0]));

      return catMatch && locMatch && machMatch;
    });
  }, [projects, activeTab, selectedCategory, selectedLocation, selectedMachinery]);

  // Parallax staggered column scrub & watermark horizontal drift
  useEffect(() => {
    const gridEl = gridRef.current;
    if (!gridEl) return;

    const ctx = gsap.context(() => {
      // Horizontal drift watermark
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { xPercent: 10 },
          {
            xPercent: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: gridEl,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        );
      }

      // Staggered column parallax
      const cards = gridEl.querySelectorAll('.editorial-project-card');
      cards.forEach((card, i) => {
        const speed = i % 3 === 0 ? -20 : i % 3 === 1 ? -60 : -38;
        gsap.fromTo(
          card,
          { y: 15 },
          {
            y: speed,
            ease: 'none',
            scrollTrigger: {
              trigger: gridEl,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.3,
            },
          }
        );
      });
    }, gridEl);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      style={{
        padding: '100px 0 110px 0',
        background: 'var(--coastal-white, #F7F7F5)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Parallax Watermark */}
      <div
        ref={watermarkRef}
        style={{
          position: 'absolute',
          top: '35%',
          left: '0%',
          width: '200%',
          fontSize: 'clamp(5rem, 14vw, 13rem)',
          fontFamily: 'var(--font-heading)',
          fontWeight: 900,
          color: 'var(--ocean-navy, #0D1B2A)',
          opacity: 0.025,
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          willChange: 'transform',
        }}
      >
        PUNE ARCHITECTURAL PORTFOLIO
      </div>

      <div className="container-editorial" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            marginBottom: '42px',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.74rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--sunset-gold, #D4A853)',
                marginBottom: '6px',
              }}
            >
              CURATED ARCHITECTURAL PORTFOLIO
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                color: 'var(--ocean-navy, #0D1B2A)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                marginBottom: '4px',
              }}
            >
              Landmarks Across Maharashtra
            </h2>
            <p style={{ color: 'var(--driftwood-gray, #8A857F)', fontSize: '0.92rem' }}>
              Over 25+ Lakh sq. ft. of structural engineering delivered across Pune & Maharashtra
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {/* Category Filter Pills (Mobile App Swipeable Track) */}
            <div
              className="hide-scrollbar"
              style={{
                display: 'flex',
                gap: '6px',
                background: 'rgba(220, 205, 179, 0.35)',
                border: '1px solid rgba(220, 205, 179, 0.5)',
                padding: '4px',
                borderRadius: '9999px',
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                maxWidth: '100%',
              }}
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setSelectedCategory(tab === 'All' ? 'All' : tab);
                    }}
                    style={{
                      padding: '7px 16px',
                      borderRadius: '9999px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      background: isActive ? 'var(--ocean-navy, #0D1B2A)' : 'transparent',
                      color: isActive ? 'var(--sunset-gold, #D4A853)' : 'var(--driftwood-gray, #8A857F)',
                      border: isActive ? '1px solid rgba(212, 168, 83, 0.4)' : '1px solid transparent',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* See All Pill Button */}
            <button
              onClick={() => {
                setActiveTab('All');
                setSelectedCategory('All');
              }}
              className="btn-outline-pill"
              style={{ padding: '8px 18px', fontSize: '0.82rem', whiteSpace: 'nowrap' }}
            >
              <span>See All</span>
            </button>
          </div>
        </div>

        {/* 3 Column Cards Grid with Multi-Tier Parallax Offsets */}
        {filteredProjects.length === 0 ? (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              background: '#ffffff',
              borderRadius: '24px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            }}
          >
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>
              No projects match this filter
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '18px' }}>
              Clear or change your filters to view all works.
            </p>
            <button
              onClick={() => {
                setActiveTab('All');
                setSelectedCategory('All');
              }}
              className="btn-dark-pill-action"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            ref={gridRef}
            className="projects-editorial-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetail={onOpenDetail}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .projects-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
        }
      `}</style>
    </section>
  );
}
