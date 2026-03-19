import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '@/constants/landing-data';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

const linkIdMap: Record<string, string> = {
  Home: 'home',
  Services: 'services',
  Solutions: 'solutions',
  'Case Studies': 'case-studies',
  Pricing: 'pricing',
  Contact: 'contact',
};

export function Navbar({ theme, onThemeToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-transparent px-4 py-3"
    >
      <div
        className={`section-shell flex items-center justify-between rounded-full border px-4 py-2 transition-all sm:px-6 ${
          scrolled
            ? 'border-white/20 bg-black/45 shadow-2xl backdrop-blur-2xl dark:bg-black/45'
            : 'border-white/10 bg-white/70 backdrop-blur-xl dark:bg-white/5'
        }`}
      >
        <a href="#home" className="text-base font-semibold tracking-wide sm:text-lg">
          Slick<span className="text-brand">Digital</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${linkIdMap[link]}`}
              className="text-sm text-neutral-700 transition hover:text-brand dark:text-neutral-300"
            >
              {link}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={onThemeToggle}
            className="rounded-full border border-white/15 p-2 text-neutral-700 transition hover:text-brand dark:text-neutral-200"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Button size="sm" className="hidden sm:inline-flex">
            Book a Call
          </Button>
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="rounded-full border border-white/15 p-2 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="section-shell mt-3 rounded-2xl border border-white/15 bg-black/80 p-4 backdrop-blur-xl md:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${linkIdMap[link]}`}
                    onClick={closeMobile}
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-200 transition hover:bg-white/10 hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="mt-3 w-full" onClick={closeMobile}>
              Book a Call
            </Button>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
