import React from 'react';
import NetworkBackground from '@/components/NetworkBackground';
import HeroSection from '@/components/sections/HeroSection';
import ObjectivesSection from '@/components/sections/ObjectivesSection';
import ProgramSection from '@/components/sections/ProgramSection';
import CertificationSection from '@/components/sections/CertificationSection';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <NetworkBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <ObjectivesSection />
        <ProgramSection />
        <CertificationSection />
      </div>
    </div>
  );
};

export default Index;
