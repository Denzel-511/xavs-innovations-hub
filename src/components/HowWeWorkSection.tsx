import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { number: '01', title: 'Discover', description: 'Deep dive into your business challenges' },
  { number: '02', title: 'Design', description: 'Craft elegant, user-centric solutions' },
  { number: '03', title: 'Build', description: 'Develop robust, scalable products' },
  { number: '04', title: 'Test', description: 'Rigorous QA and security testing' },
  { number: '05', title: 'Launch', description: 'Deploy and provide ongoing support' },
];

export function HowWeWorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding border-t border-border/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Our Process
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            How We Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-display font-bold text-muted-foreground/20 group-hover:text-primary/40 transition-colors duration-500">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
