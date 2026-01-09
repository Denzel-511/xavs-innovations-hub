import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Palette, Code, TestTube, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We dive deep into your business, understand your challenges, and identify opportunities for growth.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Our team crafts elegant solutions with user-centric design that drives results.',
  },
  {
    icon: Code,
    title: 'Build',
    description: 'We develop robust, scalable products using cutting-edge technology and best practices.',
  },
  {
    icon: TestTube,
    title: 'Test',
    description: 'Rigorous testing ensures your product is secure, reliable, and ready for launch.',
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We deploy your solution and provide ongoing support to ensure continued success.',
  },
];

export function HowWeWorkSection() {
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
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Our Process</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers results, from concept to launch and beyond.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent -translate-y-1/2 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="relative group"
                >
                  <div className="text-center">
                    {/* Step number */}
                    <div className="relative z-10 mx-auto mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-card border-2 border-border group-hover:border-primary flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.5)] mx-auto">
                        <Icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
