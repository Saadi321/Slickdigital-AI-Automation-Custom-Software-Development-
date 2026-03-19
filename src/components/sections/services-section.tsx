import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/section-heading';
import { Card } from '@/components/ui/card';
import { services } from '@/constants/landing-data';

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="Engineering Services Built for Scale"
          description="From idea to infrastructure, we craft robust digital systems that grow with your business."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="group h-full hover:border-brand/50 hover:shadow-glow">
                <Icon className="text-brand" />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
