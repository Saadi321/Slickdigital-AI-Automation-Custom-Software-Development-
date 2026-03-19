import { Star } from 'lucide-react';
import { SectionHeading } from '@/components/shared/section-heading';
import { testimonials } from '@/constants/landing-data';

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Product Leaders"
          description="Our partnerships focus on business outcomes, not just shipping features."
          center
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="glass-panel rounded-2xl p-6">
              <div className="mb-3 flex text-brand">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">“{testimonial.feedback}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand/70 to-emerald-400/50" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
