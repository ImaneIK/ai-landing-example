import React from 'react';
import { CheckCircle, Brain, Link, Users, TrendingUp, Zap } from 'lucide-react';

const ObjectivesSection: React.FC = () => {
  const objectives = [
    {
      icon: Brain,
      title: "Maîtriser l'ensemble des fonctionnalités du CRM",
      description: "IA + automatisation pour optimiser vos processus"
    },
    {
      icon: Link,
      title: "Connecter les outils externes",
      description: "Facebook Ads, e-mail, réseaux sociaux et plus"
    },
    {
      icon: Zap,
      title: "Créer des tunnels de vente complets",
      description: "Landing page + chatbot IA + séquences e-mail"
    },
    {
      icon: Users,
      title: "Collaborer efficacement en équipe",
      description: "Au sein de la plateforme avec gestion des rôles"
    },
    {
      icon: TrendingUp,
      title: "Mettre en place un suivi et une analyse",
      description: "Des performances avec tableaux de bord personnalisés"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Objectifs de la{' '}
            <span className="text-primary">Formation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Développez votre expertise CRM avec une approche pratique et des outils modernes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            return (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-primary/50 transition-smooth hover:shadow-glow"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {objective.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {objective.description}
                </p>

                <div className="mt-6 flex items-center text-primary text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Inclus dans la formation
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;