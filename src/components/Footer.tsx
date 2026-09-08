import React from 'react';
import { PORTFOLIO_OWNER } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#060B1A] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF4F9A] shadow-[0_0_8px_#FF4F9A]" />
              <span className="font-bold tracking-wider text-lg text-white font-mono">
                RAKSHITHA<span className="text-[#FF4F9A]">.HK</span>
              </span>
            </div>
            <p className="text-xs text-[#7E879D] max-w-sm">
              Building, learning, and exploring the future of technology.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-[#B8C0D4] hover:text-[#FF4F9A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PORTFOLIO_OWNER.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full bg-[#10182D] border border-white/10 flex items-center justify-center text-[#B8C0D4] hover:text-[#FF4F9A] hover:border-[#FF4F9A]/40 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_OWNER.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#10182D] border border-white/10 flex items-center justify-center text-[#B8C0D4] hover:text-[#FF4F9A] hover:border-[#FF4F9A]/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_OWNER.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-[#10182D] border border-white/10 flex items-center justify-center text-[#B8C0D4] hover:text-[#FF4F9A] hover:border-[#FF4F9A]/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-9 h-9 rounded-full bg-[#FF4F9A]/20 border border-[#FF4F9A]/40 flex items-center justify-center text-[#FF4F9A] hover:bg-[#FF4F9A] hover:text-white transition-all shadow-[0_0_15px_rgba(255,79,154,0.3)] cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E879D] font-mono">
          <div>
            © 2026 Rakshitha HK. All rights reserved.
          </div>

          <div className="flex items-center gap-1">
            <span>Crafted with Cyber Sakura theme & engineering discipline</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
