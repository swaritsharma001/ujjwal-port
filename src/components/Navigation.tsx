import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Code2 } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Throttle scroll events for better performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass backdrop-blur-xl border-b border-cyber-blue/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-3 group">
            <div className="p-2 rounded-xl bg-gradient-cyber glow-cyber group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6 text-background" />
            </div>
            <div className="font-bold text-2xl">
              <span className="gradient-text text-glow">UJJWAL </span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative px-6 py-2 font-medium text-foreground/80 hover:text-cyber-blue transition-all duration-300 group rounded-lg hover:bg-cyber-blue/10"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-cyber group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="lg" 
              className="bg-gradient-cyber hover:scale-105 transition-all duration-300 glow-cyber font-semibold px-8 py-3 text-background"
            >
              Hire Me
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <Button
            variant="ghost"
            size="lg"
            className="md:hidden p-3 hover:bg-cyber-blue/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 space-y-2 glass backdrop-blur-xl border-t border-cyber-blue/20 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-4 px-4 font-medium hover:text-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300 rounded-lg"
              >
                {item.label}
              </button>
            ))}
            <Button 
              size="lg" 
              className="w-full bg-gradient-cyber mt-6 py-4 text-background font-semibold"
            >
              Hire Me
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;