import { motion, useInView } from 'framer-motion';
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
    <section ref={ref} className="py-16 overflow-hidden border-t border-border/30">
      <div className="container-custom mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-center"
        >
          Businesses & creators we've partnered with
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 items-center shrink-0 px-6"
          >
            {[...partners, ...partners].map((partner, index) => (
              <span
                key={`${partner}-${index}`}
                className="text-xl md:text-2xl font-display font-medium text-muted-foreground/50 hover:text-foreground transition-colors duration-300 whitespace-nowrap cursor-default"
              >
                {partner}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
