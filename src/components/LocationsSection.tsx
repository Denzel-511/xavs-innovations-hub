import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import accra from "../assets/locations/accra.jpeg";
import lagos from "../assets/locations/lagos.jpeg";
import london from "../assets/locations/london.jpeg";
import rabat from "../assets/locations/rabat.jpeg";
import seoul from "../assets/locations/seoul.jpeg";

const locations = [
  { city: 'ACCRA', images: [accra] },
  { city: 'LAGOS', images: [lagos] },
  { city: 'LONDON', images: [london] },
  { city: 'RABAT', images: [rabat] },
  { city: 'SEOUL', images: [seoul] },
];

export function LocationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeLocation, setActiveLocation] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0); // for future multi-image support

  const currentLocation = locations[activeLocation];
  const currentImage = currentLocation.images[activeImageIndex];

  return (
    <section ref={ref} className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-l uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Our Team
          </p>
          
          {/* Location Tabs */}
          <div className="flex gap-8 md:gap-12">
            {locations.map((location, index) => (
              <button
                key={location.city}
                onClick={() => {
                  setActiveLocation(index);
                  setActiveImageIndex(0);
                }}
                className={`text-sm font-bold transition-all duration-500 ${
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

        {/* Single Image Display */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentLocation.city}-${activeImageIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 w-80 md:w-90 h-40 md:h-52 overflow-hidden rounded-lg"
            >
              <img
                src={currentImage}
                alt={currentLocation.city}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
