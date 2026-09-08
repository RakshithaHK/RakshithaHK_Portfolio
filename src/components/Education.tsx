import React from 'react';
import { EDUCATION, PORTFOLIO_OWNER } from '../data/portfolioData';
import { GraduationCap, Calendar, BookOpen, MapPin, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-xs uppercase font-mono tracking-widest text-[#FF4F9A] mb-2 font-semibold">
            ACADEMIC FOUNDATION
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl">🌸</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Academic <span className="text-[#FF4F9A]">Education</span>
            </h2>
            <span className="text-xl">🌸</span>
          </div>
          <p className="mt-3 text-sm sm:text-base text-[#7E879D] max-w-xl mx-auto">
            Formal engineering studies in Information Science at Sai Vidya Institute of Technology (SVIT).
          </p>
        </div>

        {/* 2-Column Layout with Glowing Sakura Branch Art inspired by Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Glowing Sakura Branch (Col 4) */}
          <div className="lg:col-span-4 hidden lg:flex justify-center items-center relative">
            <div className="relative w-64 h-[440px] rounded-3xl overflow-hidden glass-card p-3 border border-white/10 shadow-[0_0_40px_rgba(255,79,154,0.2)] animate-float">
              <img
                src={PORTFOLIO_OWNER.assets.branch}
                alt="Glowing Japanese Sakura Branch illustration"
                className="w-full h-full object-cover rounded-2xl drop-shadow-[0_0_25px_rgba(255,79,154,0.5)]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080F22]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-0 right-0 text-center text-xs font-mono text-[#FFB3D1] tracking-widest uppercase">
                学問 • Education & Growth
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Cards (Col 8) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {EDUCATION.map((item) => (
              <div
                key={item.id}
                className="glass-card glass-card-hover rounded-2xl p-7 sm:p-8 border border-white/10 relative overflow-hidden"
              >
                {/* Timeline connector dot */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FF4F9A]/15 border border-[#FF4F9A]/40 flex items-center justify-center text-[#FF4F9A]">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-0.5 rounded-full bg-[#FF4F9A]/15 border border-[#FF4F9A]/30 text-xs font-mono font-bold text-[#FFB3D1]">
                          {item.status}
                        </span>
                        {item.score && (
                          <span className="px-3 py-0.5 rounded-full bg-[#151F36] border border-[#FF4F9A]/40 text-xs font-mono font-bold text-[#FF4F9A]">
                            {item.score}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
                        {item.degree}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#10182D] border border-white/10 text-xs font-mono text-[#FFB3D1]">
                    <Calendar className="w-3.5 h-3.5 text-[#FF4F9A]" />
                    <span>{item.timeline}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#FF6BAF] font-semibold mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{item.institution}</span>
                  <span className="text-[#7E879D]">({PORTFOLIO_OWNER.location})</span>
                </div>

                <p className="text-sm text-[#B8C0D4] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Coursework Focus Areas */}
                <div className="p-4 rounded-xl bg-[#0B1226]/80 border border-white/5">
                  <div className="text-xs uppercase font-mono text-[#FF4F9A] font-semibold mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Key Engineering Coursework & Areas:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.focusAreas.map((area, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#F8F9FF]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#FF4F9A] flex-shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
