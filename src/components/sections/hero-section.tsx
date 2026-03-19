import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { stats } from '@/constants/landing-data';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-16 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.25),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(255,69,0,0.2),transparent_35%)] dark:opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:34px_34px] opacity-[0.08]" />
      <div className="pointer-events-none absolute inset-0 bg-noise-overlay opacity-35 mix-blend-soft-light" />

      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs text-brand">
            <Sparkles size={14} /> Enterprise AI Excellence
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Flowing Ideas, Clear Insights, <span className="text-brand">Intelligent Growth at Scale</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-neutral-700 dark:text-neutral-300 sm:text-lg">
            We design and engineer premium AI automation and custom software systems that convert operations into a competitive advantage.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">Get Started <ArrowRight size={16} /></Button>
            <Button size="lg" variant="secondary">Book Demo</Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-xl p-4">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-brand/20 blur-3xl" />
          <div className="glass-panel rounded-[2rem] p-4 shadow-2xl sm:p-6">
            <div className="rounded-2xl border border-white/10 bg-black/55 p-5 dark:bg-black/65">
              <p className="text-xs text-neutral-400">Meets AI-Team Flow Intelligence</p>
              <h3 className="mt-4 text-2xl font-semibold">98.2% Startup Success</h3>
              <p className="mt-2 text-sm text-neutral-400">Turn raw data into meaningful decisions with connected workflows and collaborative AI tools.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {['Insights', 'Automation', 'API'].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
