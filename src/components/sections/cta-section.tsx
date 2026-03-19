import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-3xl border border-brand/40 bg-gradient-to-r from-brand/20 via-black/40 to-emerald-400/20 p-10 text-center shadow-glow">
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to Build Your Next AI-Powered Advantage?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">
            Partner with a premium engineering team to launch smarter products, automate operations, and scale with confidence.
          </p>
          <Button className="mt-8" size="lg">Book a Free Consultation</Button>
        </div>
      </div>
    </section>
  );
}
