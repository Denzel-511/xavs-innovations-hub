import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Building2, GraduationCap } from 'lucide-react';

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
              AI Workshops
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
              Build smarter teams and students with AI
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Transform how your teams and students work, learn, and create — safely, 
              responsibly, and practically. Our workshops combine eye-opening education 
              with hands-on AI practice so every participant knows exactly what to do 
              and how to do it.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/workshops/corporate"
                className="btn-pill-accent inline-flex items-center gap-2"
              >
                <Building2 className="w-4 h-4" />
                Book Corporate Workshop
              </a>
              <a
                href="/workshops/school"
                className="btn-pill inline-flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                Book School Workshop
              </a>
            </div>
          </motion.div>

          {/* Right Column – Workshop Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Corporate Card */}
            <motion.a
              href="/workshops/corporate"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="group block border-b border-border/30 pb-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-primary" />
                  <h3 className="text-xl md:text-2xl font-display font-medium group-hover:text-primary transition-colors">
                    Corporate AI Workshops
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Train your staff to work smarter, safer, and faster using AI. 
                Teams leave with ready-to-use AI agents and workflow toolkits.
              </p>
              <p className="text-sm text-primary mt-3">1–3 days • In-person or hybrid</p>
            </motion.a>

            {/* School Card */}
            <motion.a
              href="/workshops/school"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="group block border-b border-border/30 pb-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="text-xl md:text-2xl font-display font-medium group-hover:text-primary transition-colors">
                    School AI Workshops
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Prepare students and tutors for the AI era with hands-on sessions 
                on responsible and creative AI usage.
              </p>
              <p className="text-sm text-primary mt-3">Half-day to 2 days</p>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}