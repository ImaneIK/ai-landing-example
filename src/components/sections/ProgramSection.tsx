import React from 'react';
import { Calendar, Clock, Target, BookOpen, Users, BarChart3, Settings } from 'lucide-react';

const ProgramSection: React.FC = () => {
  const weeks = [
    {
      week: 1,
      title: "Introduction & Mise en place",
      objective: "Prendre en main le CRM, configurer les accès et comprendre l'écosystème",
      icon: Settings,
      modules: [
        {
          day: 1,
          title: "Découverte du CRM",
          content: [
            "Présentation globale de la plateforme : tableau de bord, navigation, IA intégrée",
            "Comprendre les différents modules : CRM, e-mailing, Facebook Ads, chatbots, automation",
            "Sécurité & gestion des données"
          ]
        },
        {
          day: 2,
          title: "Paramétrage initial",
          content: [
            "Création du compte & gestion des utilisateurs",
            "Connexion des réseaux sociaux (Facebook, Instagram, LinkedIn, etc.)",
            "Connexion de l'adresse e-mail professionnelle",
            "Paramètres de confidentialité et gestion des rôles"
          ]
        }
      ],
      deliverable: "Compte opérationnel configuré"
    },
    {
      week: 2,
      title: "Suivi d'activité & Automatisation",
      objective: "Suivre les campagnes marketing et automatiser les tâches répétitives",
      icon: BarChart3,
      modules: [
        {
          day: 1,
          title: "Suivi Facebook Ads & Analytique",
          content: [
            "Connexion du compte publicitaire",
            "Lecture des statistiques en temps réel",
            "Création d'un tableau de bord personnalisé",
            "Interprétation des performances"
          ]
        },
        {
          day: 2,
          title: "Automatisation & IA",
          content: [
            "Introduction aux scénarios d'automatisation",
            "Création d'automatisations simples",
            "Notification quand un lead arrive",
            "Envoi automatique d'e-mails après une action",
            "Présentation de l'IA : scoring des leads, suggestions d'actions"
          ]
        }
      ],
      deliverable: "Workflow d'automatisation actif"
    },
    {
      week: 3,
      title: "Pages de vente, Chatbots & Emailing",
      objective: "Créer un tunnel de vente complet",
      icon: Target,
      modules: [
        {
          day: 1,
          title: "Création de pages de vente",
          content: [
            "Modèles de landing pages",
            "Intégration des formulaires",
            "Design & optimisation pour la conversion"
          ]
        },
        {
          day: 2,
          title: "Chatbot IA & Formulaires",
          content: [
            "Création d'un chatbot IA pour qualifier les leads",
            "Personnalisation des réponses",
            "Intégration du chatbot sur une page de vente ou un site externe",
            "Création de séquences e-mail",
            "Personnalisation et segmentation de la base de données",
            "Analyse des taux d'ouverture et de clic"
          ]
        }
      ],
      deliverable: "Un tunnel de vente complet prêt à l'emploi"
    },
    {
      week: 4,
      title: "Collaboration & Optimisation",
      objective: "Travailler en équipe, analyser et améliorer les performances",
      icon: Users,
      modules: [
        {
          day: 1,
          title: "Gestion d'équipe & Collaboration",
          content: [
            "Attribution des rôles et permissions",
            "Gestion des tâches et suivi en équipe",
            "Messagerie interne et partage de documents"
          ]
        },
        {
          day: 2,
          title: "Analyse & Optimisation",
          content: [
            "Lecture et interprétation des rapports : leads, ventes, e-mails, ROI",
            "Stratégies d'amélioration continue",
            "Automatisations avancées (scénarios complexes)"
          ]
        }
      ],
      deliverable: "Rapport d'analyse + plan d'optimisation"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Programme de la{' '}
            <span className="text-primary">Formation</span>
          </h2>
          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>4 semaines</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>2 séances/semaine</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span>30% théorie / 70% pratique</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {weeks.map((week, index) => {
            const IconComponent = week.icon;
            return (
              <div
                key={index}
                className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border p-8 hover:border-primary/50 transition-smooth"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-bold text-primary bg-primary/20 px-3 py-1 rounded-full">
                        Semaine {week.week}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {week.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      <span className="font-medium text-accent">Objectif :</span> {week.objective}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {week.modules.map((module, moduleIndex) => (
                    <div
                      key={moduleIndex}
                      className="bg-muted/20 p-6 rounded-xl border border-border/50"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                          <span className="text-primary font-bold text-sm">J{module.day}</span>
                        </div>
                        <h4 className="font-semibold text-lg text-foreground">
                          {module.title}
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {module.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-accent">Livrable :</span>
                    <span className="text-muted-foreground">{week.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;