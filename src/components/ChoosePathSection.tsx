import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const options = [
  {
    label: 'A',
    title: 'Power Your Business with AI',
    description: 'Integrate intelligent automation, predictive analytics, and AI-driven solutions.',
    href: '/services/ai',
  },
  {
    label: 'B',
    title: 'Build a Product',
    description: 'From MVP to enterprise-grade applications that solve real problems.',
    href: '/services/product',
  },
];

export function ChoosePathSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="choose-path" className="section-padding border-t border-border/30 scroll-mt-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold max-w-3xl">
            Choose how to improve your business
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {options.map((option, index) => (
            <motion.a
              key={option.label}
              href={option.href}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm p-8 md:p-12 transition-all duration-500 hover:border-primary/50 hover:bg-card/60 min-h-[280px] flex flex-col">
                {/* Option Label */}
                <div className="flex items-center justify-between mb-auto">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Option {option.label}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-primary/20 blur-3xl" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
