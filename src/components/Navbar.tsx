import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary">
          AH<span className="text-accent">DIGITAL</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#formation" className="text-secondary-foreground hover:text-primary transition-colors">
            Formation
          </a>
          <a href="#programme" className="text-secondary-foreground hover:text-primary transition-colors">
            Programme
          </a>
          <a href="#certification" className="text-secondary-foreground hover:text-primary transition-colors">
            Certification
          </a>
          <a href="#contact" className="text-secondary-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        <Button variant="cta" size="sm" className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4" />
          Demander des informations
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;