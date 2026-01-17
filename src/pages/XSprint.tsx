import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Code, CheckCircle, Check, Rocket, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const sprintSteps = [
  {
    title: 'Day 1–2: Discovery & Goal Setting',
    description: [
      'Define your challenge and success metrics',
      'Audit current workflows and systems',
    ],
    icon: Calendar,
  },
  {
    title: 'Day 3–5: Architecture & Design',
    description: [
      'Plan system architecture or AI workflow',
      'Map integrations, automation triggers, and logic flows',
      'Prepare wireframes and diagrams',
    ],
    icon: Code,
  },
  {
    title: 'Day 6–8: Build & Deploy',
    description: [
      'Implement solution (AI workflow, plugin, automation)',
      'Connect APIs and deploy in your environment',
      'Internal testing and troubleshooting',
    ],
    icon: CheckCircle,
  },
  {
    title: 'Day 9: Optimize & Train',
    description: [
      'Fine-tune performance and AI accuracy',
      'Train your team on the new system',
      'Provide guides and documentation',
    ],
    icon: Code,
  },
  {
    title: 'Day 10: Handover & Impact Report',
    description: [
      'Final QA and deployment confirmation',
      'Executive dashboard with KPIs and ROI',
      'Recommended next steps',
    ],
    icon: CheckCircle,
  },
];

const sprintWhatYouGet = [
  'One clearly scoped challenge solved',
  'Architecture, build, and live deployment',
  'Technical handover and documentation',
  'Optional add-ons available',
];

const sprintWhoShouldUse = [
  'Startups needing fast solutions',
  'Companies optimizing or adding AI workflows',
  'Teams with bottlenecks slowing operations',
  'Businesses needing a working system without months of planning',
];

const sprintWhyXavs = [
  'Fast & Reliable – Working solution in 10 days',
  'AI-First – Intelligent workflows integrated seamlessly',
  'Outcome-Focused – Real impact, not slides',
  'Global Standards, Local Insight – Built for Ghana, scalable globally',
];

// Tally form embed component
function TallyFormEmbed({ onFormSubmit }: { onFormSubmit: () => void }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for Tally form submission
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'Tally.FormSubmitted') {
        onFormSubmit();
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleMessage);
    };
  }, [onFormSubmit]);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/eqr2dl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="400"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="What are we building?"
      className="rounded-2xl"
    />
  );
}

