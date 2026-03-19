import { Linkedin, Twitter, Github } from 'lucide-react';
import { footerLinks } from '@/constants/landing-data';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="section-shell grid gap-10 md:grid-cols-4">
        <div>
          <p className="text-xl font-semibold">Slick<span className="text-brand">Digital</span></p>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Premium AI automation and custom software engineering for high-growth teams.
          </p>
          <div className="mt-4 flex gap-3 text-neutral-400">
            <Twitter size={18} />
            <Linkedin size={18} />
            <Github size={18} />
          </div>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">{group}</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              {links.map((link) => (
                <li key={link}><a href="#" className="hover:text-brand">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="section-shell mt-10 text-xs text-neutral-500">© {new Date().getFullYear()} SlickDigital. All rights reserved.</p>
    </footer>
  );
}
