import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We will get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: "12th Km, SF No.:809/1A, Palakkad Main Road, Madukkarai, Coimbatore 641 105. Tamil Nadu, India."
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+91 9585528255"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "a.n.dvalves@gmail.com | andmercury.enquiry@gmail.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-#0a2348">
      {/* Hero Section */}
      <section className="bg-#0a2348 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-red-500">Contact Us</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Get in touch with our experts for all your valve and pipe requirements
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-red-500 mb-6">Send us a Message</h2>
              <div className="bg-white/10 border border-white/20 rounded-xl shadow-2xl p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Name *</label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Email *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Phone</label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Company</label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us about your requirements..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-mercury-blue hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-red-500 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-#0a2348 rounded-xl p-6 shadow-lg border border-white/10">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-mercury-blue rounded-full flex items-center justify-center flex-shrink-0 text-white">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">{info.title}</h3>
                        <p className="text-white whitespace-pre-line">{info.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-500 mb-4">Find Us</h2>
            <p className="text-white">Visit our manufacturing facility and office</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="aspect-[3/1] bg-white/10 rounded-lg flex items-center justify-center h-32">
              <p className="text-white">Map integration would be implemented here</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 w-full text-white">
            <div className="text-lg font-bold mb-2 md:mb-0">A.N.D Valves and Castings Pvt. Ltd.</div>
            <div className="text-sm">© 2024 A.N.D Valves & Casting India Pvt. Ltd. All Right Reserved</div>
            <div className="text-sm md:text-right">Brand Management: <span className="text-mercury-orange">Privacy weave</span></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
