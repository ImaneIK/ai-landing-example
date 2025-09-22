import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Users, BookOpen } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
          <span className="bg-primary w-2 h-2 rounded-full mr-2 animate-pulse"></span>
          Formation Certifiante
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            FORMATION{' '}
            <span className="text-primary animate-pulse-glow">CRM</span>
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-accent">
            AHDIGITAL
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Maîtrisez l'ensemble des fonctionnalités du CRM avec{' '}
          <span className="text-primary font-semibold">IA + automatisation</span>.
          Créez des tunnels de vente complets et optimisez vos performances.
        </p>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="bg-muted/20 p-6 rounded-lg border border-border hover:border-primary/50 transition-smooth">
            <BookOpen className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Théorie + Pratique</h3>
            <p className="text-muted-foreground text-sm">30% théorie / 70% pratique sur 4 semaines</p>
          </div>
          <div className="bg-muted/20 p-6 rounded-lg border border-border hover:border-primary/50 transition-smooth">
            <Users className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Accompagnement</h3>
            <p className="text-muted-foreground text-sm">En présentiel ou visioconférence</p>
          </div>
          <div className="bg-muted/20 p-6 rounded-lg border border-border hover:border-primary/50 transition-smooth">
            <Play className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Certification</h3>
            <p className="text-muted-foreground text-sm">Utilisateur CRM IA & Automatisation</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Commencer la Formation
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            Nos Services
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            Nous Contacter
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">4</div>
            <div className="text-muted-foreground text-sm">Semaines</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">8</div>
            <div className="text-muted-foreground text-sm">Séances</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">70%</div>
            <div className="text-muted-foreground text-sm">Pratique</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-muted-foreground text-sm">Certifié</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;