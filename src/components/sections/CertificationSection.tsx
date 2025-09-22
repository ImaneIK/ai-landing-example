import React from 'react';
import { Award, Video, FileText, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificationSection: React.FC = () => {
  const resources = [
    {
      icon: FileText,
      title: "Guide utilisateur PDF",
      description: "Captures d'écran + tutoriels étape par étape"
    },
    {
      icon: Video,
      title: "Vidéos explicatives",
      description: "Courtes (1–3 min) pour chaque fonctionnalité"
    }
  ];

  const certificationSteps = [
    "Présentation des projets : chaque participant présente son tunnel de vente automatisé",
    "Q&A & Atelier de résolution de problèmes",
    "Remise d'une certification d'utilisateur CRM IA & Automatisation"
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-2xl mb-6">
            <Award className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Clôture &{' '}
            <span className="text-primary">Certification</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Validez vos acquis et obtenez votre certification officielle
          </p>
        </div>

        {/* Certification Process */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Processus de Certification
          </h3>
          <div className="space-y-6">
            {certificationSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground">{step}</p>
                </div>
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Supports Pédagogiques
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-primary/50 transition-smooth"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-foreground">
                        {resource.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12 border border-primary/20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-xl mb-6">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Prêt à devenir expert CRM ?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez notre formation et maîtrisez l'IA et l'automatisation pour transformer votre business
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              S'inscrire à la Formation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Demander des Informations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;