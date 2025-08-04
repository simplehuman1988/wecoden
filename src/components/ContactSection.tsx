import { useState } from "react";
import { Mail, Phone, Globe, Send, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "meet@wecoden.com",
      description: "Get in touch for project inquiries"
    },
    {
      icon: Globe,
      label: "Remote Operations",
      value: "India-Based Engineering",
      description: "Serving businesses globally"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "24 Hours",
      description: "We respond to all inquiries promptly"
    },
    {
      icon: MapPin,
      label: "Service Area",
      value: "Global Focus",
      description: "Specialized solutions for global market"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailSubject = `${formData.service || 'General'} Inquiry from ${formData.name}`;
    const emailBody = `
New Contact Form Submission

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}

Service of Interest: ${formData.service}

Message:
${formData.message}

Sent from Wecoden website contact form.
    `;

    const mailtoLink = `mailto:meet@wecoden.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Future Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with innovative, efficient, 
            and budget-friendly IT solutions? Get in touch with Wecoden today.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Complete our contact form below, and our team will promptly respond with a 
                tailored solution specifically designed to meet your project requirements 
                and business objectives.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={info.label}
                    className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-creative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-gradient-primary">
                          <Icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{info.label}</h4>
                          <p className="text-primary font-medium">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA */}
            <div className="p-6 rounded-xl bg-gradient-primary shadow-glow">
              <h4 className="font-bold text-primary-foreground mb-2">
                Why Choose Wecoden?
              </h4>
              <ul className="text-sm text-primary-foreground/90 space-y-1">
                <li>• Remote-first efficiency & cost savings</li>
                <li>• India-backed engineering excellence</li>
                <li>• Transparent & predictable pricing</li>
                <li>• Agile & client-centric approach</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-2 border-primary/20 shadow-creative">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border-2 border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-2 border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="border-2 border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="border-2 border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="border-2 border-primary/20 focus:border-primary">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="remote-tos">Remote Total Outsourcing</SelectItem>
                        <SelectItem value="segmented-amc">Segmented AMC Services</SelectItem>
                        <SelectItem value="custom-development">Custom Development</SelectItem>
                        <SelectItem value="branding">Branding Solutions</SelectItem>
                        <SelectItem value="experience-design">Experience Design</SelectItem>
                        <SelectItem value="technology">Technology Solutions</SelectItem>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details & Requirements *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project, specific IT needs, challenges, or any questions you may have. The more detail, the better we can assist you!"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-2 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    Send Your Message
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};