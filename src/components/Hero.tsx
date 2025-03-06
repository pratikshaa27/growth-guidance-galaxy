
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import MeditationButton from './MeditationButton';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen pt-28 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 left-1/4 w-64 h-64 rounded-full bg-mindflow-lavender/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-mindflow-sky/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-12 opacity-0 transition-all duration-1000 ease-out",
          isVisible && "opacity-100"
        )}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover Your <span className="text-primary">Potential</span> Through Mindful Productivity
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            A structured roadmap for personal growth with adaptive learning paths, 
            mental wellbeing tools, and community support to help you achieve more 
            with greater balance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="px-6 py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-md hover:shadow-lg transition-all">
              Start Your Journey
              <ArrowRight size={18} className="ml-2 animate-pulse-soft" />
            </Button>
            <Button variant="outline" className="px-6 py-6 border-2 border-primary/20 hover:border-primary/50 text-foreground hover:bg-primary/5 rounded-full shadow-sm transition-all">
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div className={cn(
          "mt-16 opacity-0 transition-all duration-1000 ease-out delay-300",
          isVisible && "opacity-100"
        )}>
          <MeditationButton />
        </div>
      </div>
    </section>
  );
};

export default Hero;
