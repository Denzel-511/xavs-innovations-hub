import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Zap, Crown, Check } from 'lucide-react';

const tiers = [
  {
    name: 'Custom Design',
    price: 'From $5,000',
    description: 'Bespoke visual identity and brand design for emerging businesses.',
    icon: Star,
    features: [
      'Full brand identity design',
      'Logo & visual system',
      'Brand guidelines document',
      'Social media kit',
      '2 revision rounds',
    ],
    popular: false,
  },
  {
    name: 'Product Build',
    price: 'From $15,000',
    description: 'Complete product development from concept to launch.',
    icon: Zap,
    features: [
      'Full discovery & strategy',
      'UI/UX design',
      'Development & testing',
      'Launch support',
      'Post-launch maintenance (1 month)',
    ],
    popular: true,
  },
  {
    name: 'Enterprise Solution',
    price: 'Custom Quote',
    description: 'Large-scale digital transformation and enterprise systems.',
    icon: Crown,
    features: [
      'Complete digital strategy',
      'Custom architecture',
      'Dedicated team',
      'SLA & 24/7 support',
      'Ongoing partnership',
    ],
    popular: false,
  },
];

const XPrint = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <p className="text-sm uppercase tracking-widest text-primary mb-4">XPrint</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                High-Ticket <span className="gradient-text">Custom Work</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Premium, bespoke solutions for businesses that demand excellence. Our XPrint services deliver transformative results with dedicated attention.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="section-padding bg-card/30 border-y border-border">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => {
                const Icon = tier.icon;
                return (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative"
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-semibold text-primary-foreground">
                        Most Popular
                      </div>
                    )}
                    <div
                      className={`relative h-full rounded-3xl border p-8 transition-all duration-500 ${
                        tier.popular
                          ? 'border-primary bg-primary/5 shadow-[0_0_60px_-15px_hsl(var(--primary)/0.4)]'
                          : 'border-border bg-card hover:border-primary/50'
                      }`}
                    >
                      <div className="mb-6">
                        <div
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                            tier.popular
                              ? 'bg-gradient-to-r from-primary to-accent'
                              : 'bg-secondary'
                          }`}
                        >
                          <Icon
                            className={`w-7 h-7 ${
                              tier.popular ? 'text-primary-foreground' : 'text-muted-foreground'
                            }`}
                          />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
                        <p className="text-3xl font-display font-bold gradient-text mb-2">
                          {tier.price}
                        </p>
                        <p className="text-sm text-muted-foreground">{tier.description}</p>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-sm">
                            <Check className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant={tier.popular ? 'gradient' : 'outline-glow'}
                        className="w-full"
                        asChild
                      >
                        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                          Request Quote
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Build Something <span className="gradient-text">Exceptional</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your vision and create a tailored solution that exceeds expectations.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Schedule a Consultation
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default XPrint;
