import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be handled here
    console.log('Form submitted');
  };

  const handleWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "33123456789"; // Format: country code + number without +
    const message = "Bonjour, je souhaite obtenir des informations sur la formation CRM AHDIGITAL.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Demander des <span className="text-primary">informations</span>
          </h2>
          <p className="text-secondary-foreground text-lg">
            Contactez-nous pour plus de détails sur notre formation CRM
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Formulaire de contact</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Votre numéro"
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Votre message..."
                    rows={4}
                    className="bg-background/50"
                  />
                </div>
                <Button type="submit" variant="cta" className="w-full flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Envoyer la demande
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Contact direct</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Réponse rapide par WhatsApp</h4>
                <p className="text-secondary-foreground mb-4">
                  Obtenez une réponse immédiate à vos questions sur la formation.
                </p>
                <Button 
                  onClick={handleWhatsApp}
                  variant="outline" 
                  className="w-full flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contacter via WhatsApp
                </Button>
              </div>

              <div className="pt-6 border-t border-primary/20">
                <h4 className="font-semibold mb-2">Informations pratiques</h4>
                <ul className="space-y-2 text-secondary-foreground">
                  <li>📧 Email : formation@ahdigital.com</li>
                  <li>📱 Téléphone : +33 1 23 45 67 89</li>
                  <li>⏰ Horaires : Lun-Ven 9h-18h</li>
                  <li>🎯 Réponse sous 24h</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;