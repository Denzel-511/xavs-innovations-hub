import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const options = [
  {
    icon: Brain,
    title: 'Power Your Business with AI',
    description:
      'Integrate intelligent automation, predictive analytics, and AI-driven solutions to enhance efficiency and decision-making.',
    features: ['AI Automation', 'Predictive Analytics', 'Smart Workflows', 'Data Intelligence'],
    href: '/services/ai',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Wrench,
    title: 'Build a Product',
    description:
      'From MVP to enterprise-grade applications, we build custom software products that solve real problems and scale with you.',
    features: ['Custom Development', 'MVP Building', 'SaaS Platforms', 'Mobile Apps'],
    href: '/services/product',
    gradient: 'from-accent to-primary',
  },
];

export function ChoosePathSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="choose-path" className="section-padding scroll-mt-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Get Started</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Choose How to{' '}
            <span className="gradient-text">Improve Your Business</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the path that best fits your needs. We'll guide you through the rest.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_80px_-20px_hsl(var(--primary)/0.3)] h-full">
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {option.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground border border-border"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="outline-glow" className="group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
