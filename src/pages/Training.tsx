import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, Award, BookOpen, Code, Shield, Brain } from 'lucide-react';

const tracks = [
  {
    icon: Brain,
    name: 'AI & Machine Learning',
    duration: '8-12 weeks',
    description: 'From fundamentals to advanced AI implementation for business applications.',
    topics: ['Machine Learning Basics', 'Neural Networks', 'NLP & Computer Vision', 'AI Integration'],
  },
  {
    icon: Code,
    name: 'Full-Stack Development',
    duration: '12-16 weeks',
    description: 'Comprehensive web development training from frontend to backend.',
    topics: ['React & TypeScript', 'Node.js & APIs', 'Database Design', 'Deployment & DevOps'],
  },
  {
    icon: Shield,
    name: 'Cybersecurity Fundamentals',
    duration: '6-8 weeks',
    description: 'Essential security practices for modern organizations.',
    topics: ['Threat Assessment', 'Security Protocols', 'Incident Response', 'Compliance'],
  },
  {
    icon: BookOpen,
    name: 'Product Management',
    duration: '6-8 weeks',
    description: 'Strategic product development and management methodologies.',
    topics: ['Product Strategy', 'Agile & Scrum', 'User Research', 'Roadmapping'],
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
              <p className="text-sm uppercase tracking-widest text-primary mb-4">Corporate Training</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Upskill Your <span className="gradient-text">Workforce</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Transform your team with cutting-edge skills in AI, development, security, and product management. Custom programs designed for your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Flexible Duration</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Team Training</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Certification</span>
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Training <span className="gradient-text">Tracks</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from our curated programs or request a custom curriculum for your team.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {tracks.map((track, index) => {
                const Icon = track.icon;
                return (
                  <motion.div
                    key={track.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="h-full rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_60px_-15px_hsl(var(--primary)/0.3)]">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                          <Icon className="w-7 h-7 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                          {track.duration}
                        </span>
                      </div>

                      <h3 className="text-2xl font-display font-bold mb-3">{track.name}</h3>
                      <p className="text-muted-foreground mb-6">{track.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {track.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      <Button variant="outline-glow" className="group/btn" asChild>
                        <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
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
