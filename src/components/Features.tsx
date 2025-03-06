
import { Brain, Trophy, Users, Heart, Calendar, MessageSquare } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master Your Journey with Our Smart Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines advanced AI, personalized learning paths, and community support 
            to help you achieve your full potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger">
          <FeatureCard 
            icon={Brain}
            title="AI-Powered Learning"
            description="Smart course recommendations and real-time chatbot support that adapts to your unique learning style."
            color="lavender"
          />
          
          <FeatureCard 
            icon={Heart}
            title="Mental Wellbeing Tools"
            description="Meditation, stress detection, and mindfulness exercises to keep your mind balanced and focused."
            color="mint"
          />
          
          <FeatureCard 
            icon={Users}
            title="Community Connection"
            description="Connect with mentors, join study groups, and participate in inspiring meetups and webinars."
            color="peach"
          />
          
          <FeatureCard 
            icon={Trophy}
            title="Gamified Progress"
            description="Earn points, badges, and climb leaderboards as you complete challenges and build consistency."
            color="sky"
          />
          
          <FeatureCard 
            icon={Calendar}
            title="Structured Growth Path"
            description="Daily and weekly challenges that progress from basic to advanced, tailored to your personal goals."
            color="cream"
          />
          
          <FeatureCard 
            icon={MessageSquare}
            title="Supportive Conversations"
            description="Public speaking opportunities and Q&A sessions to build confidence and communication skills."
            color="lavender"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
