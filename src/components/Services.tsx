import { Code, Palette, Search, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Sviluppo Web",
      description: "Siti web e applicazioni web moderne, responsive e performanti utilizzando le tecnologie più avanzate.",
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description: "Interfacce utente intuitive e esperienze coinvolgenti che convertono i visitatori in clienti.",
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description: "Strategie di ottimizzazione e marketing digitale per aumentare la tua visibilità online.",
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Applicazioni mobili native e progressive web app per iOS e Android.",
    },
  ];

  return (
    <section id="servizi" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Offriamo soluzioni complete per la tua presenza digitale, 
            dalla strategia all'implementazione.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;