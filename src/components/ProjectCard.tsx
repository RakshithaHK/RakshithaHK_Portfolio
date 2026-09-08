import React from 'react';
import { Project } from '../data/portfolioData';
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  return (
    <div
      className="glass-card rounded-2xl overflow-hidden border border-white/10 group transition-all duration-300 hover:-translate-y-2 hover:border-[#FF4F9A]/50 hover:shadow-[0_15px_35px_-10px_rgba(255,79,154,0.25)] flex flex-col h-full cursor-pointer"
      onClick={() => onSelectProject(project)}
    >
      {/* Project Thumbnail with Zoom on Hover */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#080F22]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10182D] via-transparent to-black/30" />

        {/* Category Badge */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080F22]/85 backdrop-blur-md border border-white/10 text-xs font-mono font-medium text-[#FFB3D1]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F9A]" />
          <span>{project.category}</span>
        </div>

        {/* Status Pill */}
        <div className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-mono text-white/90 uppercase tracking-wider">
          {project.status}
        </div>

        {/* View Project overlay button on hover */}
        <div className="absolute inset-0 bg-[#080F22]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-4 py-2 rounded-full bg-[#FF4F9A] text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_#FF4F9A] flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-[#FFB3D1] transition-colors leading-snug">
              {project.title}
            </h3>
            {project.subtitle && (
              <div className="text-xs font-mono text-[#FF6BAF] mt-0.5">
                {project.subtitle}
              </div>
            )}
          </div>

          <p className="text-xs sm:text-sm text-[#B8C0D4] leading-relaxed mb-4 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Problem Being Solved snippet */}
          <div className="p-3 rounded-xl bg-[#0B1226]/80 border border-white/5 mb-4">
            <div className="text-[10px] uppercase font-mono text-[#FF4F9A] font-semibold mb-1">
              Problem Solved:
            </div>
            <p className="text-xs text-[#7E879D] line-clamp-2 leading-relaxed">
              {project.problemSolved}
            </p>
          </div>
        </div>

        {/* Technologies used tags */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#151F36] text-[#B8C0D4] border border-white/5 group-hover:border-[#FF4F9A]/30 group-hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Card Footer Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectProject(project);
              }}
              className="text-xs font-semibold text-[#FF4F9A] hover:text-[#FFB3D1] flex items-center gap-1 group/btn cursor-pointer"
            >
              <span>View Details</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    try {
                      const w = window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                      if (w) w.focus();
                    } catch (err) {
                      console.warn(err);
                    }
                  }}
                  title="View Source on GitHub"
                  className="p-2 rounded-lg bg-[#151F36] text-[#B8C0D4] hover:text-white hover:bg-[#1A2640] hover:border-[#FF4F9A]/40 border border-white/5 transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    try {
                      const w = window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                      if (w) w.focus();
                    } catch (err) {
                      console.warn(err);
                    }
                  }}
                  title="Live Demo"
                  className="p-2 rounded-lg bg-[#151F36] text-[#B8C0D4] hover:text-[#FF4F9A] hover:bg-[#1A2640] border border-white/5 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
