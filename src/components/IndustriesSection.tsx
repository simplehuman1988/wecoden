import { Car, Palette, Building, GraduationCap, Heart, Smartphone, Utensils, Plane, ShoppingBag, Building2, Zap, DollarSign, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const IndustriesSection = () => {
  const industries = [
    { name: "Automobile", icon: Car, description: "Streamline operations & enhance customer experience" },
    { name: "Beauty & Cosmetics", icon: Palette, description: "Elevate digital presence & eCommerce platforms" },
    { name: "Construction", icon: Building, description: "Optimize project management & site efficiency" },
    { name: "Education", icon: GraduationCap, description: "Build engaging e-learning & management systems" },
    { name: "Healthcare", icon: Heart, description: "Secure, compliant patient-centric systems" },
    { name: "Electronics", icon: Smartphone, description: "Innovative product designs & secure firmware" },
    { name: "Food & Beverage", icon: Utensils, description: "Streamline supply chains & enhance experiences" },
    { name: "Travel & Tourism", icon: Plane, description: "Seamless booking systems & personalized experiences" },
    { name: "Retail", icon: ShoppingBag, description: "Drive sales with eCommerce & digital solutions" },
    { name: "Real Estate", icon: Building2, description: "Streamline property management & client engagement" },
    { name: "Fintech", icon: DollarSign, description: "Secure, compliant financial technology solutions" },
    { name: "Non-Profit", icon: Users, description: "Maximize impact with cost-effective IT solutions" }
  ];

  const featuredIndustries = [
    {
      title: "Financial Services & Fintech",
      description: "Ensure unparalleled security, regulatory compliance, and operational efficiency with custom fintech solutions, robust data analytics, and advanced cybersecurity.",
      features: ["Regulatory Compliance", "Advanced Security", "Data Analytics", "Custom Solutions"],
      icon: DollarSign,
      accent: "border-primary"
    },
    {
      title: "Healthcare & Medical",
      description: "Build secure, compliant, and patient-centric systems for electronic health records, telemedicine, and optimized patient care management.",
      features: ["HIPAA Compliance", "Telemedicine", "Patient Records", "Care Management"],
      icon: Heart,
      accent: "border-accent"
    },
    {
      title: "Education & E-Learning",
      description: "Create engaging e-learning platforms, robust student management systems, and innovative educational tools for the modern academic landscape.",
      features: ["Learning Platforms", "Student Management", "Educational Tools", "Modern Solutions"],
      icon: GraduationCap,
      accent: "border-primary"
    }
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Every{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Sector
            </span>{" "}
            Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We serve a diverse array of industries with tailored IT solutions that yield profound success, 
            delivering impactful and relevant results across every sector.
          </p>
        </div>

        {/* Featured Industries */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredIndustries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card 
                key={industry.title}
                className={`group hover:shadow-creative transition-all duration-300 hover:-translate-y-2 border-2 ${industry.accent} bg-card/50 backdrop-blur-sm`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-primary">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold">{industry.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{industry.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* All Industries Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            Industries We <span className="bg-gradient-primary bg-clip-text text-transparent">Serve</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card 
                  key={industry.name}
                  className="group hover:shadow-creative transition-all duration-300 hover:-translate-y-1 border-2 border-primary/20 hover:border-primary/40 text-center"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-4">
                    <div className="p-3 rounded-xl bg-gradient-primary mx-auto w-fit mb-3 group-hover:animate-float">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-sm mb-2">{industry.name}</h4>
                    <p className="text-xs text-muted-foreground leading-tight">{industry.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why We're Your Ideal Partner */}
        <div className="text-center">
          <div className="p-8 rounded-2xl bg-gradient-primary shadow-glow">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Why Wecoden is Your Ideal Industry Partner
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-3xl mx-auto leading-relaxed">
              Our profound industry knowledge, combined with our highly versatile and adaptable IT solutions, 
              ensures we deliver demonstrable value and tangible results, regardless of your specific sector.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-primary-foreground/90">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm font-medium">Industry Expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm font-medium">Scalable Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary-foreground" />
                <span className="text-sm font-medium">Dedicated Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};