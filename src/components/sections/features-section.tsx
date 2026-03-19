import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { features } from '@/constants/landing-data';

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Engineered for Performance and Reliability"
          description="Our delivery model blends strategic thinking, modern architecture, and product craftsmanship."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-panel rounded-2xl p-6"
            >
              <Icon className="text-brand" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
