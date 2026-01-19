import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import bb_logo from "../assets/partner_logos/BB_logo.png";
import kenaa_logo from "../assets/partner_logos/kenaa_logo.png";
import lyf_arena from  "../assets/partner_logos/lyf_arena_logo.png";
import strategic from "../assets/partner_logos/strategic_logo.png";
import tfs from "../assets/partner_logos/TFS_logo.png";
import vendo from "../assets/partner_logos/vendo_logo.svg";

const partners = [
  { name: 'Beyond Borders', logo: bb_logo },
  { name: 'Kenaa', logo: kenaa_logo },
  { name: 'Lyf Arena', logo: lyf_arena },
  { name: 'Strategic', logo: strategic },
  { name: 'The Fashion Shop', logo: tfs },
  { name: 'Vendo', logo: vendo },
];

export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 overflow-hidden">
      <div className="container-custom mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          Our partners
        </motion.p>
      </div>

      {/* Seamless Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="flex gap-16 items-center shrink-0 px-8"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-20 h-20 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


 export function kk() {
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
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 items-center shrink-0 px-6"
          >
            {[...partners, ...partners].map((partner, index) => (
              <img
                key={`${partner.name}-${index}`}
                src={partner.logo}
                alt={partner.name}
                className="w-16 h-16 object-contain grayscale"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
