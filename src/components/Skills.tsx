import React, { useState } from 'react';
import { SKILL_CATEGORIES, SkillItem } from '../data/portfolioData';
import { 
  Terminal, 
  Code2, 
  Cpu, 
  Layout, 
  Palette, 
  FileCode, 
  Server, 
  Zap, 
  Database, 
  Eye, 
  Brain, 
  Sparkles, 
  BookOpen, 
  GitBranch, 
  Github, 
  Cloud,
  CheckCircle2
} from 'lucide-react';

const renderIcon = (name: string) => {
  const iconProps = { className: "w-5 h-5 text-[#FF4F9A]" };
  switch (name) {
    case 'Terminal': return <Terminal {...iconProps} />;
    case 'Code2': return <Code2 {...iconProps} />;
    case 'Cpu': return <Cpu {...iconProps} />;
    case 'Layout': return <Layout {...iconProps} />;
    case 'Palette': return <Palette {...iconProps} />;
    case 'FileCode': return <FileCode {...iconProps} />;
    case 'Server': return <Server {...iconProps} />;
    case 'Zap': return <Zap {...iconProps} />;
    case 'Database': return <Database {...iconProps} />;
    case 'Eye': return <Eye {...iconProps} />;
    case 'Brain': return <Brain {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} />;
    case 'BookOpen': return <BookOpen {...iconProps} />;
    case 'GitBranch': return <GitBranch {...iconProps} />;
    case 'Github': return <Github {...iconProps} />;
    case 'Cloud': return <Cloud {...iconProps} />;
    default: return <Code2 {...iconProps} />;
  }
};

const getProficiencyColor = (level: SkillItem['proficiency']) => {
  switch (level) {
    case 'Comfortable':
      return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
    case 'Working Knowledge':
      return 'bg-[#FF4F9A]/15 text-[#FFB3D1] border-[#FF4F9A]/30';
    case 'Exploring':
      return 'bg-violet-500/15 text-violet-300 border-violet-500/30';
    case 'Learning':
      return 'bg-sky-500/15 text-sky-300 border-sky-500/30';
    default:
      return 'bg-white/10 text-white/80 border-white/20';
  }
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Competencies' },
    ...SKILL_CATEGORIES.map((c) => ({ id: c.id, label: c.title }))
  ];

  const displayedCategories = activeTab === 'all' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="text-xs uppercase font-mono tracking-widest text-[#FF4F9A] mb-2 font-semibold">
            TECHNICAL REPERTOIRE
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl">🌸</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Skills & <span className="text-[#FF4F9A]">Technologies</span>
            </h2>
            <span className="text-xl">🌸</span>
          </div>
          <p className="mt-3 text-sm sm:text-base text-[#7E879D] max-w-xl mx-auto">
            Grounded in core engineering fundamentals, real software tools, and active exploration of modern AI stacks.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#FF4F9A] text-white shadow-[0_0_18px_rgba(255,79,154,0.4)]'
                    : 'bg-[#10182D] text-[#B8C0D4] hover:text-white hover:bg-[#151F36] border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF4F9A] shadow-[0_0_8px_#FF4F9A]" />
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-[#7E879D] ml-auto">
                  {category.skills.length} competencies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-[#0B1226] border border-white/10 group-hover:border-[#FF4F9A]/40 transition-colors">
                            {renderIcon(skill.iconName)}
                          </div>
                          <div>
                            <h4 className="font-bold text-white group-hover:text-[#FFB3D1] transition-colors text-base">
                              {skill.name}
                            </h4>
                            <span className="text-[11px] text-[#7E879D] font-mono">
                              {category.title}
                            </span>
                          </div>
                        </div>

                        {/* Honest Proficiency Label (No fake percentages) */}
                        <span
                          className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${getProficiencyColor(
                            skill.proficiency
                          )}`}
                        >
                          {skill.proficiency}
                        </span>
                      </div>

                      {skill.description && (
                        <p className="text-xs text-[#B8C0D4] leading-relaxed mt-2.5">
                          {skill.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-3.5 mt-3.5 border-t border-white/5 flex items-center justify-between text-[11px] text-[#7E879D] font-mono">
                      <span className="flex items-center gap-1 text-[#FFB3D1]">
                        <CheckCircle2 className="w-3 h-3 text-[#FF4F9A]" />
                        Active Practice
                      </span>
                      <span className="text-white/40">Verified Skill</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