// Thank you page component
function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="section-padding min-h-[80vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8">
            <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Thanks for Submitting Your X-Sprint Challenge! 🚀
            </h1>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 mb-8 text-left">
            <p className="text-muted-foreground mb-6 text-lg">
              Your 10-day X-Sprint is almost ready to launch. We've received your challenge details and budget preferences.
            </p>

            <h3 className="text-xl font-bold mb-4">Here's what happens next:</h3>
            <ol className="space-y-4 text-muted-foreground mb-6">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center">1</span>
                <span><strong className="text-foreground">Schedule Your Kickoff Call</strong> – Click the button below to pick a time that works for you.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center">2</span>
                <span><strong className="text-foreground">Day 1 Starts Strong</strong> – On your scheduled call, we'll clarify your challenge and define success metrics so the sprint hits the ground running.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center">3</span>
                <span><strong className="text-foreground">Stay Ready</strong> – Make sure your team has access to any files or systems needed for the sprint.</span>
              </li>
            </ol>

            <p className="text-lg text-foreground">
              We're excited to help you solve your challenge fast and get real results in just 10 days.
            </p>
          </div>

          <Button variant="hero" size="xl" asChild className="mb-8">
            <a href="https://cal.com/denzel-ansah-nxj6k3/30min" target="_blank" rel="noopener noreferrer">
              Book My Kickoff Call →
            </a>
          </Button>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>If you have questions before your call,</span>
            <a 
              href="https://wa.me/233543951760" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp us
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default function XSprint() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (formSubmitted) {
    return <ThankYouPage />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="section-padding text-center bg-card/10 border-b border-border relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            X-Sprint – Solve One Challenge in <span className="gradient-text">10 Days</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            High-impact results, no long contracts, no endless planning. Just execution.
          </p>
          <p className="text-2xl font-bold text-primary mb-6">
            Starting at ₵10,000
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="#booking">Book Your 10-Day X-Sprint →</a>
          </Button>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              Your 10-Day Sprint
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {sprintSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-secondary">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {step.description.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-card/10 border-t border-border">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Included in Your Sprint
            </h2>
            <p className="text-muted-foreground mb-6">
              Everything you need for a complete, working solution.
            </p>
          </motion.div>

          <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground mb-6">
            {sprintWhatYouGet.map((item) => (
              <li key={item} className="flex items-center gap-2 p-4 bg-card rounded-lg border border-border">
                <Check className="w-5 h-5 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          <Button variant="hero" size="xl" asChild>
            <a href="#booking">Book Your 10-Day X-Sprint →</a>
          </Button>
        </div>
      </section>

      {/* Pricing & Tiers */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Pricing & Tiers
            </h2>
            <p className="text-muted-foreground mb-6">
              Fixed time. Fixed scope. Starting from ₵10,000
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Base X-Sprint */}
            <div className="flex flex-col bg-card rounded-3xl border border-border shadow-md hover:shadow-xl transition-shadow p-6">
              <h3 className="text-xl font-bold mb-2">Base X-Sprint</h3>
              <p className="text-muted-foreground mb-4">
                Solve one clearly scoped challenge with full solution design, build, and handover.
              </p>
              <span className="text-3xl font-bold mb-4 block">₵10,000</span>
              <ul className="flex-1 mb-6 text-left space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" /> One clearly scoped challenge solved
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" /> Architecture, build, and live deployment
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" /> Technical handover and documentation
                </li>
              </ul>
              <div className="mt-auto">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="#booking">Book Base Sprint</a>
                </Button>
              </div>
            </div>

            {/* Advanced AI Module */}
            <div className="flex flex-col bg-card rounded-3xl border border-border shadow-md hover:shadow-xl transition-shadow p-6">
              <h3 className="text-xl font-bold mb-2">Advanced AI Module</h3>
              <p className="text-muted-foreground mb-4">
                Adds intelligent automation to your sprint solution.
              </p>
              <span className="text-3xl font-bold mb-4 block">+₵4,500</span>
              <ul className="flex-1 mb-6 text-left space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary" /> Includes Base X-Sprint
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" /> Advanced AI automation module
                </li>
              </ul>
              <div className="mt-auto">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="#booking">Add to Sprint</a>
                </Button>
              </div>
            </div>

            {/* Integration & Support */}
            <div className="flex flex-col bg-card rounded-3xl border border-border shadow-md hover:shadow-xl transition-shadow p-6">
              <h3 className="text-xl font-bold mb-2">Integration & Support</h3>
              <p className="text-muted-foreground mb-4">
                Connect with ERP/CRM systems and get extra post-sprint support.
              </p>
              <span className="text-3xl font-bold mb-4 block">+₵4,000</span>
              <ul className="flex-1 mb-6 text-left space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary" /> Includes Base X-Sprint
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary" /> Includes Advanced AI Module
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" /> Integration with ERP/CRM platforms
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" /> Extra week of post-sprint support
                </li>
              </ul>
              <div className="mt-auto">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="#booking">Add to Sprint</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Use */}
      <section className="section-padding bg-card/10 border-t border-border">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Is This Right for You?
            </h2>
            <p className="text-muted-foreground mb-6">
              X-Sprint is ideal for teams that need fast, tangible impact.
            </p>
          </motion.div>

          <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
            {sprintWhoShouldUse.map((item) => (
              <li
                key={item}
                className="p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Booking Options - Tally Form */}
      <section id="booking" className="section-padding bg-background">
        <div className="container-custom max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Get Started – Your Way
            </h2>
            <p className="text-muted-foreground">
              Submit your challenge below. After submission, you'll schedule a kickoff call to start your 10-day sprint.
            </p>
          </motion.div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
            <TallyFormEmbed onFormSubmit={() => setFormSubmitted(true)} />
          </div>
        </div>
      </section>

      {/* Why XAVS Labs */}
      <section className="section-padding bg-card/10 border-t border-border">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Work With Us?
            </h2>
            <p className="text-muted-foreground mb-6">
              Fast, reliable, and outcome-focused sprints.
            </p>
          </motion.div>

          <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
            {sprintWhyXavs.map((item) => (
              <li
                key={item}
                className="p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
