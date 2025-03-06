
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-mindflow-lavender/20 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <a href="/" className="flex items-center gap-2 text-xl font-medium mb-4">
              <span className="bg-primary h-8 w-8 rounded-lg flex items-center justify-center text-white font-semibold">M</span>
              <span className="text-foreground">Mindflow</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6">
              Empowering students with personalized strategies to enhance their growth mindset, 
              productivity, and overall learning experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Meditation Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Productivity Tips</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Community Events</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Webinars</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:contact@mindflow.com" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@mindflow.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-1" />
                <span className="text-muted-foreground">
                  123 Productivity Lane<br />
                  Mindfulness City, MC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Mindflow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
