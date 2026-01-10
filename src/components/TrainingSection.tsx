import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const modules = [
  {
    title: 'AI Productivity Tools',
    description:
      'Learn how AI can automate repetitive tasks, improve decision-making, and boost day-to-day productivity across teams.',
  },
  {
    title: 'Cybersecurity & AI Safety',
    description:
      'Understand AI-related security risks, protect sensitive data, and train employees on safe AI usage in the workplace.',
  },
  {
    title: 'Workflow Automation',
    description:
      'Streamline internal operations using AI-powered systems and automation tools tailored to your business processes.',
  },
];

export function TrainingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="training"
      className="section-padding border-t border-border/30 scroll-mt-20"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Corporate Training
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
              Upscale Your Team with AI
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Empower your employees to work smarter, safer, and faster with
              practical AI skills, cyber awareness, and workflow automation.
            </p>

            <a
              href="/training"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
            >
              Configure Corporate Training
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column – Module Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group border-b border-border/30 pb-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl md:text-2xl font-display font-medium group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {module.description}
                </p>

                <div className="flex gap-6 text-sm font-medium">
                  <button className="text-foreground hover:text-primary transition-colors">
                    Add Module
                  </button>
                  <a
                    href="/training"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Configure Training
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
