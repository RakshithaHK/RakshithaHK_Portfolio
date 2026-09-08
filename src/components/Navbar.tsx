import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume?: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(targetId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Capsule / Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10182D]/80 backdrop-blur-md border border-white/10 hover:border-[#FF4F9A]/40 transition-all group"
            id="nav-brand-link"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4F9A] shadow-[0_0_8px_#FF4F9A] group-hover:scale-125 transition-transform" />
            <span className="font-bold tracking-wider text-sm sm:text-base text-white font-mono">
              RAKSHITHA<span className="text-[#FF4F9A]">.HK</span>
            </span>
          </a>

          {/* Desktop Capsule Navigation Bar (Inspired by the Reference Image) */}
          <nav
            id="desktop-nav-capsule"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0B1226]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#FF4F9A] text-white shadow-[0_0_15px_rgba(255,79,154,0.5)]'
                      : 'text-[#B8C0D4] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              id="nav-hire-cta"
              className="relative group overflow-hidden px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#FF4F9A] to-[#FF2D8D] text-white shadow-[0_0_18px_rgba(255,79,154,0.4)] hover:shadow-[0_0_24px_rgba(255,79,154,0.65)] transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <span>Hire Me</span>
              <Send className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FF4F9A] text-white shadow-[0_0_10px_rgba(255,79,154,0.4)]"
            >
              Hire Me
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#10182D] border border-white/10 text-[#F8F9FF] hover:border-[#FF4F9A]/50 focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="fixed inset-0 z-40 bg-[#080F22]/95 backdrop-blur-xl md:hidden flex flex-col justify-center items-center px-6 transition-all"
        >
          <div className="flex flex-col items-center gap-4 w-full max-w-xs">
            <div className="text-xs font-mono text-[#FF4F9A] uppercase tracking-widest mb-2 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cyber Sakura Navigation</span>
            </div>

            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`w-full text-center py-3 px-4 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all ${
                    isActive
                      ? 'bg-[#FF4F9A] text-white shadow-[0_0_20px_rgba(255,79,154,0.4)]'
                      : 'text-[#B8C0D4] hover:text-white bg-[#10182D]/80 border border-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="pt-4 w-full flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-3 rounded-xl text-center text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#FF4F9A] to-[#FF2D8D] text-white shadow-[0_0_20px_rgba(255,79,154,0.4)]"
              >
                Hire Me
              </a>
              {onOpenResume && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 rounded-xl text-center text-xs font-medium text-[#B8C0D4] hover:text-white bg-[#151F36]/80 border border-white/10 flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#FF4F9A]" />
                  <span>Quick Resume Preview</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
