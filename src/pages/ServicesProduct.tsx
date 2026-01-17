import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Rocket, TrendingUp, Building2, Puzzle, Users } from 'lucide-react';

const CAL_LINK = 'https://cal.com/denzel-ansah-nxj6k3/30min';

const tiers = [
  {
    name: 'Tier 1',
    title: 'Launch Pad',
    subtitle: 'Fast, functional, production-ready',
    icon: Rocket,
    description: 'For startups or teams who need a working product in weeks, not months.',
    features: [
      'Product architecture & design',
      'Core feature set (web/mobile)',
      'Primary user journey built and tested',
      'Secure user authentication & roles',
      'Clean database & scalable structure',
      'Payment & notifications integration',
      'Deployment to staging + production',
      'Weekly progress updates',
    ],
    team: '2 developers + 1 PM',
    outcome: 'Launch a product that users can actually use — fast.',
    delivery: '4–6 weeks',
    highlighted: false,
  },
  {
    name: 'Tier 2',
    title: 'Scale Engine',
    subtitle: 'From functional product to full-scale system',
    icon: TrendingUp,
    description: 'Take your working product to the next level with advanced features and automation.',
    features: [
      'Everything in Launch Pad PLUS:',
      '20–30 modular features',
      'Advanced internal automations (reports, triggers, alerts)',
      'Custom analytics dashboards & admin control panel',
      'Full multi-platform performance (web, tablet, mobile)',
      'UX/UI refinement for high-conversion and retention',
      'Product iteration & testing cycles',
      '3-month post-launch support',
    ],
    team: '3–4 engineers + 1 PM + 1 AI engineer',
    outcome: 'Move from a product that works to a system that drives growth and scales operations.',
    delivery: '2–4 months',
    highlighted: true,
  },
  {
    name: 'Tier 3',
    title: 'Enterprise Ecosystem',
    subtitle: 'Mission-critical, AI-first, fully integrated',
    icon: Building2,
    description: 'Build a complete business operating system that scales across departments and regions.',
    features: [
      'Everything in Scale Engine PLUS:',
      'AI agents embedded in every module for decision-making, workflow automation, and insights',
      'Custom AI copilots for staff & operations',
      'Data pipelines & API ecosystem for enterprise-scale integration',
      'Multi-system & legacy system integration (ERP, CRM, internal tools)',
      'Enterprise-grade dashboards & reporting',
      'Automated onboarding flows & internal knowledge system',
      '6-month support & post-launch iterations',
      'Security hardening & compliance',
      'Full IP and code ownership',
    ],
    team: 'Full XAVS Labs squad — senior devs, AI architect, product PM, UI/UX engineers',
    outcome: 'A business operating system, capable of scaling across departments, regions, and workflows.',
    delivery: '4–6 months+',
    highlighted: false,
  },
];

const addOns = [
  'Custom AI agents',
  'Advanced analytics modules',
  'Mobile-native applications',
  'Cloud infrastructure & migration',
  'Performance scaling & stress testing',
  'Enterprise security audits',
];

const retainerModels = [
  {
    icon: TrendingUp,
    title: 'Product Growth Retainer',
    description: 'Monthly feature updates, UX improvements, AI optimizations',
  },
  {
    icon: Users,
    title: 'Engineering Retainer',
    description: 'Dedicated devs embedded in your team for ongoing scaling',
  },
];

export default function ServicesProduct() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="section-padding text-center bg-card/10 border-b border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Option B
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Build a <span className="gradient-text">Product</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From idea to production-grade software. We build products that solve real problems and scale with your business.
          </p>
        </motion.div>
      </section>

      {/* Tiers */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Choose Your Build Tier
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each tier is designed for a different stage of your product journey. Pick the one that fits your needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col bg-card rounded-3xl border ${
                    tier.highlighted ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'
                  } p-8 hover:shadow-xl transition-shadow`}
                >
                  {tier.highlighted && (
                    <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{tier.name}</p>
                      <h3 className="text-xl font-bold">{tier.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{tier.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                  <ul className="flex-1 space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-2 ${feature.includes('PLUS') ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                        {!feature.includes('PLUS') && <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />}
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-secondary/50 rounded-xl p-4 mb-4">
                    <p className="text-sm font-semibold mb-1">Dedicated Team</p>
                    <p className="text-sm text-muted-foreground">{tier.team}</p>
                  </div>

                  <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                    <p className="text-sm font-semibold mb-1">Outcome</p>
                    <p className="text-sm text-muted-foreground">{tier.outcome}</p>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-muted-foreground">Estimated Delivery</span>
                    <span className="font-semibold">{tier.delivery}</span>
                  </div>

                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                      Book a Call
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-card/10 border-t border-border">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Optional</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Extensions & Add-Ons
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your product with additional capabilities.
            </p>
          </motion.div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {addOns.map((addon) => (
                <div key={addon} className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                  <Puzzle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{addon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Retainer Models */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Post-Launch</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Retention & Partnership Models
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continue growing your product with ongoing support and development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {retainerModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold">{model.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{model.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button variant="hero" size="xl" asChild>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                Book a Call →
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
