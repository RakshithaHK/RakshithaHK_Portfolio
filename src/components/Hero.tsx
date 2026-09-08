import React, { useState, useEffect } from 'react';
import { Sparkles, Download, ArrowRight, Github, Linkedin, Mail, Code, Terminal, Bot, MapPin, Camera } from 'lucide-react';
import { PORTFOLIO_OWNER } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

const ROTATING_PHRASES = [
  "Full-Stack & Backend Developer",
  "AI & Computer Vision Enthusiast",
  "Full SDLC • REST APIs • Edge Debugging",
  "Department Rank Holder • CGPA 8.87",
  "Python • Node.js • Java • ML"
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  useEffect(() => {
    const currentFullText = ROTATING_PHRASES[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(50);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, typingSpeed]);

  const [exactImageSrc, setExactImageSrc] = useState<string>(() => {
    return localStorage.getItem('rakshitha_exact_avatar') || PORTFOLIO_OWNER.assets.avatar;
  });

  useEffect(() => {
    if (!localStorage.getItem('rakshitha_exact_avatar')) {
      const candidatePaths = [
        '/WhatsApp Image 2026-09-08 at 4.53.16 PM.jpeg',
        '/WhatsApp Image 2026-09-08 at 4.53.16 PM.jpg',
        '/avatar.jpeg',
        '/avatar.jpg',
        '/profile.jpg',
        '/rakshitha.jpg'
      ];

      for (const path of candidatePaths) {
        const testImg = new window.Image();
        testImg.src = path;
        testImg.onload = () => {
          setExactImageSrc(path);
          localStorage.setItem('rakshitha_exact_avatar', path);
        };
      }
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setExactImageSrc(result);
          localStorage.setItem('rakshitha_exact_avatar', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setExactImageSrc(result);
          localStorage.setItem('rakshitha_exact_avatar', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT COLUMN: Personal Brand & Pitch */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Small Eyebrow Label */}
          <div 
            id="hero-eyebrow"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10182D]/90 border border-[#FF4F9A]/30 text-xs font-mono tracking-wider text-[#FFB3D1] mb-5 shadow-[0_0_12px_rgba(255,79,154,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF4F9A] animate-pulse" />
            <span className="uppercase font-semibold">RAKSHITHA HK</span>
            <span className="text-[#7E879D]">|</span>
            <span className="text-xs text-[#FFB3D1] font-semibold">CGPA 8.87</span>
            <span className="text-[#7E879D] hidden sm:inline">•</span>
            <span className="text-xs text-[#B8C0D4] hidden sm:inline">Dept. Rank Holder</span>
          </div>

          {/* Main Display Heading */}
          <h1 
            id="hero-main-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-3"
          >
            Hi, I'm{' '}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFB3D1] to-[#FF4F9A]">
              Rakshitha HK
            </span>
          </h1>

          {/* Animated Subtitle / Typing Line */}
          <div className="min-h-[44px] flex items-center mb-6">
            <p className="text-xl sm:text-2xl font-semibold text-[#FF6BAF] font-mono flex items-center">
              <span>{displayText}</span>
              <span className="inline-block w-2.5 h-6 ml-1 bg-[#FF4F9A] animate-pulse" />
            </p>
          </div>

          {/* Authentic Student Narrative Description */}
          <p className="text-base sm:text-lg text-[#B8C0D4] max-w-2xl leading-relaxed mb-8">
            Information Science & Engineering student with hands-on experience across the full software development lifecycle — building backend systems, REST APIs, full-stack applications, and AI pipelines with an unyielding focus on code quality, testing, and edge-case handling.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <button
              id="hero-cta-projects"
              type="button"
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 rounded-full font-bold text-sm tracking-wide bg-gradient-to-r from-[#FF4F9A] via-[#FF2D8D] to-[#E91E87] text-white shadow-[0_0_25px_rgba(255,79,154,0.45)] hover:shadow-[0_0_35px_rgba(255,79,154,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-cta-resume"
              type="button"
              onClick={onOpenResume}
              className="px-6 py-3.5 rounded-full font-bold text-sm tracking-wide bg-[#10182D] text-white border border-white/15 hover:border-[#FF4F9A]/50 hover:bg-[#151F36] transition-all flex items-center gap-2 group cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(255,79,154,0.2)]"
            >
              <Download className="w-4 h-4 text-[#FF4F9A] group-hover:-translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </button>

            <button
              id="hero-cta-connect"
              type="button"
              onClick={() => scrollToSection('contact')}
              className="px-5 py-3 rounded-full font-medium text-sm text-[#B8C0D4] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              Let's Connect →
            </button>
          </div>

          {/* Social Links & Location pill */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 w-full">
            <span className="text-xs uppercase font-mono text-[#7E879D] tracking-wider">Connect:</span>
            <div className="flex items-center gap-2.5">
              <a
                href={PORTFOLIO_OWNER.github}
                target="_blank"
                rel="noreferrer"
                id="hero-social-github"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full bg-[#10182D] border border-white/10 flex items-center justify-center text-[#B8C0D4] hover:text-[#FF4F9A] hover:border-[#FF4F9A]/50 hover:scale-110 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_OWNER.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-social-linkedin"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-[#10182D] border border-white/10 flex items-center justify-center text-[#B8C0D4] hover:text-[#FF4F9A] hover:border-[#FF4F9A]/50 hover:scale-110 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_OWNER.email}`}
                id="hero-social-email"
                aria-label="Send Email"
                className="w-9 h-9 rounded-full bg-[#10182D] border border-white/10 flex items-center justify-center text-[#B8C0D4] hover:text-[#FF4F9A] hover:border-[#FF4F9A]/50 hover:scale-110 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#7E879D] font-mono ml-auto">
              <MapPin className="w-3.5 h-3.5 text-[#FF4F9A]" />
              <span>{PORTFOLIO_OWNER.location}</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Cyber Sakura Centerpiece */}
        <div className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0">
          <div className="relative w-72 sm:w-84 md:w-96 aspect-square flex items-center justify-center">
            {/* Ambient Diffuse Backlight (blends seamlessly with background) */}
            <div 
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#FF2D8D]/15 via-[#080F22]/40 to-[#FF4F9A]/15 blur-3xl pointer-events-none -z-10"
            />

            {/* Subtle Soft Glow Shadow */}
            <div 
              className="absolute inset-0 rounded-full bg-[#080F22]/60 blur-xl pointer-events-none -z-10"
            />

            {/* Ambient Depth Layer */}
            <div 
              className="absolute inset-2 rounded-full bg-gradient-to-b from-transparent via-[#080F22]/20 to-[#080F22]/80 blur-2xl -z-10"
            />

            {/* Central Circular Cyber Sakura Artwork (Seamless Blended Outline) */}
            <div 
              className="relative w-full h-full rounded-full overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float group bg-[#080F22]/30 backdrop-blur-sm"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleFileDrop}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-[#080F22]/60 relative">
                <img
                  src={exactImageSrc}
                  alt="Portrait of Rakshitha HK in Cyber Neon Style"
                  className="w-full h-full object-cover object-center rounded-full transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Soft gradient blend on edges into background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#080F22]/80 via-transparent to-[#080F22]/20 pointer-events-none shadow-[inset_0_0_35px_rgba(8,15,34,0.75)]" />
              </div>
            </div>

            {/* Floating Glassmorphic UI Chips */}
            {/* Chip 1: Python */}
            <div 
              className="absolute -top-3 -left-4 sm:-left-6 px-3 py-1.5 rounded-xl bg-[#10182D]/90 backdrop-blur-md border border-[#FF4F9A]/40 shadow-[0_4px_16px_rgba(0,0,0,0.4)] flex items-center gap-2 animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#FF4F9A] shadow-[0_0_6px_#FF4F9A]" />
              <Code className="w-3.5 h-3.5 text-[#FFB3D1]" />
              <span className="text-xs font-mono font-bold text-white">Python</span>
            </div>

            {/* Chip 2: AI & GenAI */}
            <div 
              className="absolute top-1/4 -right-5 sm:-right-8 px-3.5 py-1.5 rounded-xl bg-[#10182D]/90 backdrop-blur-md border border-[#FF4F9A]/40 shadow-[0_4px_16px_rgba(0,0,0,0.4)] flex items-center gap-2 animate-float"
              style={{ animationDelay: '1.2s' }}
            >
              <Bot className="w-3.5 h-3.5 text-[#FF4F9A]" />
              <span className="text-xs font-mono font-bold text-white">AI & GenAI</span>
            </div>

            {/* Chip 3: SVIT ISE */}
            <div 
              className="absolute -bottom-4 -left-2 sm:-left-4 px-3.5 py-2 rounded-xl bg-[#10182D]/90 backdrop-blur-md border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.45)] flex items-center gap-2 animate-float"
              style={{ animationDelay: '1.8s' }}
            >
              <Terminal className="w-3.5 h-3.5 text-[#FF6BAF]" />
              <div>
                <div className="text-[10px] uppercase font-mono text-[#7E879D]">Academic Base</div>
                <div className="text-xs font-bold text-white font-mono">SVIT • ISE</div>
              </div>
            </div>

            {/* Chip 4: Web Dev */}
            <div 
              className="absolute -bottom-2 -right-3 px-3 py-1.5 rounded-xl bg-[#10182D]/90 backdrop-blur-md border border-[#FF4F9A]/30 shadow-[0_4px_16px_rgba(0,0,0,0.4)] flex items-center gap-1.5 animate-float"
              style={{ animationDelay: '2.4s' }}
            >
              <Sparkles className="w-3 h-3 text-[#FF4F9A]" />
              <span className="text-xs font-mono font-semibold text-[#F8F9FF]">Full-Stack</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
