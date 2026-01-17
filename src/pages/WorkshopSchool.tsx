import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowUpRight, Check, GraduationCap, BookOpen, Sparkles, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

const activities = [
  'Prompting for research and assignments',
  'AI-assisted project management',
  'AI ethics and safety',
  'Tutor-focused AI lesson planning tools',
];

const expectations = [
  {
    icon: BookOpen,
    title: 'Educative',
    description: 'AI literacy, responsible usage, spotting AI-generated content, and understanding the implications of deepfakes.',
  },
  {
    icon: Sparkles,
    title: 'Hands-On',
    description: 'Students build personal research agents or project planning workflows. Tutors build lesson-planning assistants.',
  },
  {
    icon: Shield,
    title: 'Outcome',
    description: 'Every participant leaves with a working AI tool they can use for learning, teaching, or project management.',
  },
];

export default function WorkshopSchool() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Load Tally script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for Tally form submission
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.event === 'Tally.FormSubmitted') {
        setSubmitted(true);
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                School AI Workshops
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Prepare Students and Tutors for the <span className="gradient-text">AI Era</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hands-on sessions teaching students and educators how to use AI 
              responsibly, effectively, and creatively.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-sm">
              <span className="px-4 py-2 bg-card/40 backdrop-blur-sm rounded-full border border-border/30">
                Duration: Half-day to 2 days
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding border-t border-border/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What to Expect
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {expectations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 bg-card/40 backdrop-blur-sm rounded-2xl border border-border/30"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Activities */}
      <section className="section-padding border-t border-border/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Sample Workshop Activities
              </h2>
              
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card/20 rounded-xl border border-border/20"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{activity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-card/40 backdrop-blur-sm rounded-2xl border border-border/30"
            >
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-display font-bold mb-6">
                    Book Your School Workshop
                  </h3>
                  <iframe
                    data-tally-src="https://tally.so/embed/gDq121?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    title="Book Your School AI Workshop"
                    className="min-h-[400px]"
                  />
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">
                    Thanks for Your Interest! 🎓
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We've received your workshop request. Our team will review your requirements 
                    and get back to you within 24 hours to discuss the details and schedule.
                  </p>
                  <a
                    href="https://cal.com/denzel-ansah-nxj6k3/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-accent inline-flex items-center gap-2"
                  >
                    Schedule a Quick Call
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-sm text-muted-foreground mt-6">
                    Questions? <a href="https://wa.me/233543951760" className="text-primary hover:underline">WhatsApp us</a>
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}