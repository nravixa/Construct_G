'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';
import { Star, MapPin, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenDetail: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {

  return (
    <div
      onClick={() => onOpenDetail(project)}
      style={{
        background: '#ffffff',
        borderRadius: '22px',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(13, 27, 42, 0.06)',
        border: '1px solid rgba(220, 205, 179, 0.65)',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="editorial-project-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 20px 44px rgba(13, 27, 42, 0.12), 0 0 24px rgba(212, 168, 83, 0.18)';
        e.currentTarget.style.borderColor = 'rgba(212, 168, 83, 0.8)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(13, 27, 42, 0.06)';
        e.currentTarget.style.borderColor = 'rgba(220, 205, 179, 0.65)';
      }}
    >
      {/* Thumbnail Area */}
      <div
        style={{
          position: 'relative',
          height: '220px',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Image
          src={project.mainImage}
          alt={project.title}
          fill
          style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
          className="editorial-card-img"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Top-Left Spec Pill */}
        <div
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            background: 'rgba(13, 27, 42, 0.9)',
            backdropFilter: 'blur(10px)',
            color: 'var(--sunset-gold, #D4A853)',
            border: '1px solid rgba(212, 168, 83, 0.4)',
            fontSize: '0.76rem',
            fontWeight: 800,
            padding: '5px 12px',
            borderRadius: '9999px',
            letterSpacing: '0.04em',
          }}
        >
          {project.specs.area}
        </div>

        {/* Top-Right Status Badge */}
        <div
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: 'rgba(13, 27, 42, 0.88)',
            backdropFilter: 'blur(10px)',
            color: 'var(--limestone-beige, #DCCDB3)',
            border: '1px solid rgba(220, 205, 179, 0.4)',
            fontSize: '0.7rem',
            fontWeight: 700,
            padding: '5px 12px',
            borderRadius: '9999px',
            letterSpacing: '0.04em',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          {project.specs.status}
        </div>
      </div>

      {/* Card Content Area */}
      <div
        style={{
          padding: '18px 20px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '6px',
            }}
          >
            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: 800,
                color: 'var(--ocean-navy, #0D1B2A)',
                lineHeight: 1.25,
              }}
            >
              {project.title}
            </h3>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--driftwood-gray, #8A857F)',
              fontSize: '0.82rem',
              marginBottom: '12px',
            }}
          >
            <MapPin size={13} color="var(--sunset-gold, #D4A853)" />
            <span>{project.location}</span>
          </div>

          <div
            style={{
              display: 'inline-block',
              background: 'rgba(127, 184, 182, 0.12)',
              color: 'var(--ocean-navy, #0D1B2A)',
              border: '1px solid rgba(127, 184, 182, 0.35)',
              fontSize: '0.74rem',
              fontWeight: 700,
              padding: '4px 10px',
              borderRadius: '6px',
              marginBottom: '14px',
            }}
          >
            Client: {project.client}
          </div>
        </div>

        {/* Card Footer: Rating & Action */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(220, 205, 179, 0.45)',
            paddingTop: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Star size={14} fill="#D4A853" color="#D4A853" />
            <span style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--ocean-navy, #0D1B2A)' }}>
              {project.rating.toFixed(1)}
            </span>
            <span style={{ fontSize: '0.74rem', color: 'var(--driftwood-gray, #8A857F)' }}>
              ({project.reviewsCount})
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--sunset-gold, #D4A853)',
            }}
          >
            <span>View Blueprint</span>
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .editorial-project-card:hover .editorial-card-img {
          transform: scale(1.06);
        }
      `}</style>
    </div>
  );
}
