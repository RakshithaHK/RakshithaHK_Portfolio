import React from 'react';
import { LEARNING_JOURNEY } from '../data/portfolioData';
import { Sparkles, Terminal, Code, Cpu, Trophy, Bot, Rocket } from 'lucide-react';

const getMilestoneIcon = (category: string) => {
  switch (category) {
    case 'Coding': return <Terminal className="w-4 h-4 text-[#FF4F9A]" />;
    case 'Web': return <Code className="w-4 h-4 text-[#FFB3D1]" />;
    case 'Backend': return <Cpu className="w-4 h-4 text-[#FF6BAF]" />;
    case 'AI / ML': return <Bot className="w-4 h-4 text-[#FF4F9A]" />;
    case 'Milestone': return <Rocket className="w-4 h-4 text-[#FFB3D1]" />;
    case 'Award': return <Trophy className="w-4 h-4 text-[#FF4F9A]" />;
    default: return <Sparkles className="w-4 h-4 text-[#FF4F9A]" />;
  }
};

export const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-xs uppercase font-mono tracking-widest text-[#FF4F9A] mb-2 font-semibold">
            EVOLUTION OF AN ENGINEER
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl">🌸</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Learning <span className="text-[#FF4F9A]">Journey</span>
            </h2>
            <span className="text-xl">🌸</span>
          </div>
          <p className="mt-3 text-sm sm:text-base text-[#7E879D] max-w-xl mx-auto">
            From first lines of code to computer vision prototypes and generative intelligence exploration.
          </p>
        </div>

        {/* Futuristic Interactive Timeline */}
        <div className="relative border-l border-[#FF4F9A]/30 ml-4 sm:ml-8 md:ml-32 space-y-12 pb-8">
          {LEARNING_JOURNEY.map((milestone, index) => (
            <div key={index} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Cyber Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#080F22] border-2 border-[#FF4F9A] flex items-center justify-center shadow-[0_0_15px_rgba(255,79,154,0.6)] group-hover:scale-125 transition-transform z-10">
                {getMilestoneIcon(milestone.category)}
              </div>

              {/* Year Stamp on Desktop */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-24">
                <span className="text-xs font-mono font-bold text-[#FF4F9A] tracking-wider uppercase">
                  {milestone.year}
                </span>
              </div>

              {/* Card Body */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 relative overflow-hidden">
                <div className="md:hidden inline-block mb-2">
                  <span className="text-xs font-mono font-bold text-[#FF4F9A] px-2.5 py-0.5 rounded-full bg-[#FF4F9A]/15 border border-[#FF4F9A]/30">
                    {milestone.year}
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FFB3D1] transition-colors">
                    {milestone.title}
                  </h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#151F36] text-[#B8C0D4]">
                    {milestone.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#B8C0D4] leading-relaxed mb-4">
                  {milestone.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {milestone.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B1226] text-[#FFB3D1] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
