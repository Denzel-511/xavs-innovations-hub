import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Code, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sprintDays = [
  {
    title: 'Day 1: Discovery',
    icon: Calendar,
    description: 'Understand the challenge and align deliverables with your business goals.',
  },
  {
    title: 'Day 2–5: Build',
    icon: Code,
    description: 'Rapid development, AI integration, and workflow patching for immediate impact.',
  },
  {
    title: 'Day 6–7: Test & Deliver',
    icon: CheckCircle,
    description: 'QA, deployment, and handoff of your working solution.',
  },
];

export function XSprintSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="Xprint" ref={ref} className="section-padding border-t border-border/30 scroll-mt-20 bg-card/10">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
            X-Sprint – 7-Day Tactical Build
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Solve a Challenge <span className="gradient-text">in Just 7 Days</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Need a fast solution? X-Sprint focuses on a single challenge — building a plugin, adding an AI feature,
            or optimizing a workflow — so you get immediate results.
          </p>
        </motion.div>

        {/* Day Cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {sprintDays.map((day, index) => {
            const Icon = day.icon;
            return (
              <motion.div
                key={day.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex-1 min-w-[280px] max-w-xs rounded-2xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mr-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold">{day.title}</h3>
                </div>
                <p className="text-muted-foreground">{day.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a href="/xprint">Start Your X-Sprint</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
