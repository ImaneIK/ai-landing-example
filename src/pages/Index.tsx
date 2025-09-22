import React from 'react';
import NetworkBackground from '@/components/NetworkBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ObjectivesSection from '@/components/sections/ObjectivesSection';
import ProgramSection from '@/components/sections/ProgramSection';
import CertificationSection from '@/components/sections/CertificationSection';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <NetworkBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Content */}
      <div className="relative z-10 pt-16">
        <HeroSection />
        <ObjectivesSection />
        <ProgramSection />
        <CertificationSection />
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
