import React from 'react';
import { TECH_MARQUEE } from '../data/portfolioData';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Layers, 
  Database, 
  GitBranch, 
  Github, 
  Eye, 
  Brain, 
  Sparkles, 
  FileCode, 
  Server, 
  Globe 
} from 'lucide-react';

const getTechIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'python':
      return <Terminal className="w-4 h-4 text-[#FF4F9A]" />;
    case 'javascript':
      return <Code2 className="w-4 h-4 text-[#FFB3D1]" />;
    case 'html5':
    case 'html':
      return <FileCode className="w-4 h-4 text-[#FF6BAF]" />;
    case 'css3':
    case 'css':
      return <Layers className="w-4 h-4 text-[#FF4F9A]" />;
    case 'java':
      return <Cpu className="w-4 h-4 text-[#FFB3D1]" />;
    case 'flask':
    case 'node.js':
      return <Server className="w-4 h-4 text-[#FF4F9A]" />;
    case 'supabase':
      return <Database className="w-4 h-4 text-[#FF6BAF]" />;
    case 'git':
      return <GitBranch className="w-4 h-4 text-[#FFB3D1]" />;
    case 'github':
      return <Github className="w-4 h-4 text-white" />;
    case 'yolov8':
      return <Eye className="w-4 h-4 text-[#FF4F9A]" />;
    case 'ai':
    case 'machine learning':
      return <Brain className="w-4 h-4 text-[#FF6BAF]" />;
    case 'generative ai':
    case 'rag concepts':
      return <Sparkles className="w-4 h-4 text-[#FF2D8D]" />;
    default:
      return <Globe className="w-4 h-4 text-[#FFB3D1]" />;
  }
};

export const TechStackMarquee: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...TECH_MARQUEE, ...TECH_MARQUEE];

  return (
    <div className="relative w-full py-5 bg-[#0B1226]/90 border-y border-white/10 backdrop-blur-md overflow-hidden z-20">
      {/* Left/Right Vignette Gradients for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#080F22] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#080F22] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-8 sm:gap-12">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#10182D]/70 border border-white/5 hover:border-[#FF4F9A]/40 transition-colors group cursor-default"
            >
              <span className="p-1 rounded-md bg-white/5 group-hover:bg-[#FF4F9A]/15 transition-colors">
                {getTechIcon(item.name)}
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#F8F9FF] group-hover:text-[#FFB3D1] transition-colors whitespace-nowrap">
                {item.name}
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-[#7E879D]">
                {item.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F9A]/40 ml-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
