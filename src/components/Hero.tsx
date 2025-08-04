import { ArrowRight, Code, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="p-2 rounded-xl bg-gradient-primary">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Wecoden Tech Hub
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Powering Global<br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Businesses
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Innovative & Affordable IT Solutions
          </p>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-foreground">
            <span className="text-primary">Innovate.</span>{" "}
            <span className="text-accent">Integrate.</span>{" "}
            <span className="text-primary">Ignite.</span>
            {" "}– Your Partner in Digital Transformation
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Get Free Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              View Our Services
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>Remote-First Efficiency</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-accent" />
              <span>India-Backed Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              <span>Transparent Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};