import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Bot, Cog, Shield, Zap, RefreshCw } from 'lucide-react';

const CAL_LINK = 'https://cal.com/denzel-ansah-nxj6k3/30min';

const tiers = [
  {
    name: 'Tier 1',
    title: 'Assistive AI',
    subtitle: 'Customer-Facing Intelligence',
    icon: Bot,
    features: [
      'AI trained on your documents',
      'Works on WhatsApp, Instagram & website',
      'Answers customer questions 24/7',
      'Understands intent (not just keywords)',
      'Captures leads automatically',
      'Books appointments',
      'Hands over hot leads to your team',
    ],
    outcome: 'Your business never misses a customer again.',
    delivery: '2–4 weeks',
    highlighted: false,
  },
  {
    name: 'Tier 2',
    title: 'Operations AI',
    subtitle: 'Work Automation',
    icon: Cog,
    features: [
      'Everything in Tier 1 PLUS:',
      'AI updates your CRM',
      'Generates payment links',
      'Confirms payments',
      'Assigns tasks to staff',
      'Checks inventory & availability',
      'Auto-generates reports',
      'Order routing',
      'Internal admin dashboard',
    ],
    outcome: '2–3 production AI agents working together.',
    delivery: '4–8 weeks',
    highlighted: true,
  },
  {
    name: 'Tier 3',
    title: 'Autonomous System',
    subtitle: 'Business Control Layer',
    icon: Shield,
    features: [
      'Everything in Tier 2 PLUS:',
      'Multi-agent workflows',
      'Predictive analytics',
      'Fraud detection',
      'Executive dashboards',
      'Weekly AI reports',
      'Custom integrations',
      'Private deployment',
      'Security hardening',
    ],
    outcome: 'AI system that runs core operations.',
    delivery: '2–4 months',
    highlighted: false,
  },
];

const customAgentExamples = [
  'Content posting agent',
  'HR onboarding agent',
  'Invoice follow-up agent',
  'Social media scheduler',
  'Recruitment screener',
  'Vendor negotiation agent',
  'Compliance checker',
];

const retainerModels = [
  {
    icon: RefreshCw,
    title: 'AI Maintenance Retainer',
    features: ['Monitoring', 'Bug fixes', 'Model updates', 'Performance tuning'],
    period: 'Monthly',
  },
  {
    icon: Zap,
    title: 'AI Expansion Retainer',
    features: ['New agents', 'New automations', 'Workflow upgrades'],
    period: 'Monthly',
  },
  {
    icon: Shield,
    title: 'AI Operations Retainer',
    features: ['Dedicated engineer', 'Priority support', 'Continuous optimization'],
    period: 'Monthly',
  },
];

export default function ServicesAI() {
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
            Option A
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Power Your Business with <span className="gradient-text">AI</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Intelligent automation, predictive analytics, and AI-driven solutions that make your business faster, safer, and more profitable.
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
              Choose Your AI Tier
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each tier builds on the previous, giving you progressively more automation and intelligence.
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

                  <p className="text-sm text-muted-foreground mb-6">{tier.subtitle}</p>

                  <ul className="flex-1 space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-2 ${feature.includes('PLUS') ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                        {!feature.includes('PLUS') && <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />}
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                    <p className="text-sm font-semibold mb-1">Outcome</p>
                    <p className="text-sm text-muted-foreground">{tier.outcome}</p>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-muted-foreground">Delivery</span>
                    <span className="font-semibold">{tier.delivery}</span>
                  </div>

                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                      Book Strategy Call
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom AI Agent Add-on */}
      <section className="section-padding bg-card/10 border-t border-border">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Add-On</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Custom AI Agent
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Design your own AI agent. This works for ANY tier.
            </p>
          </motion.div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-bold mb-4">Example Agents:</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {customAgentExamples.map((example) => (
                <div key={example} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm">{example}</span>
                </div>
              ))}
            </div>

            <div className="bg-secondary/50 rounded-xl p-6 mb-6">
              <h4 className="font-bold mb-3">How it works:</h4>
              <ol className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-primary">1.</span> You describe the role
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">2.</span> We design it
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">3.</span> We deploy it
                </li>
              </ol>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Delivery</p>
                <p className="font-bold">7–14 days per agent</p>
              </div>
              <Button variant="hero" size="lg" asChild>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                  Book Strategy Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Retainer Models */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Post-Launch</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Retainer Models
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              After deployment, clients can choose ongoing support options.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
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
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-4">{model.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground">{model.period}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button variant="hero" size="xl" asChild>
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer">
                Book Strategy Call →
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
