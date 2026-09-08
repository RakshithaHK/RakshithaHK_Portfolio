import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { X, ExternalLink, Github, Sparkles, CheckCircle, ArrowRight, Copy, Check } from 'lucide-react';

const CATEGORIES = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [copiedRepoUrl, setCopiedRepoUrl] = useState<boolean>(false);

  const handleOpenExternal = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    if (!url || url === '#') return;
    try {
      const opened = window.open(url, '_blank', 'noopener,noreferrer');
      if (opened) {
        opened.focus();
      }
    } catch (err) {
      console.warn('Window open notice:', err);
    }
  };

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="text-xs uppercase font-mono tracking-widest text-[#FF4F9A] mb-2 font-semibold">
            ENGINEERING WORK & EXPLORATIONS
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl">🌸</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="text-[#FF4F9A]">Projects</span>
            </h2>
            <span className="text-xl">🌸</span>
          </div>
          <p className="mt-3 text-sm sm:text-base text-[#7E879D] max-w-xl mx-auto">
            Practical applications spanning computer vision, intelligent mapping, web services, and AI architectures.
          </p>

          {/* Dynamic Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#FF4F9A] text-white shadow-[0_0_20px_rgba(255,79,154,0.45)] scale-105'
                    : 'bg-[#10182D] text-[#B8C0D4] hover:text-white hover:bg-[#151F36] border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(p) => setActiveProjectModal(p)}
            />
          ))}
        </div>

        {/* Filter Empty State (Safety fallback) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 glass-card rounded-2xl p-8 max-w-md mx-auto">
            <Sparkles className="w-8 h-8 text-[#FF4F9A] mx-auto mb-3" />
            <p className="text-white font-semibold">No projects under this filter yet.</p>
            <p className="text-xs text-[#7E879D] mt-1">Switch back to "All" to view current project portfolio.</p>
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-4 py-2 rounded-full text-xs bg-[#FF4F9A] text-white font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {activeProjectModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveProjectModal(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#0B1226] border border-white/15 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-60 w-full overflow-hidden bg-black flex-shrink-0">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1226] via-transparent to-black/40" />

              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-[#FF4F9A] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#FF4F9A] text-white text-xs font-mono font-bold">
                  {activeProjectModal.category}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-xs font-mono">
                  {activeProjectModal.status}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {activeProjectModal.title}
                </h3>
                {activeProjectModal.subtitle && (
                  <div className="text-sm font-mono text-[#FF6BAF] mb-3">
                    {activeProjectModal.subtitle}
                  </div>
                )}
                <p className="text-sm text-[#B8C0D4] leading-relaxed">
                  {activeProjectModal.shortDescription}
                </p>
              </div>

              {/* Problem Solved */}
              <div className="p-4 rounded-2xl bg-[#10182D] border border-white/10">
                <h4 className="text-xs uppercase font-mono font-bold text-[#FF4F9A] mb-1.5 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Problem Solved & Real-World Context</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#F8F9FF] leading-relaxed">
                  {activeProjectModal.problemSolved}
                </p>
              </div>

              {/* Key Engineering Highlights from Resume */}
              {activeProjectModal.bullets && activeProjectModal.bullets.length > 0 && (
                <div className="p-4 rounded-2xl bg-[#10182D]/80 border border-white/10">
                  <h4 className="text-xs uppercase font-mono font-bold text-[#FF4F9A] mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Key Engineering Work & Results</span>
                  </h4>
                  <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm text-[#C4CDDE] leading-relaxed">
                    {activeProjectModal.bullets.map((b, idx) => (
                      <li key={idx} className="marker:text-[#FF4F9A]">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs uppercase font-mono text-[#7E879D] mb-2 font-semibold">
                  Technologies & Architecture:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-[#151F36] text-xs font-mono text-[#FFB3D1] border border-[#FF4F9A]/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  {activeProjectModal.githubUrl && (
                    <div className="flex items-center gap-1.5">
                      <a
                        href={activeProjectModal.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleOpenExternal(e, activeProjectModal.githubUrl)}
                        className="px-5 py-2.5 rounded-xl bg-[#10182D] border border-white/20 text-white hover:border-[#FF4F9A] hover:bg-[#151F36] text-xs font-bold font-mono flex items-center gap-2 transition-all cursor-pointer group shadow-sm hover:shadow-[0_0_20px_rgba(255,79,154,0.35)]"
                        title={`Open ${activeProjectModal.githubUrl} in new tab`}
                      >
                        <Github className="w-4 h-4 text-[#FF4F9A] group-hover:scale-110 transition-transform" />
                        <span>View on GitHub</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#7E879D] group-hover:text-white transition-colors" />
                      </a>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(activeProjectModal.githubUrl);
                          setCopiedRepoUrl(true);
                          setTimeout(() => setCopiedRepoUrl(false), 2200);
                        }}
                        title="Copy GitHub Repository URL"
                        className="p-2.5 rounded-xl bg-[#10182D] border border-white/15 text-[#B8C0D4] hover:text-white hover:border-[#FF4F9A]/40 hover:bg-[#151F36] transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                      >
                        {copiedRepoUrl ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-[11px] text-emerald-400 font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#7E879D]" />
                            <span className="text-[11px] text-[#7E879D]">Copy URL</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {activeProjectModal.liveUrl && activeProjectModal.liveUrl !== '#' && (
                    <a
                      href={activeProjectModal.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleOpenExternal(e, activeProjectModal.liveUrl)}
                      className="px-5 py-2.5 rounded-xl bg-[#FF4F9A] text-white hover:bg-[#FF2D8D] text-xs font-bold font-mono flex items-center gap-2 shadow-[0_0_15px_#FF4F9A] transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Live Demo</span>
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0">
                  <div className="text-[11px] font-mono text-[#7E879D] truncate max-w-[200px] hidden md:block">
                    {activeProjectModal.githubUrl.replace('https://github.com/', '')}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(null)}
                    className="text-xs font-semibold text-[#7E879D] hover:text-white transition-colors cursor-pointer px-3 py-1.5 rounded-lg hover:bg-white/5"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
