import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowUpRight, Check, Building2, Users, Lightbulb, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

const activities = [
  'Prompt Engineering for actionable AI',
  'Automating departmental tasks with AI agents',
  'Data security & ethical AI practices',
  'Real-time AI agent creation and deployment',
];

const expectations = [
  {
    icon: Lightbulb,
    title: 'Educative',
    description: 'Spot AI risks, deepfakes, and ethical pitfalls in business workflows. Learn how AI can boost efficiency without compromising security.',
  },
  {
    icon: Users,
    title: 'Hands-On',
    description: 'Build functional AI agents tailored to departmental needs — HR, Sales, Finance, Customer Service.',
  },
  {
    icon: Shield,
    title: 'Outcome',
    description: 'Teams leave with one or more ready-to-use AI agents and a workflow toolkit they can implement immediately.',
  },
];

export default function WorkshopCorporate() {
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
              <Building2 className="w-8 h-8 text-primary" />
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Corporate AI Workshops
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Empower Your Teams with AI — <span className="gradient-text">Practically and Responsibly</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Short, impactful workshops designed to train your staff to work smarter, 
              safer, and faster using AI.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 text-sm">
              <span className="px-4 py-2 bg-card/40 backdrop-blur-sm rounded-full border border-border/30">
                Duration: 1–3 days
              </span>
              <span className="px-4 py-2 bg-card/40 backdrop-blur-sm rounded-full border border-border/30">
                In-person or hybrid
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
                    Book Your Corporate Workshop
                  </h3>
                  <iframe
                    data-tally-src="https://tally.so/embed/Y5Gv2q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    title="Book Your Corporate AI Workshop"
                    className="min-h-[400px]"
                  />
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">
                    Thanks for Your Interest! 🎉
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