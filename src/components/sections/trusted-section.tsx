import { motion } from 'framer-motion';
import { trustedLogos } from '@/constants/landing-data';

const repeatedLogos = [...trustedLogos, ...trustedLogos];

export function TrustedSection() {
  return (
    <section className="py-14" aria-label="Trusted by">
      <div className="section-shell overflow-hidden">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-neutral-500">Trusted by modern teams worldwide</p>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-3">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            className="flex min-w-max gap-3"
          >
            {repeatedLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-neutral-700 dark:text-neutral-300"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
