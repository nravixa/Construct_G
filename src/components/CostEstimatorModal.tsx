'use client';

import React, { useState, useMemo } from 'react';
import { X, Calculator, MessageSquare, CheckCircle2, ShieldCheck, Layers, Building2 } from 'lucide-react';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CostEstimatorModal({ isOpen, onClose }: CostEstimatorModalProps) {
  const [projectType, setProjectType] = useState<'Residential' | 'Commercial' | 'PilingOnly' | 'Institutional'>('Residential');
  const [areaSqFt, setAreaSqFt] = useState<number>(75000);
  const [soilType, setSoilType] = useState<'BlackCotton' | 'WeatheredRock' | 'HardBasalt'>('HardBasalt');
  const [floors, setFloors] = useState<number>(14);

  const estimation = useMemo(() => {
    let baseRate = 1850;
    if (projectType === 'Commercial') baseRate = 2100;
    if (projectType === 'Institutional') baseRate = 2300;
    if (projectType === 'PilingOnly') baseRate = 450;

    let soilMultiplier = 1.0;
    let recommendedRig = 'Tripod & Continuous Flight Augur';
    let pileDepth = '12 - 16 Meters';

    if (soilType === 'WeatheredRock') {
      soilMultiplier = 1.08;
      recommendedRig = 'MAT Deep Rotary Rig (180 kN·m)';
      pileDepth = '16 - 22 Meters (Rock Cased)';
    } else if (soilType === 'HardBasalt') {
      soilMultiplier = 1.18;
      recommendedRig = 'SANY SR285R Heavy Rig (285 kN·m)';
      pileDepth = '20 - 32 Meters (Basalt Socketed)';
    }

    const budgetCr = ((areaSqFt * baseRate * soilMultiplier) / 10000000).toFixed(2);
    const pilesCount = Math.round(areaSqFt / (floors > 10 ? 850 : 1200));
    const durationMonths = Math.max(8, Math.round((areaSqFt / 25000) * 1.5 + floors * 0.4));

    return { budgetCr, pilesCount, durationMonths, recommendedRig, pileDepth };
  }, [projectType, areaSqFt, soilType, floors]);

  if (!isOpen) return null;

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello G&J Buildcon Chief Engineering Desk,\n\nI calculated a structural civil estimate on your portal:\n` +
      `• Classification: ${projectType} (${areaSqFt.toLocaleString()} sq.ft., ${floors} Floors)\n` +
      `• Subsurface Strata: ${soilType}\n` +
      `• Recommended Rig: ${estimation.recommendedRig}\n` +
      `• Estimated Bored Piles: ~${estimation.pilesCount} Piles (${estimation.pileDepth})\n` +
      `• Indicative Budget: ~₹${estimation.budgetCr} Cr\n\n` +
      `Please connect regarding architectural drawings & borehole site review.`
    );
    window.open(`https://wa.me/919168777272?text=${text}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 250,
        background: 'rgba(13, 27, 42, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto',
      }}
      className="estimator-modal-backdrop"
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          background: 'var(--bg-surface, #ffffff)',
          color: 'var(--text-primary, #0D1B2A)',
          borderRadius: '30px',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.35), 0 0 30px rgba(212, 168, 83, 0.15)',
          border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.7))',
          overflowY: 'auto',
          padding: 'clamp(24px, 4vw, 36px)',
          transition: 'background-color 0.35s ease, color 0.35s ease',
        }}
        className="estimator-modal-sheet"
        onClick={(e) => e.stopPropagation()}
      >
        {/* App Sheet Pull Handle for mobile */}
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

        {/* Modal Top Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            borderBottom: '1px solid var(--border-light, rgba(13, 27, 42, 0.08))',
            paddingBottom: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(212, 168, 83, 0.15)',
                color: 'var(--sunset-gold, #D4A853)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(212, 168, 83, 0.35)',
              }}
            >
              <Calculator size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary, #0D1B2A)', margin: 0 }}>
                Piling & Civil Project Estimator
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted, #8A857F)', margin: '2px 0 0 0' }}>
                Algorithmic feasibility assessment tailored to Pune & Maharashtra geology
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(13, 27, 42, 0.06)',
              border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.6))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary, #0D1B2A)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="hover:scale-105"
            aria-label="Close Estimator"
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {/* Controls Column */}
          <div>
            {/* 1. Classification */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted, #8A857F)', marginBottom: '8px' }}>
                Structural Classification
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {[
                  { id: 'Residential', label: 'Residential Tower' },
                  { id: 'Commercial', label: 'Commercial IT Park' },
                  { id: 'PilingOnly', label: 'Rotary Piling Only' },
                  { id: 'Institutional', label: 'Academic / Hospital' },
                ].map((t) => {
                  const isSelected = projectType === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setProjectType(t.id as any)}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '12px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        background: isSelected
                          ? 'linear-gradient(145deg, #162638 0%, #0D1B2A 100%)'
                          : 'rgba(220, 205, 179, 0.15)',
                        color: isSelected ? 'var(--sunset-gold, #D4A853)' : 'var(--text-primary, #0D1B2A)',
                        border: isSelected
                          ? '1px solid var(--sunset-gold, #D4A853)'
                          : '1px solid var(--border-limestone, rgba(220, 205, 179, 0.6))',
                        boxShadow: isSelected ? '0 4px 12px rgba(13, 27, 42, 0.2)' : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Built-Up Area */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted, #8A857F)' }}>
                  Built-Up / Plot Area
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--sunset-gold, #D4A853)' }}>
                  {areaSqFt.toLocaleString()} sq.ft.
                </span>
              </div>
              <input
                type="range"
                min={10000}
                max={500000}
                step={5000}
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--sunset-gold, #D4A853)', cursor: 'pointer' }}
              />
            </div>

            {/* 3. Subsurface Soil Strata */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted, #8A857F)', marginBottom: '8px' }}>
                Pune Subsurface Strata (Geotechnical Report)
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  { id: 'BlackCotton', label: 'Black Cotton / Clay Soil (SPT N < 15)' },
                  { id: 'WeatheredRock', label: 'Murrum & Weathered Rock (SPT N: 15–50)' },
                  { id: 'HardBasalt', label: 'Hard Basalt Rock (UCS > 120 MPa, SANY Rig)' },
                ].map((s) => {
                  const isSelected = soilType === s.id;
                  return (
                    <div
                      key={s.id}
                      onClick={() => setSoilType(s.id as any)}
                      style={{
                        padding: '10px 14px',
                        borderRadius: '12px',
                        background: isSelected ? 'rgba(212, 168, 83, 0.12)' : 'rgba(220, 205, 179, 0.15)',
                        border: isSelected ? '1px solid var(--sunset-gold, #D4A853)' : '1px solid var(--border-limestone, rgba(220, 205, 179, 0.5))',
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--text-primary, #0D1B2A)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        color={isSelected ? 'var(--sunset-gold, #D4A853)' : 'var(--driftwood-gray, #8A857F)'}
                      />
                      <span>{s.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Building Floors */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted, #8A857F)' }}>
                  Number of Floors
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--sunset-gold, #D4A853)' }}>
                  G + {floors} Storeys
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={35}
                value={floors}
                onChange={(e) => setFloors(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--sunset-gold, #D4A853)', cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Results Summary Column */}
          <div
            style={{
              background: 'var(--bg-surface-translucent, rgba(247, 247, 245, 0.85))',
              border: '1px solid var(--border-limestone, rgba(220, 205, 179, 0.75))',
              borderRadius: '24px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-card, 0 8px 24px rgba(13, 27, 42, 0.05))',
            }}
          >
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--sunset-gold, #D4A853)', marginBottom: '4px' }}>
                Indicative Project Estimate
              </div>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--text-primary, #0D1B2A)', lineHeight: 1.1, marginBottom: '16px' }}>
                ₹{estimation.budgetCr} <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-muted, #8A857F)' }}>Cr*</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.84rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light, rgba(13, 27, 42, 0.08))', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--text-muted, #8A857F)' }}>Estimated Bored Piles:</span>
                  <strong style={{ color: 'var(--text-primary, #0D1B2A)' }}>~{estimation.pilesCount} Cast Piles</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light, rgba(13, 27, 42, 0.08))', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--text-muted, #8A857F)' }}>Recommended Rig:</span>
                  <strong style={{ color: 'var(--sunset-gold, #D4A853)', textAlign: 'right', maxWidth: '200px' }}>{estimation.recommendedRig}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light, rgba(13, 27, 42, 0.08))', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--text-muted, #8A857F)' }}>Rock Socket Depth:</span>
                  <strong style={{ color: 'var(--text-primary, #0D1B2A)' }}>{estimation.pileDepth}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted, #8A857F)' }}>Estimated Timeline:</span>
                  <strong style={{ color: 'var(--text-primary, #0D1B2A)' }}>{estimation.durationMonths} Months to Handover</strong>
                </div>
              </div>

              <div
                style={{
                  marginTop: '18px',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  background: 'rgba(127, 184, 182, 0.12)',
                  border: '1px solid rgba(127, 184, 182, 0.3)',
                  fontSize: '0.74rem',
                  color: 'var(--text-secondary, #D1D5DB)',
                  lineHeight: 1.45,
                }}
              >
                <div style={{ fontWeight: 800, color: 'var(--text-primary, #0D1B2A)', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <ShieldCheck size={13} style={{ color: 'var(--seafoam-dark, #5E9F9D)' }} />
                  <span>Standard IS 2911 Class-A Compliance</span>
                </div>
                Includes ultrasonic crosshole pile integrity testing, concrete grade M40/M50, and 100% in-house machinery mobilization.
              </div>
            </div>

            <div style={{ marginTop: '22px' }}>
              <button
                onClick={handleWhatsAppSend}
                style={{
                  width: '100%',
                  padding: '14px',
                  fontSize: '0.92rem',
                  fontWeight: 800,
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #162638 0%, #0D1B2A 100%)',
                  color: '#F7F7F5',
                  border: '1px solid var(--sunset-gold, #D4A853)',
                  boxShadow: '0 8px 24px rgba(13, 27, 42, 0.25), 0 0 16px rgba(212, 168, 83, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                className="hover:scale-[1.02]"
              >
                <MessageSquare size={16} style={{ color: 'var(--sunset-gold, #D4A853)' }} />
                <span>Submit Calculation to Chief Engineer</span>
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          .mobile-sheet-handle {
            display: none;
          }
          @media (max-width: 640px) {
            .estimator-modal-backdrop {
              align-items: flex-end !important;
              padding: 0 !important;
            }
            .estimator-modal-sheet {
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
    </div>
  );
}
