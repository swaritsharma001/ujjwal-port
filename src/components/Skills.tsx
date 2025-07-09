import { Code, Database, Globe, Server, Smartphone, Terminal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    color: 'cyber-blue'
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Microservices'],
    color: 'cyber-green'
  },
  {
    category: 'Languages',
    icon: Code,
    technologies: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Bash'],
    color: 'cyber-purple'
  },
  {
    category: 'Database',
    icon: Database,
    technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase', 'Supabase'],
    color: 'cyber-blue'
  },
  {
    category: 'Tools',
    icon: Terminal,
    technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'npm/yarn', 'Webpack'],
    color: 'cyber-green'
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    technologies: ['React Native', 'Progressive Web Apps', 'Responsive Design'],
    color: 'cyber-purple'
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.category}
                className="glass hover-lift group cursor-pointer border-border/50 hover:border-cyber-blue/50 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-${skill.color}/20 group-hover:bg-${skill.color}/30 transition-colors`}>
                      <Icon className={`w-6 h-6 text-${skill.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {skill.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        <div className={`w-2 h-2 rounded-full bg-${skill.color}`} />
                        <span className="font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Experience level indicators */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Technologies Mastered', value: '15+' },
            { label: 'Coffee Consumed', value: '∞' }
          ].map((stat) => (
            <div key={stat.label} className="text-center glass p-6 rounded-xl hover-lift">
              <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;