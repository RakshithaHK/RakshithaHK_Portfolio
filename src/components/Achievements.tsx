import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Trophy, Award, Sparkles, Calendar, ArrowUpRight } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-xs uppercase font-mono tracking-widest text-[#FF4F9A] mb-2 font-semibold">
            COMPETITIVE HONORS & RECOGNITION
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl">🌸</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Achievements & <span className="text-[#FF4F9A]">Recognition</span>
            </h2>
            <span className="text-xl">🌸</span>
          </div>
          <p className="mt-3 text-sm sm:text-base text-[#7E879D] max-w-xl mx-auto">
            Milestones and competitive engineering events demonstrating teamwork, rapid prototyping, and software execution.
          </p>
        </div>

        {/* Achievement Cards Grid (3-column responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover rounded-2xl p-7 sm:p-8 border border-white/10 relative overflow-hidden group"
            >
              {/* Subtle neon corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF4F9A]/20 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#FF4F9A]/35 transition-colors" />

              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF4F9A]/20 to-[#E91E87]/10 border border-[#FF4F9A]/40 flex items-center justify-center text-[#FF4F9A] shadow-[0_0_20px_rgba(255,79,154,0.25)] group-hover:scale-110 transition-transform">
                  {index === 0 ? (
                    <Trophy className="w-7 h-7 text-[#FF4F9A]" />
                  ) : (
                    <Award className="w-7 h-7 text-[#FFB3D1]" />
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#151F36] border border-white/10 text-xs font-mono text-[#FFB3D1] flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#FF4F9A]" />
                    <span>{item.year}</span>
                  </span>
                </div>
              </div>

              {/* Award Badge Pill & Optional Project Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <div className="inline-block px-3 py-1 rounded-full bg-[#FF4F9A]/15 border border-[#FF4F9A]/30 text-xs font-bold font-mono text-[#FFB3D1]">
                  {item.award}
                </div>
                {item.projectName && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151F36] border border-[#FF4F9A]/40 text-xs font-mono text-[#FFB3D1]">
                    <span className="text-[#FF4F9A] font-semibold text-[10px] uppercase">Project:</span>
                    <span className="font-bold text-white">{item.projectName.toUpperCase()}</span>
                  </div>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#FFB3D1] transition-colors">
                {item.title}
              </h3>

              <div className="text-xs font-mono text-[#7E879D] uppercase tracking-wider mb-4">
                {item.organization}
              </div>

              <p className="text-xs sm:text-sm text-[#B8C0D4] leading-relaxed">
                {item.projectName ? (
                  <>
                    Awarded Second Runner-Up for demonstrating{' '}
                    <span className="text-white font-semibold underline decoration-[#FF4F9A]/60 decoration-2 underline-offset-2">
                      {item.projectName}
                    </span>{' '}
                    — a real-time intelligent traffic management and adaptive signal control software prototype evaluated on technical execution, innovation, and real-world applicability.
                  </>
                ) : (
                  item.description
                )}
              </p>

              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#7E879D]">
                <span className="text-[#FF4F9A] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Verified Student Honor
                </span>
                <span>Engineering Excellence</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
