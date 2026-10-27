'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import LeftFloatingDock from '@/components/LeftFloatingDock';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProjectModal from '@/components/ProjectModal';
import ParallaxShowcase from '@/components/ParallaxShowcase';
import ServicesParallax from '@/components/ServicesParallax';
import MachineryFleet from '@/components/MachineryFleet';
import LeadershipStory from '@/components/LeadershipStory';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CostEstimatorModal from '@/components/CostEstimatorModal';
import ShowreelModal from '@/components/ShowreelModal';
import MobileBottomNav from '@/components/MobileBottomNav';
import { PROJECTS_DATA } from '@/data/projects';
import { Project } from '@/types';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [selectedMachinery, setSelectedMachinery] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState<boolean>(false);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--coastal-white, #F7F7F5)', color: 'var(--ocean-navy, #0D1B2A)' }}>
      {/* Top Floating Navigation Bar (Matching Reference Image) */}
      <Header
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onNavigateHome={() => setSelectedProject(null)}
      />

      {/* Left Vertical Floating Architectural Dock */}
      <LeftFloatingDock
        onWatchShowreel={() => setIsShowreelOpen(true)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        activeProjectImage={PROJECTS_DATA[0]?.mainImage}
      />

      {/* Hero Section (Matching Reference Image: Editorial Serif "Spaces That Inspire" + Bottom 3-Card Dock) */}
      <HeroSection
        projects={PROJECTS_DATA}
        onOpenProjectDetail={(proj) => setSelectedProject(proj)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onWatchShowreel={() => setIsShowreelOpen(true)}
      />

      {/* Recommended Projects Grid with Staggered Parallax Scrub */}
      <ProjectsSection
        projects={PROJECTS_DATA}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedLocation={selectedLocation}
        selectedMachinery={selectedMachinery}
        onOpenDetail={(proj) => setSelectedProject(proj)}
      />

      {/* Dedicated Multi-Layer Parallax Showcase (Bedrock -> Superstructure) */}
      <ParallaxShowcase />

      {/* Services Capabilities with ScrollTrigger Scrub Parallax */}
      <ServicesParallax />

      {/* Heavy Rotary Piling Fleet (SANY, MAT, Hydra) */}
      <MachineryFleet />

      {/* Founding Leadership & Milestone History */}
      <LeadershipStory />

      {/* Developer Testimonials */}
      <Testimonials />

      {/* Contact & Consultation Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal & Booking Reel */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={PROJECTS_DATA}
      />

      {/* Piling & Civil Estimator Modal */}
      <CostEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />

      {/* Video Showreel Modal */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
      />
      {/* Native App Floating Mobile Bottom Navigation */}
      <MobileBottomNav onOpenEstimator={() => setIsEstimatorOpen(true)} />
    </main>
  );
}
