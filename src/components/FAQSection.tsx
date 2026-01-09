import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope and complexity. An MVP typically takes 6-12 weeks, while enterprise solutions may require 3-6 months. We provide detailed timelines during our discovery phase.',
  },
  {
    question: 'Do you work with startups or only enterprises?',
    answer:
      'We work with businesses of all sizes. From early-stage startups building their first MVP to established enterprises seeking digital transformation, our services are tailored to meet your specific needs and budget.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'We specialize in modern tech stacks including React, Node.js, Python, and cloud platforms like AWS and GCP. For AI solutions, we work with TensorFlow, PyTorch, and OpenAI APIs.',
  },
  {
    question: 'How do you handle post-launch support?',
    answer:
      'All our projects include a post-launch support period. We offer ongoing maintenance packages, SLAs for enterprise clients, and dedicated support teams for mission-critical applications.',
  },
  {
    question: 'What is your pricing model?',
    answer:
      'We offer both fixed-price packages for standardized services and custom quotes for unique projects. Our productized services have transparent pricing, while complex projects are quoted after a discovery call.',
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-card/30 border-y border-border">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't see what you're looking for, reach out to us directly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-primary/50 data-[state=open]:shadow-[0_0_40px_-15px_hsl(var(--primary)/0.3)] transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display font-medium hover:text-primary py-5 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">Still have questions?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" asChild>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
            <Button variant="outline-glow" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
