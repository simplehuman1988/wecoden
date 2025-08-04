import { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ServiceFormProps {
  serviceType: string;
  onClose: () => void;
}

export const ServiceForm = ({ serviceType, onClose }: ServiceFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectDetails: "",
    budget: "",
    timeline: "",
    employees: "",
  });

  const serviceNames = {
    "remote-tos": "Remote Total Outsourcing Service",
    "segmented-amc": "Segmented AMC Services",
    "custom-development": "Custom Application Development"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare email content
    const emailSubject = `${serviceNames[serviceType as keyof typeof serviceNames]} - Quote Request`;
    const emailBody = `
Service: ${serviceNames[serviceType as keyof typeof serviceNames]}

Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Number of Employees: ${formData.employees}

Project Details:
${formData.projectDetails}

Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

Sent from Wecoden website contact form.
    `;

    // Create mailto link
    const mailtoLink = `mailto:meet@wecoden.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto border-2 border-primary/20 shadow-creative">
        <CardHeader className="border-b border-primary/10">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">
              Request Quote: {serviceNames[serviceType as keyof typeof serviceNames]}
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
                <Label htmlFor="employees">Number of Employees</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, employees: value })}>
                  <SelectTrigger className="border-2 border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="200+">200+ employees</SelectItem>
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
                    <SelectItem value="under-50k">Under R50,000</SelectItem>
                    <SelectItem value="50k-100k">R50,000 - R100,000</SelectItem>
                    <SelectItem value="100k-500k">R100,000 - R500,000</SelectItem>
                    <SelectItem value="500k+">R500,000+</SelectItem>
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
                  <SelectItem value="urgent">ASAP (1-2 weeks)</SelectItem>
                  <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                  <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                  <SelectItem value="long">Long-term (6+ months)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="projectDetails">Project Details & Requirements *</Label>
              <Textarea
                id="projectDetails"
                required
                rows={4}
                placeholder="Please describe your IT needs, current challenges, and what you're looking to achieve..."
                value={formData.projectDetails}
                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                className="border-2 border-primary/20 focus:border-primary"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" variant="hero" className="flex-1 group">
                Send Quote Request
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