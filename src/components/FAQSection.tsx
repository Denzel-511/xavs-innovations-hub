import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope. An MVP typically takes 6-12 weeks, while enterprise solutions may require 3-6 months.',
  },
  {
    question: 'Do you work with startups or only enterprises?',
    answer: 'We work with businesses of all sizes—from early-stage startups building their first MVP to established enterprises seeking digital transformation.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in React, Node.js, Python, and cloud platforms like AWS and GCP. For AI, we work with TensorFlow, PyTorch, and OpenAI APIs.',
  },
  {
    question: 'How do you handle post-launch support?',
    answer: 'All projects include a post-launch support period. We offer ongoing maintenance packages and dedicated support for mission-critical applications.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer both fixed-price packages for standardized services and custom quotes for unique projects. Contact us for a detailed proposal.',
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding border-t border-border/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-8">
              Got questions? We've got answers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-accent"
              >
                Chat on WhatsApp
              </a>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill"
              >
                Book a Call
              </a>
            </div>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/30 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-display font-medium text-lg hover:text-primary py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
