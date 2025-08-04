import { Code2, Mail, Globe, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Services: [
      "Remote TOS",
      "Segmented AMCs",
      "Custom Development"
    ],
    Solutions: [
      "Branding",
      "Experience Design",
      "Technology",
      "Digital Marketing"
    ],
    Industries: [
      "Healthcare",
      "Fintech",
      "Education",
      "Manufacturing"
    ],
    Company: [
      "About Us",
      "Why Choose Us",
      "Careers",
      "Contact"
    ]
  };

  return (
    <footer className="bg-gradient-dark border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-primary">
                  <Code2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Wecoden Tech Hub
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Powering Businesses Worldwide with Innovative & Affordable IT Solutions. 
                Your partner in digital transformation with India-backed engineering excellence.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">meet@wecoden.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Globe className="w-4 h-4 text-accent" />
                  <span className="text-muted-foreground">Remote-First Operations</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-foreground mb-3">Our Mission</h4>
                <p className="text-sm text-muted-foreground italic">
                  "Innovate. Integrate. Ignite." – Making advanced technology accessible 
                  to businesses worldwide.
                </p>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-foreground mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>© 2024 Wecoden Tech Hub. All rights reserved.</p>
              <p className="mt-1">
                Built with passion in India, serving businesses globally.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-primary opacity-50"></div>
      </div>
    </footer>
  );
};