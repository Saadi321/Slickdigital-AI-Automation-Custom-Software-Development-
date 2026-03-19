import { SectionHeading } from '@/components/shared/section-heading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How quickly can you start a project?',
    a: 'Most engagements begin within 1-2 weeks after discovery and scope alignment.',
  },
  {
    q: 'Do you support enterprise security requirements?',
    a: 'Yes. We implement secure coding standards, access controls, and compliance-aligned workflows.',
  },
  {
    q: 'Can you work with our in-house team?',
    a: 'Absolutely. We integrate with internal teams through collaborative sprint planning and shared delivery ownership.',
  },
];

export function FaqSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Everything You Need to Know"
          description="Answers to the most common questions from founders and enterprise teams."
          center
        />
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <Accordion type="single" collapsible>
            {faqs.map((faq, idx) => (
              <AccordionItem value={`item-${idx}`} key={faq.q} className="border-b border-white/10">
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
