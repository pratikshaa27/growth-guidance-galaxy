
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: 'lavender' | 'mint' | 'peach' | 'sky' | 'cream';
  className?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color = 'lavender',
  className 
}: FeatureCardProps) => {
  const colorClasses = {
    lavender: 'bg-mindflow-lavender/30 border-mindflow-lavender',
    mint: 'bg-mindflow-mint/30 border-mindflow-mint',
    peach: 'bg-mindflow-peach/30 border-mindflow-peach',
    sky: 'bg-mindflow-sky/30 border-mindflow-sky',
    cream: 'bg-mindflow-cream/30 border-mindflow-cream',
  };

  return (
    <div 
      className={cn(
        'group glass-card p-6 transition-all duration-500 hover:shadow-lg',
        'flex flex-col items-start opacity-90 hover:opacity-100',
        colorClasses[color],
        className
      )}
    >
      <div className={cn(
        'rounded-full p-3 mb-5 transition-all duration-300 group-hover:scale-110',
        color === 'lavender' && 'bg-mindflow-lavender text-primary',
        color === 'mint' && 'bg-mindflow-mint text-green-600',
        color === 'peach' && 'bg-mindflow-peach text-orange-600',
        color === 'sky' && 'bg-mindflow-sky text-blue-600',
        color === 'cream' && 'bg-mindflow-cream text-yellow-600',
      )}>
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
