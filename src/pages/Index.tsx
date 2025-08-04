import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { AboutSection } from "@/components/AboutSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <ServicesSection />
        <SolutionsSection />
        <AboutSection />
        <IndustriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
