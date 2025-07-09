import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url: string;
        style?: React.CSSProperties;
        className?: string;
        children?: React.ReactNode;
      };
    }
  }
}

const Hero = () => {
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Preload Spline viewer script with higher priority
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.24/build/spline-viewer.js';
    script.async = true;
    script.setAttribute('fetchpriority', 'high');
    
    // Add script to head if not already present
    if (!document.querySelector('script[src*="spline-viewer"]')) {
      document.head.appendChild(script);
    }

    return () => {
      // Don't remove script on unmount to avoid re-loading
    };
  }, []);

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border-r border-b border-cyber-blue/10 animate-pulse"
              style={{
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-block">
        
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block">I'm a</span>
              <span className="gradient-text text-glow">Full Stack</span>
              <span className="block">Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Crafting digital experiences with modern technologies. 
              Passionate about clean code, innovative solutions, and bringing ideas to life.
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-3">
            {['JavaScript', 'React', 'Node.js', 'Tailwind', 'HTML/CSS', 'Next.js'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-full text-sm font-medium hover-lift pulse-glow"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons 
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-cyber hover:scale-105 transition-transform glow-cyber font-semibold"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass border-cyber-blue/50 hover:border-cyber-blue hover-lift"
            >
              Get In Touch
            </Button>
          </div>
        </div>
*/}
        {/* Optimized 3D Model */}
        <div className="relative">
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
            {/* Loading placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm rounded-2xl">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border-4 border-cyber-blue border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-cyber-blue font-mono">Loading 3D Model...</p>
              </div>
            </div>
            <spline-viewer 
              url="https://prod.spline.design/4auqlpJ4-RMAZX81/scene.splinecode"
              className="w-full h-full"
              style={{ 
                zIndex: 10,
                background: 'transparent'
              }}
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyber-blue rounded-full pulse-glow" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyber-green rounded-full pulse-glow animation-delay-1000" />
          <div className="absolute top-1/3 -left-6 w-4 h-4 bg-cyber-purple rounded-full pulse-glow animation-delay-2000" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={scrollToSkills}
          className="flex flex-col items-center gap-2 text-cyber-blue hover:text-cyber-blue/80"
        >
          <span className="text-sm font-mono">scroll down</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;