'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import {
  X,
  Star,
  MapPin,
  Calendar,
  CheckCircle2,
  HardHat,
  ArrowRight,
  Shield,
  Wrench,
  Building,
} from 'lucide-react';
import ProjectCard from './ProjectCard';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export default function ProjectModal({
  project,
  onClose,
  onSelectProject,
  allProjects,
}: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [siteVisitDate, setSiteVisitDate] = useState('2026-11-05');
  const [consultScope, setConsultScope] = useState('Turnkey RCC Construction & Deep Piling');

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  const similarProjects = allProjects.filter((p) => p.id !== project.id).slice(0, 4);

  const handleBooking = () => {
    const text = encodeURIComponent(
      `Hello G&J Buildcon, I am requesting a site audit for ${project.title} (${project.location}):
• Selected Scope: ${consultScope}
• Preferred Date: ${siteVisitDate}
Please share structural drawings and engineer appointment confirmation.`
    );
    window.open(`https://wa.me/919168777272?text=${text}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(25, 21, 18, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        overflowY: 'auto',
      }}
      className="project-modal-backdrop"
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1180px',
          maxHeight: '92vh',
          background: 'var(--coastal-white, #F7F7F5)',
          borderRadius: '32px',
          boxShadow: '0 30px 80px rgba(13, 27, 42, 0.35)',
          overflowY: 'auto',
          position: 'relative',
          padding: '36px 40px',
          border: '1px solid rgba(220, 205, 179, 0.7)',
        }}
        onClick={(e) => e.stopPropagation()}
        className="modal-editorial-container"
      >
        {/* Mobile Sheet Drag Indicator */}
        <div
          style={{
            width: '44px',
            height: '4px',
            borderRadius: '2px',
            background: 'var(--border-limestone, rgba(220, 205, 179, 0.9))',
            margin: '0 auto 16px auto',
          }}
          className="mobile-sheet-handle"
        />

        {/* Top Header: Breadcrumbs & Close Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '28px',
          }}
        >
          {/* Breadcrumbs on Left */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.82rem',
              color: 'var(--driftwood-gray, #8A857F)',
              fontWeight: 500,
            }}
          >
            <span style={{ cursor: 'pointer' }} onClick={onClose}>
              Home
            </span>
            <span>&gt;</span>
            <span style={{ color: 'var(--sunset-gold, #D4A853)', fontWeight: 700 }}>{project.category}</span>
            <span>&gt;</span>
            <span style={{ color: 'var(--ocean-navy, #0D1B2A)', fontWeight: 700 }}>{project.title}</span>
          </div>

          {/* Close Pill Button */}
          <button
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 18px',
              borderRadius: '9999px',
              background: '#ffffff',
              border: '1px solid rgba(220, 205, 179, 0.65)',
              fontSize: '0.84rem',
              fontWeight: 700,
              color: 'var(--ocean-navy, #0D1B2A)',
              boxShadow: '0 2px 8px rgba(13, 27, 42, 0.05)',
              cursor: 'pointer',
            }}
          >
            <span>Close Overview</span>
            <X size={15} />
          </button>
        </div>

        {/* Title & Location Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '28px',
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 'clamp(2rem, 3.2vw, 2.8rem)',
                fontWeight: 800,
                color: 'var(--ocean-navy, #0D1B2A)',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                marginBottom: '6px',
              }}
            >
              {project.title}
            </h1>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--driftwood-gray, #8A857F)',
                fontSize: '0.9rem',
              }}
            >
              <MapPin size={15} color="var(--sunset-gold, #D4A853)" />
              <span>{project.location}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                background: 'rgba(127, 184, 182, 0.12)',
                border: '1px solid rgba(127, 184, 182, 0.35)',
                padding: '8px 16px',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: 'var(--ocean-navy, #0D1B2A)',
              }}
            >
              Client: {project.client}
            </div>
          </div>
        </div>

        {/* Gallery & Booking Split Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.45fr 1fr',
            gap: '36px',
            marginBottom: '48px',
          }}
          className="modal-split-grid"
        >
          {/* Left: Gallery Stack */}
          <div>
            {/* Big Featured Photo */}
            <div
              style={{
                position: 'relative',
                height: '380px',
                width: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(13, 27, 42, 0.08)',
                border: '1px solid rgba(220, 205, 179, 0.65)',
                marginBottom: '14px',
              }}
            >
              <Image
                src={project.galleryImages[activeImageIndex] || project.mainImage}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 100vw, 60vw"
              />
            </div>

            {/* 4 Thumbnails with +9 badge */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '12px',
              }}
            >
              {project.galleryImages.slice(0, 4).map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    position: 'relative',
                    height: '84px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border:
                      idx === activeImageIndex
                        ? '2.5px solid var(--sunset-gold, #D4A853)'
                        : '1px solid rgba(220, 205, 179, 0.6)',
                  }}
                >
                  <Image
                    src={img}
                    alt={`Thumb ${idx + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="120px"
                  />
                  {idx === 3 && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(25, 21, 18, 0.65)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.95rem',
                        fontWeight: 800,
                      }}
                    >
                      +9
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: About Text & Floating Booking Card (Matching Reference Video) */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                }}
              >
                About {project.title}
              </h3>
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '24px',
                }}
              >
                {project.description}
              </p>

              {/* Floating White Booking Card */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '24px',
                  boxShadow: '0 16px 40px rgba(13, 27, 42, 0.08)',
                  border: '1px solid rgba(220, 205, 179, 0.65)',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '6px',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 900,
                      color: 'var(--ocean-navy, #0D1B2A)',
                    }}
                  >
                    {project.specs.area}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--driftwood-gray, #8A857F)' }}>
                    • {project.specs.scope}
                  </span>
                </div>

                {/* Date Picker Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    marginBottom: '14px',
                  }}
                >
                  <div
                    style={{
                      border: '1px solid rgba(220, 205, 179, 0.6)',
                      borderRadius: '12px',
                      padding: '8px 12px',
                    }}
                  >
                    <div style={{ fontSize: '0.66rem', color: 'var(--driftwood-gray, #8A857F)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Proposed Start
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ocean-navy, #0D1B2A)' }}>
                      Nov 01, 2026
                    </div>
                  </div>

                  <div
                    style={{
                      border: '1px solid rgba(220, 205, 179, 0.6)',
                      borderRadius: '12px',
                      padding: '8px 12px',
                    }}
                  >
                    <div style={{ fontSize: '0.66rem', color: 'var(--driftwood-gray, #8A857F)', fontWeight: 700, textTransform: 'uppercase' }}>
                      Target Delivery
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ocean-navy, #0D1B2A)' }}>
                      {project.specs.duration}
                    </div>
                  </div>
                </div>

                {/* Scope selector */}
                <div style={{ marginBottom: '16px' }}>
                  <select
                    value={consultScope}
                    onChange={(e) => setConsultScope(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '12px',
                      border: '1px solid rgba(220, 205, 179, 0.6)',
                      background: 'rgba(247, 247, 245, 0.5)',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--ocean-navy, #0D1B2A)',
                      outline: 'none',
                    }}
                  >
                    <option value="Turnkey RCC Construction & Deep Piling">Turnkey RCC Construction & Deep Piling</option>
                    <option value="Deep Rotary Foundation Piling Only">Deep Rotary Foundation Piling Only</option>
                    <option value="Superstructure Finishing & Plastering">Superstructure Finishing & Plastering</option>
                  </select>
                </div>

                {/* Ocean Navy & Sunset Gold CTA Pill Button */}
                <button
                  onClick={handleBooking}
                  className="btn-dark-pill"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '0.92rem',
                    background: 'var(--ocean-navy, #0D1B2A)',
                    color: 'var(--sunset-gold, #D4A853)',
                    border: '1px solid rgba(212, 168, 83, 0.4)',
                    boxShadow: '0 8px 20px rgba(13, 27, 42, 0.25)',
                  }}
                >
                  <span>Book Site Consultation</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Rating & Reviewer Avatars */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(220, 205, 179, 0.45)',
                  paddingTop: '16px',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--ocean-navy, #0D1B2A)' }}>
                    {project.rating.toFixed(1)}
                  </span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#D4A853" color="#D4A853" />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--driftwood-gray, #8A857F)' }}>
                    ({project.reviewsCount} reviews)
                  </span>
                </div>

                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--sunset-gold, #D4A853)' }}>
                  Verified by {project.client}
                </div>
              </div>

              {/* Amenities / Capabilities 4-Icon Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '8px',
                  textAlign: 'center',
                }}
              >
                {[
                  { icon: <Shield size={18} color="var(--sunset-gold, #D4A853)" />, label: 'Grade-A Contractor' },
                  { icon: <Wrench size={18} color="var(--sunset-gold, #D4A853)" />, label: 'SANY Rotary Rigs' },
                  { icon: <Building size={18} color="var(--sunset-gold, #D4A853)" />, label: 'RERA Approved' },
                  { icon: <CheckCircle2 size={18} color="var(--sunset-gold, #D4A853)" />, label: 'Seismic Zone 3' },
                ].map((amenity, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(0,0,0,0.06)',
                      borderRadius: '14px',
                      padding: '12px 6px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    {amenity.icon}
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Projects Reel (Matching Reference Video Frame 19-20) */}
        <div>
          <h3
            style={{
              fontSize: '1.35rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '20px',
            }}
          >
            Similar Projects in Pune
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {similarProjects.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onOpenDetail={(proj) => {
                  onSelectProject(proj);
                  const container = document.querySelector('.modal-editorial-container');
                  if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .mobile-sheet-handle {
          display: none;
        }
        @media (max-width: 900px) {
          .modal-split-grid {
            grid-template-columns: 1fr !important;
          }
          .modal-editorial-container {
            padding: 24px 18px !important;
          }
        }
        @media (max-width: 640px) {
          .project-modal-backdrop {
            align-items: flex-end !important;
            padding: 0 !important;
          }
          .modal-editorial-container {
            max-height: 92vh !important;
            border-radius: 28px 28px 0 0 !important;
            padding: 16px 16px max(24px, env(safe-area-inset-bottom, 24px)) 16px !important;
          }
          .mobile-sheet-handle {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
