import { useState } from "react";
import { Palette, MousePointer, Cpu, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SolutionForm } from "./SolutionForm";

export const SolutionsSection = () => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  const solutions = [
    {
      id: "branding",
      title: "Branding",
      subtitle: "Craft a Brand That Commands Attention",
      description: "Create a cohesive, memorable identity that resonates with your target audience in the global marketplace.",
      icon: Palette,
      features: [
        "Brand Consulting & Strategy",
        "Iconic Logo Design", 
        "Industrial/Product Design",
        "Compelling Graphic Design",
        "Immersive 2D/3D Visualization"
      ],
      accent: "border-accent",
      gradient: "from-primary to-accent",
    },
    {
      id: "experience-design",
      title: "Experience Design",
      subtitle: "Digital Experiences That Delight & Convert",
      description: "Engineer seamless, intuitive experiences that foster user loyalty and drive conversions.",
      icon: MousePointer,
      features: [
        "Intuitive UI/UX Design",
        "Stunning Website Design",
        "Mobile Experience Design",
        "Optimized Commerce Experience",
        "Advanced HMI Design"
      ],
      accent: "border-accent",
      gradient: "from-accent to-primary",
    },
    {
      id: "technology",
      title: "Technology",
      subtitle: "Power Your Business with Innovation",
      description: "Leverage cutting-edge technology to build robust, scalable systems that drive growth.",
      icon: Cpu,
      features: [
        "AI & Machine Learning",
        "DevOps Implementation",
        "Data & Analytics Solutions",
        "Web & Mobile Development",
        "Cloud & Cybersecurity"
      ],
      accent: "border-primary",
      gradient: "from-primary to-accent",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      subtitle: "Grow Your Reach, Amplify Your Impact",
      description: "Strategic digital marketing solutions designed to reach, engage, and convert your target audience.",
      icon: TrendingUp,
      features: [
        "Search Engine Optimization",
        "Social Media Management",
        "Performance Marketing (PPC)",
        "Content Marketing",
        "Marketing Automation"
      ],
      accent: "border-accent",
      gradient: "from-accent to-primary",
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Global Brand
            </span>{" "}
            with Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions that transform your business by synergizing creativity, 
            cutting-edge technology, and strategic foresight.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card 
                key={solution.id}
                className={`group hover:shadow-creative transition-all duration-500 hover:-translate-y-3 border-2 ${solution.accent} bg-card/50 backdrop-blur-sm overflow-hidden relative`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-5 transition-opacity group-hover:opacity-10`}></div>
                
                <CardHeader className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${solution.gradient} shadow-glow`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{solution.title}</CardTitle>
                      <p className="text-lg font-medium text-primary">{solution.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={feature} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={() => setSelectedSolution(solution.id)}
                  >
                    Get Started with {solution.title}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="p-8 rounded-2xl bg-gradient-primary shadow-glow">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Let's discuss how our comprehensive solutions can elevate your market presence 
              and optimize your business performance.
            </p>
            <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Schedule Free Consultation
            </Button>
          </div>
        </div>

        {/* Solution Form Modal */}
        {selectedSolution && (
          <SolutionForm 
            solutionType={selectedSolution}
            onClose={() => setSelectedSolution(null)}
          />
        )}
      </div>
    </section>
  );
};