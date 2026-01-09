import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const tracks = [
  'AI & Machine Learning',
  'Product Management', 
  'Full-Stack Development',
  'Cybersecurity Fundamentals',
];

export function TrainingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="training" className="section-padding border-t border-border/30 scroll-mt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Upskill Your Team
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
              Corporate Training
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Empower your workforce with cutting-edge skills in AI, product development, and digital transformation.
            </p>
            <a
              href="/training"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
            >
              View Training Tracks
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column - Track List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {tracks.map((track, index) => (
              <motion.div
                key={track}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group flex items-center justify-between py-6 border-b border-border/30 hover:border-primary/30 transition-colors cursor-pointer"
              >
                <span className="text-xl md:text-2xl font-display font-medium group-hover:text-primary transition-colors">
                  {track}
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
