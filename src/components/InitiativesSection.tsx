import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const initiatives = [
  {
    name: 'Lontra',
    description: 'AI-powered analytics platform for data-driven insights.',
    status: 'Active',
    href: '#',
  },
  {
    name: 'BrickLabs',
    description: 'Innovation incubator for startups and emerging tech ventures.',
    status: 'Active',
    href: '#',
  },
  {
    name: 'Contractor Network',
    description: 'Access top-tier African tech talent for your projects.',
    status: 'Coming Soon',
    href: '#',
  },
];

export function InitiativesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="initiatives" className="section-padding border-t border-border/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Our Ventures
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            Initiatives
          </h2>
        </motion.div>

        <div className="space-y-4">
          {initiatives.map((initiative, index) => {
            const isComingSoon = initiative.status === 'Coming Soon';
            
            return (
              <motion.div
                key={initiative.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={isComingSoon ? undefined : initiative.href}
                  className={`group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border/30 transition-all duration-300 ${
                    isComingSoon ? 'cursor-default opacity-50' : 'hover:px-4 hover:bg-card/40'
                  }`}
                >
                  <div className="flex items-center gap-6 mb-4 md:mb-0">
                    <h3 className="text-3xl md:text-4xl font-display font-bold group-hover:text-primary transition-colors duration-300">
                      {initiative.name}
                    </h3>
                    {!isComingSoon && (
                      <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    )}
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-muted-foreground max-w-md">
                      {initiative.description}
                    </p>
                    <span
                      className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap ${
                        isComingSoon
                          ? 'bg-muted text-muted-foreground'
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      {initiative.status}
                    </span>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
