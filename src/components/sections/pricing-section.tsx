import { Check } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { pricing } from '@/constants/landing-data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Pricing"
          title="Flexible Engagement Models"
          description="Choose the plan that matches your growth stage and complexity."
          center
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pricing.map((plan) => (
            <article
              key={plan.tier}
              className={cn(
                'glass-panel rounded-2xl p-6',
                plan.featured && 'border-brand/60 bg-gradient-to-b from-brand/15 to-white/5 shadow-glow',
              )}
            >
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{plan.tier}</p>
              <h3 className="mt-2 text-3xl font-semibold">{plan.price}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{plan.details}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2"><Check className="text-brand" size={14} />{perk}</li>
                ))}
              </ul>
              <Button className="mt-6 w-full" variant={plan.featured ? 'default' : 'secondary'}>
                Select {plan.tier}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
