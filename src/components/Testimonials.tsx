
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Mindflow completely transformed my study habits. The personalized recommendations and mindfulness tools helped me overcome my anxiety and improve my productivity.",
    author: "Sarah Johnson",
    role: "Graduate Student"
  },
  {
    id: 2,
    content: "The community aspect of Mindflow is incredible. I've connected with mentors who have guided me through challenging courses and built lasting friendships.",
    author: "Alex Chen",
    role: "Computer Science Major"
  },
  {
    id: 3,
    content: "As someone who used to struggle with public speaking, the confidence-building exercises have been life-changing. I'm now leading webinars for my study group!",
    author: "Michael Rodriguez",
    role: "Business Student"
  },
  {
    id: 4,
    content: "The gamification elements keep me motivated to complete daily challenges. Watching my progress on the dashboard is incredibly satisfying.",
    author: "Emily Wilson",
    role: "Psychology Student"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-6 bg-mindflow-lavender/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who have transformed their learning experience with Mindflow.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="relative min-h-[300px] p-8 md:p-12">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={cn(
                    "absolute inset-0 p-8 md:p-12 flex flex-col justify-center transition-all duration-500 ease-in-out",
                    index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                  )}
                >
                  <blockquote className="text-lg md:text-xl italic mb-6 text-foreground leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="mt-auto">
                    <div className="font-medium text-primary">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-primary scale-125" 
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
