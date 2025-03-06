import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-medium">
          <span className="bg-primary h-8 w-8 rounded-lg flex items-center justify-center text-white font-semibold">M</span>
          <span className={cn("transition-colors duration-300", scrolled ? "text-primary" : "text-foreground")}>Mindflow</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="nav-link text-muted-foreground hover:text-foreground">Features</a>
          <a href="#testimonials" className="nav-link text-muted-foreground hover:text-foreground">Testimonials</a>
          <a href="#about" className="nav-link text-muted-foreground hover:text-foreground">About</a>
          <a href="#contact" className="nav-link text-muted-foreground hover:text-foreground">Contact</a>
          
          {/* Auth Buttons */}
          <div className="flex items-center gap-3 ml-2">
            <Button
              variant="outline"
              className="px-5 py-2 border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 rounded-full transition-all"
              asChild
            >
              <Link to="/sign-in">Sign In</Link>
            </Button>
            <Button
              className="px-5 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
              asChild
            >
              <Link to="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-slide-in">
          <nav className="flex flex-col p-5 space-y-4">
            <a href="#features" className="text-foreground py-2 px-4 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#testimonials" className="text-foreground py-2 px-4 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#about" className="text-foreground py-2 px-4 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" className="text-foreground py-2 px-4 hover:bg-muted rounded-md" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            
            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                className="w-full py-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
                asChild
              >
                <Link to="/sign-in">Sign In</Link>
              </Button>
              <Button
                className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                onClick={() => setMobileMenuOpen(false)}
                asChild
              >
                <Link to="/sign-up">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
