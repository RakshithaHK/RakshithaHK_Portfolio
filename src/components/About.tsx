import React, { useState, useEffect } from 'react';
import { PORTFOLIO_OWNER, STATS } from '../data/portfolioData';
import { Sparkles, Compass, Lightbulb, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  const [fanImageSrc, setFanImageSrc] = useState<string>(() => {
    return localStorage.getItem('rakshitha_fan_art') || PORTFOLIO_OWNER.assets.fan;
  });

  useEffect(() => {
    if (!localStorage.getItem('rakshitha_fan_art')) {
      const candidatePaths = [
        '/ChatGPT Image Sep 8, 2026, 07_13_12 PM.png',
        '/ChatGPT Image Sep 8, 2026, 07_13_12 PM.jpg',
        '/fan.png',
        '/fan.jpg',
        '/sakura_fan.png',
        '/sakura_fan.jpg'
      ];

      for (const path of candidatePaths) {
        const testImg = new window.Image();
        testImg.src = path;
        testImg.onload = () => {
          setFanImageSrc(path);
          localStorage.setItem('rakshitha_fan_art', path);
        };
      }
    }
  }, []);

  const handleFanDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setFanImageSrc(result);
          localStorage.setItem('rakshitha_fan_art', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Sakura accents */}
        <div className="text-center mb-16">
          <div className="text-xs uppercase font-mono tracking-widest text-[#FF4F9A] mb-2 font-semibold">
            GET TO KNOW ME
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl" role="img" aria-label="cherry blossom">🌸</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              About <span className="text-[#FF4F9A]">Me</span>
            </h2>
            <span className="text-xl" role="img" aria-label="cherry blossom">🌸</span>
          </div>
          <p className="mt-3 text-sm sm:text-base text-[#7E879D] max-w-xl mx-auto">
            An engineering mindset grounded in software development, curiosity for intelligence systems, and building for the real world.
          </p>
        </div>

        {/* 3-Column / Balanced Grid inspired by Reference Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* LEFT: Personal Intro & Real Student Stats (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 relative overflow-hidden">
              <div className="absolute -top-12 -left-12 w-28 h-28 bg-[#FF4F9A]/15 rounded-full blur-xl pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-[#FF4F9A]" />
                <span>The Developer Journey</span>
              </h3>
              <p className="text-sm text-[#B8C0D4] leading-relaxed mb-4">
                I am an Information Science & Engineering student at SVIT (CGPA 8.87, Department Rank Holder) with hands-on experience across the entire software development lifecycle — from system design and API implementation to edge-case handling, unit testing, and deployment.
              </p>
              <p className="text-sm text-[#B8C0D4] leading-relaxed">
                Whether architecting RESTful services in Node.js and Flask, writing parameterized MySQL queries to guard against vulnerabilities, or fine-tuning YOLO computer vision models, I prioritize code quality, root-cause debugging, and collaborative Git workflows.
              </p>
            </div>

            {/* Truthful Student Statistics Grid (2x2) */}
            <div className="grid grid-cols-2 gap-3.5">
              {STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card glass-card-hover rounded-xl p-4 border border-white/5 relative overflow-hidden group"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#FF4F9A] font-mono tracking-tight group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-white mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#7E879D] mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER: Glowing Japanese Folding Fan Visual Centerpiece (Col 4) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative my-4 lg:my-0">
            <div 
              className="relative w-full max-w-sm aspect-square flex items-center justify-center cursor-pointer group"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleFanDrop}
            >
              {/* Glowing pink backdrop aura */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-t from-[#FF4F9A]/30 to-[#E91E87]/20 blur-3xl" />
              
              {/* The Fan Artwork */}
              <div className="relative z-10 w-full h-full p-2 flex items-center justify-center animate-float">
                <img
                  src={fanImageSrc}
                  alt="Glowing Japanese Sakura Fan decorative centerpiece"
                  className="w-full h-auto max-h-[340px] object-contain drop-shadow-[0_0_35px_rgba(255,79,154,0.45)]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Subtle Japanese Mon / Crest Watermark */}
              <div className="absolute -bottom-2 text-center text-xs font-mono text-[#FFB3D1] tracking-widest uppercase font-semibold">
                RAKSHITHA HK • DIGITAL EXPLORER
              </div>
            </div>
          </div>

          {/* RIGHT: Philosophy & Mission Cards (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Card 1: Who I Am */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 group">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FF4F9A]/15 border border-[#FF4F9A]/30 flex items-center justify-center text-[#FF4F9A]">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-[#FFB3D1] transition-colors">
                  Who I Am
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#B8C0D4] leading-relaxed">
                An ambitious pre-final year engineering student at SVIT who values hands-on coding, continuous problem-solving, and building software that directly serves user needs.
              </p>
            </div>

            {/* Card 2: My Philosophy */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 group">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FF4F9A]/15 border border-[#FF4F9A]/30 flex items-center justify-center text-[#FF4F9A]">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-[#FFB3D1] transition-colors">
                  My Philosophy
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#B8C0D4] leading-relaxed">
                Consistency over shortcuts. True technical mastery comes from building, failing fast, refactoring code, and understanding the core fundamentals beneath modern frameworks.
              </p>
            </div>

            {/* Card 3: What I'm Exploring */}
            <div className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 group">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FF4F9A]/15 border border-[#FF4F9A]/30 flex items-center justify-center text-[#FF4F9A]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-[#FFB3D1] transition-colors">
                  What I'm Exploring
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#B8C0D4] leading-relaxed">
                Deepening hands-on knowledge in Generative AI architectures, vector retrieval (RAG), scalable backend services, and interactive mapping applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
