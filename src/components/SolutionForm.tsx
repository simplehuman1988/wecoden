import { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface SolutionFormProps {
  solutionType: string;
  onClose: () => void;
}

export const SolutionForm = ({ solutionType, onClose }: SolutionFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectDetails: "",
    budget: "",
    timeline: "",
    industry: "",
    services: [] as string[],
  });

  const solutionNames = {
    "branding": "Branding Solutions",
    "experience-design": "Experience Design Solutions",
    "technology": "Technology Solutions",
    "digital-marketing": "Digital Marketing Solutions"
  };

  const serviceOptions = {
    branding: [
      "Brand Strategy & Consulting",
      "Logo Design",
      "Industrial/Product Design",
      "Graphic Design",
      "2D/3D Visualization"
    ],
    "experience-design": [
      "UI/UX Design",
      "Website Design",
      "Mobile Experience",
      "eCommerce Optimization",
      "HMI Design"
    ],
    technology: [
      "AI & Machine Learning",
      "DevOps Consulting",
      "Data Analytics",
      "Web Development",
      "Mobile App Development",
      "Cloud Services",
      "Cybersecurity"
    ],
    "digital-marketing": [
      "SEO Optimization",
      "Social Media Management",
      "PPC/Paid Advertising",
      "Content Marketing",
      "Marketing Automation",
      "Analytics & Reporting"
    ]
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, services: [...formData.services, service] });
    } else {
      setFormData({ ...formData, services: formData.services.filter(s => s !== service) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailSubject = `${solutionNames[solutionType as keyof typeof solutionNames]} - Project Inquiry`;
    const emailBody = `
Solution: ${solutionNames[solutionType as keyof typeof solutionNames]}

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Industry: ${formData.industry}

Selected Services:
${formData.services.map(service => `• ${service}`).join('\n')}

Project Details:
${formData.projectDetails}

Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

Sent from Wecoden website solutions form.
    `;

    const mailtoLink = `mailto:meet@wecoden.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto border-2 border-primary/20 shadow-creative">
        <CardHeader className="border-b border-primary/10">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">
              {solutionNames[solutionType as keyof typeof solutionNames]} - Project Inquiry
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
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

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                  <SelectTrigger className="border-2 border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automobile">Automobile</SelectItem>
                    <SelectItem value="beauty">Beauty & Cosmetics</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="fintech">Financial Services</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="hospitality">Hospitality</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget">Budget Range</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                  <SelectTrigger className="border-2 border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-25k">Under R25,000</SelectItem>
                    <SelectItem value="25k-50k">R25,000 - R50,000</SelectItem>
                    <SelectItem value="50k-100k">R50,000 - R100,000</SelectItem>
                    <SelectItem value="100k-250k">R100,000 - R250,000</SelectItem>
                    <SelectItem value="250k+">R250,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="timeline">Project Timeline</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                <SelectTrigger className="border-2 border-primary/20 focus:border-primary">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgent">ASAP (1-4 weeks)</SelectItem>
                  <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                  <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                  <SelectItem value="long">Long-term (6+ months)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-base font-medium mb-3 block">
                Services Required (Select all that apply)
              </Label>
              <div className="grid md:grid-cols-2 gap-3">
                {serviceOptions[solutionType as keyof typeof serviceOptions]?.map((service) => (
                  <div key={service} className="flex items-center space-x-2 p-3 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                    <Checkbox
                      id={service}
                      checked={formData.services.includes(service)}
                      onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                    />
                    <Label htmlFor={service} className="text-sm cursor-pointer flex-1">
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="projectDetails">Project Details & Goals *</Label>
              <Textarea
                id="projectDetails"
                required
                rows={4}
                placeholder="Please describe your project goals, target audience, current challenges, and what success looks like for your business..."
                value={formData.projectDetails}
                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" variant="hero" className="flex-1 group">
                Send Project Inquiry
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};