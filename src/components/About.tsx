import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Coffee, Code2, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">About Me</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer who loves turning complex problems 
                  into simple, beautiful solutions. With expertise in modern web technologies, 
                  I build applications that are not just functional, but delightful to use.
                </p>
                <p>
                  My journey in programming started with curiosity and has evolved into 
                  a deep appreciation for clean code, user experience, and the endless 
                  possibilities that technology offers.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new frameworks, 
                  contributing to open source, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-cyber hover:scale-105 transition-transform glow-cyber"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass border-cyber-green/50 hover:border-cyber-green hover-lift"
              >
                <Coffee className="w-4 h-4 mr-2" />
                Let's Chat
              </Button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="glass hover-lift glow-neon">
              <CardContent className="p-6 text-center">
                <Code2 className="w-8 h-8 text-cyber-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable, scalable, and efficient code
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-lift glow-neon mt-8">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-cyber-green mx-auto mb-4" />
                <h3 className="font-semibold mb-2">User Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Building experiences that users love and remember
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-lift glow-neon -mt-4">
              <CardContent className="p-6 text-center">
                <Coffee className="w-8 h-8 text-cyber-purple mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Always exploring new technologies and methodologies
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-lift glow-neon">
              <CardContent className="p-6 text-center">
                <div className="w-8 h-8 rounded-full bg-gradient-cyber mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Working effectively in teams and open source communities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;