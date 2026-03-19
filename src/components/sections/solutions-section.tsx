import { SectionHeading } from '@/components/shared/section-heading';
import { solutionCards } from '@/constants/landing-data';

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Solutions"
          title="Purpose-Built for Every Business Stage"
          description="We align technical execution with your business model for measurable growth."
          center
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {solutionCards.map((item) => (
            <article key={item.audience} className="glass-panel rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-brand">{item.audience}</h3>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300"><strong>Pain points:</strong> {item.painPoints}</p>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300"><strong>Solution:</strong> {item.solution}</p>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300"><strong>Outcome:</strong> {item.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
