import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import event1 from '@/assets/event-1.jpeg';
import event2 from '@/assets/event-2.jpeg';
import office1 from '@/assets/office-1.jpeg';

const projects = [
  {
    title: 'Ghana Digital Week 2025',
    category: 'Event Partnership',
    image: event1,
    description: "Official technology partner for Ghana's largest digital innovation summit.",
  },
  {
    title: 'Web Summit Experience',
    category: 'Global Presence',
    image: event2,
    description: 'Representing African tech innovation on the world stage.',
  },
  {
    title: 'Workspace Collaboration',
    category: 'Co-working',
    image: office1,
    description: 'Building the future of work with leading workspace partners.',
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-4">Portfolio</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Our <span className="gradient-text">Experience</span>
            </h2>
          </div>
          <Button variant="outline-glow" asChild>
            <a href="#" className="group">
              View All Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm text-foreground">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
