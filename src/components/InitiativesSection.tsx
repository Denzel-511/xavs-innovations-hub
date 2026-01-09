import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Waves, Building, Users, ArrowRight } from 'lucide-react';

const initiatives = [
  {
    icon: Waves,
    name: 'Lontra',
    description: 'Our AI-powered analytics platform for businesses seeking data-driven insights.',
    status: 'Active',
    href: '#',
  },
  {
    icon: Building,
    name: 'BrickLabs',
    description: 'Innovation incubator for startups and emerging tech ventures in Africa.',
    status: 'Active',
    href: '#',
  },
  {
    icon: Users,
    name: 'Contractor Network',
    description: 'Access top-tier African tech talent for your projects and teams.',
    status: 'Coming Soon',
    href: '#',
  },
];

export function InitiativesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-card/30 border-y border-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Our Ventures</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Initiatives</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond client work, we're building ventures that shape the future of tech in Africa and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            const isComingSoon = initiative.status === 'Coming Soon';
            
            return (
              <motion.div
                key={initiative.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl border bg-card p-8 h-full transition-all duration-500 ${
                    isComingSoon
                      ? 'border-border/50 opacity-80'
                      : 'border-border hover:border-primary/50 hover:shadow-[0_0_60px_-15px_hsl(var(--primary)/0.3)]'
                  }`}
                >
                  {/* Status badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full ${
                      isComingSoon
                        ? 'bg-muted text-muted-foreground'
                        : 'bg-primary/10 text-primary border border-primary/20'
                    }`}
                  >
                    {initiative.status}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      isComingSoon
                        ? 'bg-secondary'
                        : 'bg-secondary group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent'
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 transition-colors ${
                        isComingSoon
                          ? 'text-muted-foreground'
                          : 'text-muted-foreground group-hover:text-primary-foreground'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold mb-3">{initiative.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {initiative.description}
                  </p>

                  {/* Link */}
                  {!isComingSoon && (
                    <a
                      href={initiative.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors group/link"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
