import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import team1 from '@/assets/team-1.jpeg';
import team2 from '@/assets/team-2.jpeg';
import team3 from '@/assets/team-3.jpeg';
import office1 from '@/assets/office-1.jpeg';
import event1 from '@/assets/event-1.jpeg';
import event2 from '@/assets/event-2.jpeg';

const locations = [
  { city: 'ACCRA', images: [team1, team2, event1] },
  { city: 'LONDON', images: [office1, event2, team3] },
  { city: 'INDIA', images: [team3, team1, office1] },
];

export function LocationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Our Offices
          </p>
          
          {/* Location Tabs */}
          <div className="flex gap-8 md:gap-12">
            {locations.map((location, index) => (
              <button
                key={location.city}
                onClick={() => setActiveLocation(index)}
                className={`text-3xl md:text-5xl lg:text-6xl font-display font-bold transition-all duration-500 ${
                  activeLocation === index
                    ? 'text-foreground'
                    : 'text-muted-foreground/30 hover:text-muted-foreground/60'
                }`}
              >
                {location.city}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <div className="flex animate-marquee-reverse gap-2">
            {[...locations[activeLocation].images, ...locations[activeLocation].images, ...locations[activeLocation].images].map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 md:w-80 h-48 md:h-60 overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
