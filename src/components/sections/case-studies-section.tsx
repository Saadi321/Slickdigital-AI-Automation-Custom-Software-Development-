import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { caseStudies } from '@/constants/landing-data';

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Case Studies"
          title="Results That Speak in Metrics"
          description="A glimpse into real-world systems we have transformed for high-growth companies."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {caseStudies.map((item) => (
            <motion.article key={item.project} whileHover={{ y: -6 }} className="glass-panel rounded-2xl overflow-hidden p-4">
              <div className="h-36 rounded-xl bg-gradient-to-br from-brand/40 to-emerald-300/20" />
              <h3 className="mt-4 text-lg font-semibold">{item.project}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.industry}</p>
              <p className="mt-2 font-medium text-brand">{item.result}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
