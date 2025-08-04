import { Users, Target, Shield, Globe, Code, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const values = [
    {
      icon: Code,
      title: "Innovation Without Limits",
      description: "We embrace every challenge, developing creative, meticulously tailored IT solutions that push boundaries."
    },
    {
      icon: Zap,
      title: "Budget-Friendly Excellence",
      description: "Premium-quality IT services at pricing models that make financial sense for businesses worldwide."
    },
    {
      icon: Shield,
      title: "Transparency & Trust",
      description: "Crystal-clear communication, zero hidden fees, and robust SLA-based commitments."
    },
    {
      icon: Globe,
      title: "Local Focus, Global Reach",
      description: "India-backed operations calibrated for global market dynamics and demands."
    }
  ];

  const stats = [
    { value: "60%", label: "Cost Savings", description: "Average reduction in IT operational expenses" },
    { value: "24/7", label: "Support", description: "Round-the-clock monitoring and assistance" },
    { value: "100+", label: "Projects", description: "Successfully delivered across industries" },
    { value: "99.9%", label: "Uptime", description: "Guaranteed service reliability" }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Where Global Business Meets{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              IT Excellence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Wecoden is more than just an IT service provider; we are your dedicated strategic partner 
            committed to propelling your business toward sustained success.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-6">
              Our Story: <span className="text-primary">"We Code Anything"</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Established by a collective of highly skilled IT veterans with profound cross-industry experience, 
                Wecoden was founded on the principle of making advanced, cost-effective technology accessible 
                to all businesses, regardless of size or sector.
              </p>
              <p>
                Our guiding philosophy, "We Code Anything," encapsulates our unwavering commitment to 
                tackling your most complex challenges. From strategic branding and comprehensive digital 
                marketing to custom software development and end-to-end IT outsourcing.
              </p>
              <p>
                Leveraging a remote-first operational model, powered by India's globally recognized 
                engineering talent, we deliver agile, high-quality, and cost-efficient services by 
                eliminating the prohibitive overheads associated with traditional IT providers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="text-center p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-creative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Unwavering <span className="bg-gradient-primary bg-clip-text text-transparent">Promise to You</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="group text-center hover:shadow-creative transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="p-4 rounded-2xl bg-gradient-primary mx-auto w-fit mb-4 group-hover:animate-glow-pulse">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-bold text-lg mb-3">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center">
          <div className="p-8 rounded-2xl bg-gradient-dark border-2 border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-primary">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">
                Why Choose Wecoden?
              </h3>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Selecting Wecoden as your IT partner means aligning with a team singularly dedicated 
              to your sustained growth and prosperity. Experience the perfect fusion of 
              <span className="text-primary font-semibold"> Indian engineering excellence</span> and 
              <span className="text-accent font-semibold"> global market focus</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};