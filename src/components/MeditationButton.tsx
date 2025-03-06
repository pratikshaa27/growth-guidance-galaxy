
import { useState, useEffect } from 'react';
import { Meditation } from 'lucide-react';
import { cn } from '@/lib/utils';

const MeditationButton = () => {
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathCount, setBreathCount] = useState(0);
  const [animationState, setAnimationState] = useState<'inhale' | 'hold' | 'exhale' | 'rest'>('rest');

  const startBreathing = () => {
    if (isBreathing) return;
    
    setIsBreathing(true);
    setBreathCount(0);
    setAnimationState('inhale');
  };

  const stopBreathing = () => {
    setIsBreathing(false);
    setAnimationState('rest');
  };

  useEffect(() => {
    if (!isBreathing) return;
    
    let timer: number;
    
    if (animationState === 'inhale') {
      timer = window.setTimeout(() => {
        setAnimationState('hold');
      }, 4000); // 4 seconds inhale
    } else if (animationState === 'hold') {
      timer = window.setTimeout(() => {
        setAnimationState('exhale');
      }, 7000); // 7 seconds hold
    } else if (animationState === 'exhale') {
      timer = window.setTimeout(() => {
        const newCount = breathCount + 1;
        setBreathCount(newCount);
        
        if (newCount >= 3) { // Stop after 3 breaths for demo
          stopBreathing();
        } else {
          setAnimationState('inhale');
        }
      }, 8000); // 8 seconds exhale
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isBreathing, animationState, breathCount]);

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={isBreathing ? stopBreathing : startBreathing}
        className={cn(
          "relative w-64 h-64 rounded-full overflow-hidden transition-all duration-500 ease-in-out group",
          "bg-gradient-to-br from-mindflow-lavender/90 to-mindflow-sky/70 hover:from-mindflow-lavender hover:to-mindflow-sky",
          "flex items-center justify-center shadow-xl",
          isBreathing && "scale-105",
          animationState === 'inhale' && "animate-scale-in",
          animationState === 'exhale' && "animate-scale-out"
        )}
        aria-label="Start meditation"
      >
        <div className={cn(
          "absolute inset-4 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center",
          "transition-all duration-500",
          animationState === 'inhale' && "scale-90",
          animationState === 'exhale' && "scale-110",
        )}>
          <div className={cn(
            "absolute w-full h-full rounded-full border-4 border-white/30",
            "transition-all duration-[4000ms]",
            animationState === 'inhale' && "scale-110 opacity-0"
          )} />
        </div>
        
        <div className="relative z-10 text-center">
          <Meditation size={48} className="mx-auto text-white mb-2" />
          <span className="text-white font-medium text-xl tracking-wide block">
            {isBreathing 
              ? animationState === 'inhale'
                ? "Inhale..."
                : animationState === 'hold'
                  ? "Hold..."
                  : "Exhale..."
              : "Begin Meditation"
            }
          </span>
          {isBreathing && (
            <span className="text-white/80 text-sm block mt-1">
              {breathCount}/3 breaths
            </span>
          )}
        </div>
        
        <div className={cn(
          "absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity",
          isBreathing && "opacity-0"
        )} />
      </button>
      
      {isBreathing && (
        <div className="mt-6 text-center animate-fade-in">
          <p className="text-primary/80 font-medium">
            {animationState === 'inhale' 
              ? "Breathe in deeply through your nose" 
              : animationState === 'hold' 
                ? "Hold your breath gently" 
                : "Exhale slowly through your mouth"
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default MeditationButton;
