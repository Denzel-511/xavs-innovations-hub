import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Code, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sprintPhases = [
  {
    title: 'Days 1–2: Define the Problem',
    icon: Target,
    description:
      'We isolate one high-impact challenge, align on outcomes, and lock the scope. No scope creep. No confusion.',
  },
  {
    title: 'Days 3–8: Build the Solution',
    icon: Code,
    description:
      'Focused development, AI integration, and workflow automation. Fast execution with real-world constraints in mind.',
  },
  {
    title: 'Days 9–10: Ship & Handoff',
    icon: Rocket,
    description:
      'Testing, deployment, and clean handoff. You get a working solution your team can use immediately.',
  },
];

export function XSprintSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="Xsprint"
      ref={ref}
      className="section-padding border-t border-border/30 scroll-mt-20 bg-card/10"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            X-SPRINT — 10 Day Tactical Build
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Solve One Challenge <span className="gradient-text">in 10 Days</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            From problem to working solution. Focused, fast, and AI-powered.
          </p>

          <p className="text-muted-foreground">
            <strong>Why wait months?</strong> We’ve productized our expertise to
            deliver a tangible, deployed outcome in just 10 days — no delays,
            no endless meetings.
          </p>
        </motion.div>

        {/* Phases */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {sprintPhases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex-1 min-w-[280px] max-w-xs rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mr-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">{phase.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Value Props */}
        <div className="text-center max-w-2xl mx-auto mb-10 text-muted-foreground">
          <p>
            <strong>Fixed time:</strong> 10 days end-to-end ·{' '}
            <strong>Fixed price:</strong> Starting at ₵10,000 ·{' '}
            <strong>Real results:</strong> Fully implemented, ready for your team
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a href="/xsprint">Start Your 10-Day Sprint →</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
