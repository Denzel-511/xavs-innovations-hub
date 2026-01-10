import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import team1 from '@/assets/team-1.jpeg';
import team2 from '@/assets/team-2.jpeg';
import team3 from '@/assets/team-3.jpeg';
import office1 from '@/assets/office-1.jpeg';
import event1 from '@/assets/event-1.jpeg';
import event2 from '@/assets/event-2.jpeg';

const heroImages = [team1, team2, team3, office1, event1, event2];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Image Strip Marquee */}
      <div className="relative w-full h-28 md:h-36 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 pointer-events-none" />
        <div className="flex animate-marquee">
          {[...heroImages, ...heroImages].map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 md:w-64 h-28 md:h-36 mx-1 overflow-hidden"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 hover:opacity-70 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="container-custom text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Small tagline */}
            <p className="text-muted-foreground text-sm md:text-base uppercase tracking-[0.3em] mb-8">
              We'll help you
            </p>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8 text-glow">
              <span className="text-foreground">Power your business</span>
              <br />
              <span className="text-foreground">with </span>
              <span className="gradient-text">AI</span>
              <span className="text-foreground"> and </span>
              <span className="gradient-text">Security</span>
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
            >
              We build smart systems and AI-powered products that make businesses faster, safer, and more profitable.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="#choose-path" className="btn-pill-accent text-base px-10 py-4">
                Get Started
              </a>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill text-base px-10 py-4"
              >
                Book a Call
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
