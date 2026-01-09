import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const partners = [
  'AmaliTech',
  'Jobberman',
  'GDG Accra',
  'Workspace',
  'InovTech',
  'Ghana EdTech',
  'Web Summit',
  'NPoNTU Tech',
];

export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding overflow-hidden border-y border-border bg-card/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Trusted by innovative companies
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-16 items-center shrink-0"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 group shrink-0"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover:scale-125 transition-transform" />
                <span className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
