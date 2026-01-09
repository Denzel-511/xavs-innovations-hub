import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

const locations = [
  {
    city: 'Accra',
    country: 'Ghana',
    description: 'Our headquarters and innovation hub',
    coordinates: 'West Africa',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    description: 'European operations & partnerships',
    coordinates: 'Europe',
  },
  {
    city: 'Mumbai',
    country: 'India',
    description: 'Engineering & development center',
    coordinates: 'South Asia',
  },
];

export function LocationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Global Presence</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Our <span className="gradient-text">Offices</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                  hoveredIndex === index
                    ? 'border-primary bg-primary/5 shadow-[0_0_60px_-15px_hsl(var(--primary)/0.4)]'
                    : 'border-border bg-card'
                }`}
              >
                {/* Background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="relative p-8">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      hoveredIndex === index
                        ? 'bg-gradient-to-r from-primary to-accent'
                        : 'bg-secondary'
                    }`}
                  >
                    <MapPin
                      className={`w-7 h-7 transition-colors duration-300 ${
                        hoveredIndex === index ? 'text-primary-foreground' : 'text-muted-foreground'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold mb-1">{location.city}</h3>
                  <p className="text-primary font-medium mb-3">{location.country}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {location.description}
                  </p>

                  {/* Coordinates badge */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {location.coordinates}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
