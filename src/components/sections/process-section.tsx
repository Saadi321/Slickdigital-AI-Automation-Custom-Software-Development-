import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { processSteps } from '@/constants/landing-data';

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Process"
          title="A Proven Delivery Framework"
          description="Transparent, strategic, and execution-focused from kickoff to launch."
        />
        <div className="mt-10 space-y-4">
          {processSteps.map(({ icon: Icon, title, description }, idx) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-5 pl-14"
            >
              <div className="absolute left-4 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">{idx + 1}</div>
              <Icon className="mb-2 text-brand" size={18} />
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
