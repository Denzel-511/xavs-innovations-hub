import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import event1 from '@/assets/event-1.jpeg';
import event2 from '@/assets/event-2.jpeg';
import office1 from '@/assets/office-1.jpeg';

const projects = [
  {
    title: 'Ghana Digital Week 2025',
    category: 'Event Partnership',
    image: event1,
  },
  {
    title: 'Web Summit Experience',
    category: 'Global Presence',
    image: event2,
  },
  {
    title: 'Workspace Collaboration',
    category: 'Co-working',
    image: office1,
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding border-t border-border/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Our Experience
            </h2>
          </div>
        </motion.div>

        {/* Horizontal scroll gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group flex-shrink-0 w-80 md:w-[400px] cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {project.category}
              </p>
              <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
