import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, Award, BookOpen, Code, Shield, Brain } from 'lucide-react';

const modules = [
  {
    icon: Brain,
    title: 'AI Productivity Tools',
    description:
      'Learn how AI can automate repetitive tasks, enhance decision-making, and boost productivity across teams.',
    highlights: ['Task Automation', 'AI Assistants', 'Prompting Best Practices'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity & AI Safety',
    description:
      'Protect your organization from AI-related threats while ensuring safe and responsible AI usage.',
    highlights: ['AI Risks', 'Data Protection', 'Employee Awareness'],
  },
  {
    icon: Code,
    title: 'Workflow Automation',
    description:
      'Streamline operations using AI-powered systems and automation tools tailored to your business.',
    highlights: ['Process Automation', 'No-Code Tools', 'System Integration'],
  },
];


const Training = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
<section className="section-padding">
  <div className="container-custom">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-4xl mx-auto"
    >
      <p className="text-sm uppercase tracking-widest text-primary mb-4">
        Corporate AI Training
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
        Upscale Your <span className="gradient-text">Team with AI</span>
      </h1>

      <p className="text-xl text-muted-foreground leading-relaxed mb-10">
        Empower your employees to work smarter, safer, and faster with practical
        AI skills, cyber awareness, and workflow automation.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">Modular & Flexible</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Users className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">Team-Based Learning</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Award className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">Practical Outcomes</span>
        </div>
      </div>
    </motion.div>
  </div>
</section>


        {/* Training Tracks */}
        <section className="section-padding bg-card/30 border-y border-border">
  <div className="container-custom">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
        Training <span className="gradient-text">Modules</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Build your corporate AI training by selecting focused modules that match
        your team’s needs.
      </p>
    </motion.div>

    <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
      {modules.map((module, index) => {
        const Icon = module.icon;
        return (
          <motion.div
            key={module.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="min-w-[320px] max-w-[360px] snap-start"
          >
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-2xl font-display font-bold mb-3">
                {module.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {module.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {module.highlights.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="outline-glow" size="sm">
                  Add Module
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="/training">
                    Configure Training
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


        {/* Custom Training CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl border border-border bg-gradient-to-br from-card to-secondary overflow-hidden p-8 md:p-16"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

              <div className="relative text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Need a <span className="gradient-text">Custom Program</span>?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We design bespoke training curriculums tailored to your organization's specific needs, technology stack, and business goals.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="hero" size="xl" asChild>
                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                      Request Custom Training
                    </a>
                  </Button>
                  <Button variant="hero-outline" size="xl" asChild>
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Training;
