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

  // Create ordered images array where active location's images come first
  const allImages = locations.flatMap((location, locIndex) => 
    location.images.map(img => ({ img, city: location.city, locIndex }))
  );
  
  const orderedImages = [
  ...allImages.filter(item => item.locIndex !== activeLocation),
  ...allImages.filter(item => item.locIndex === activeLocation)
];

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

        {/* Image Gallery */}
<motion.div
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : {}}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="relative overflow-hidden"
>
  <div
    key={activeLocation} // 👈 THIS is the restart trigger
    className="flex animate-marquee-reverse gap-2"
  >
    {[...orderedImages, ...orderedImages].map((item, index) => (
      <div
        key={`${item.city}-${index}`}
        className="flex-shrink-0 w-64 md:w-80 h-48 md:h-60 overflow-hidden rounded-lg"
      >
        <img
          src={item.img}
          alt={item.city}
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
