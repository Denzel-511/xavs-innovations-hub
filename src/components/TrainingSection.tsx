import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, ArrowRight, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trainingFeatures = [
  { icon: Clock, label: 'Flexible Duration' },
  { icon: Users, label: 'Team Training' },
  { icon: Award, label: 'Certification' },
];

export function TrainingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="training" className="section-padding scroll-mt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary mb-4">Upskill Your Team</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Corporate <span className="gradient-text">Training</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Empower your workforce with cutting-edge skills in AI, product development, and digital transformation. Our tailored training programs are designed to meet your organization's specific needs.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              {trainingFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{feature.label}</span>
                  </div>
                );
              })}
            </div>

            <Button variant="gradient" size="lg" asChild>
              <a href="/training" className="group">
                View Training Tracks
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-card to-secondary p-8 md:p-12">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

              {/* Content */}
              <div className="relative space-y-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-primary-foreground" />
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Training Tracks Available</h3>
                  <ul className="space-y-3">
                    {['AI & Machine Learning', 'Product Management', 'Full-Stack Development', 'Cybersecurity Fundamentals'].map(
                      (track) => (
                        <li key={track} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                          <span className="text-muted-foreground">{track}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Custom programs available for enterprise teams
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
