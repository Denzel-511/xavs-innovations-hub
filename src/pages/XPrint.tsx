import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Code, CheckCircle } from 'lucide-react';

const sprintSteps = [
  {
    title: 'Day 1: Discovery',
    description: [
      'Identify the problem and scope.',
      'Align deliverables with your business goal.',
    ],
    icon: Calendar,
  },
  {
    title: 'Day 2–5: Build',
    description: [
      'Tactical coding, AI integration, workflow patching.',
      'Rapid deployment of features or plugins.',
    ],
    icon: Code,
  },
  {
    title: 'Day 6–7: Test & Deliver',
    description: [
      'QA, bug fixes, deployment, and handoff.',
    ],
    icon: CheckCircle,
  },
];

const sprintUseCases = [
  'Add a quick AI feature to your workflow',
  'Patch or optimize an existing system',
  'Build a small plugin or tool for your business',
];

const sprintAddons = [
  'Advanced AI module',
  'Integration with other platforms',
  'Post-sprint support',
];

export default function XSprint() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="section-padding text-center bg-card/10 border-b border-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            X-Sprint – Solve One Challenge in <span className="gradient-text">7 Days</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            From idea to working solution in just 7 days. Focused, fast, and AI-powered.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="#booking">Book Your Sprint</a>
          </Button>
        </motion.div>
      </section>

      {/* How X-Sprint Works */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              How X-Sprint Works
            </h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {sprintSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-secondary">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {step.description.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* When to Use X-Sprint */}
      <section className="section-padding bg-card/10 border-t border-border">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">When to Use X-Sprint</h2>
            <p className="text-muted-foreground mb-6">
              Ideal for quick, tactical improvements in your workflow or business systems.
            </p>
          </motion.div>

          <ul className="grid md:grid-cols-3 gap-4 text-muted-foreground">
            {sprintUseCases.map((useCase) => (
              <li key={useCase} className="p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
                {useCase}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Booking Form - Styled */}
<section id="booking" className="section-padding bg-background">
  <div className="container-custom max-w-2xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
        Book Your 7-Day Sprint
      </h2>
      <p className="text-muted-foreground">
        Fill out the form below and we’ll schedule your sprint. Let’s solve your challenge together!
      </p>
    </motion.div>

    <form className="bg-card border border-border rounded-3xl p-8 space-y-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Name"
          className="input-field w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none transition"
        />
        <input
          type="email"
          placeholder="Email"
          className="input-field w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none transition"
        />
      </div>

      <input
        type="text"
        placeholder="Company"
        className="input-field w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none transition"
      />

      <textarea
        placeholder="Brief description of your challenge"
        className="input-field w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none transition resize-none"
        rows={4}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="date"
          className="input-field w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none transition"
        />
        <select className="input-field w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:outline-none transition">
          <option value="">Select Budget Range</option>
          <option value="$500-$1000">$500-$1000</option>
          <option value="$1000-$5000">$1000-$5000</option>
          <option value="$5000+">$5000+</option>
        </select>
      </div>

      <div className="text-center">
        <Button variant="hero" size="xl" type="submit" className="w-full md:w-auto px-12">
          Book My 7-Day Sprint
        </Button>
      </div>
    </form>
  </div>
</section>


      {/* Optional Add-Ons */}
      <section className="section-padding bg-card/10 border-t border-border">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Optional Add-Ons
            </h2>
            <p className="text-muted-foreground mb-6">
              Enhance your sprint with these additional options.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {sprintAddons.map((addon) => (
              <div
                key={addon}
                className="px-4 py-2 border border-border rounded-lg text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                {addon}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
