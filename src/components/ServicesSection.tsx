import { useState } from "react";
import { Cloud, Settings, Code, Headphones, Shield, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceForm } from "./ServiceForm";

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "remote-tos",
      title: "Remote TOS – Total IT Outsourcing",
      description: "Your Virtual IT Powerhouse in India. Complete IT ecosystem management with 60% cost savings.",
      icon: Cloud,
      features: [
        "24/7 Monitoring & Support",
        "Exceptional Cost Savings",
        "Scalability & Flexibility",
        "Strategic Resource Allocation"
      ],
      accent: "border-primary",
    },
    {
      id: "segmented-amc",
      title: "Segmented / Partial AMCs",
      description: "Flexible & Focused IT Support. Choose specific IT components with 6-12 month contracts.",
      icon: Settings,
      features: [
        "Customizable Plans",
        "Premium Quality Support",
        "Cost-Effective Solutions",
        "SLA-Based Commitments"
      ],
      accent: "border-accent",
    },
    {
      id: "custom-development",
      title: "Custom Application Development",
      description: "Bespoke Software Solutions tailored to your unique operational challenges.",
      icon: Code,
      features: [
        "Zero Templates",
        "Scalable Architecture",
        "End-to-End Development",
        "Competitive Advantage"
      ],
      accent: "border-primary",
    }
  ];

  const amcServices = [
    {
      title: "Remote Network Monitoring & Management",
      description: "Real-time monitoring and proactive maintenance",
      icon: Shield
    },
    {
      title: "Remote Server Monitoring & Management",
      description: "Keep servers secure and optimized",
      icon: Settings
    },
    {
      title: "Remote IT Helpdesk & End-User Support",
      description: "Fast, friendly technical support",
      icon: Headphones
    },
    {
      title: "Remote Patching Services",
      description: "Automated security updates and patches",
      icon: Wrench
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tailored, Efficient &{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Budget-Friendly
            </span>{" "}
            IT Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT services engineered for businesses worldwide, 
            backed by agility, expertise, and unmatched affordability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id}
                className={`group hover:shadow-creative transition-all duration-300 hover:-translate-y-2 border-2 ${service.accent} bg-card/50 backdrop-blur-sm`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-primary">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedService(service.id)}
                  >
                    Get Quote for {service.title.split(' –')[0]}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AMC Services Breakdown */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">AMC Components</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amcServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="group hover:shadow-creative transition-all duration-300 hover:-translate-y-1 border-2 border-accent/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="p-3 rounded-xl bg-gradient-primary mx-auto w-fit mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Service Form Modal */}
        {selectedService && (
          <ServiceForm 
            serviceType={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </section>
  );
};