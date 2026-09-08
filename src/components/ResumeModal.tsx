import React from 'react';
import { PORTFOLIO_OWNER, PROJECTS, EDUCATION } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0B1226] border border-[#FF4F9A]/40 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#10182D] border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4F9A] shadow-[0_0_8px_#FF4F9A]" />
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Rakshitha_HK_Resume.pdf
            </span>
            <span className="text-[10px] font-mono text-[#FFB3D1] bg-[#151F36] px-2 py-0.5 rounded border border-[#FF4F9A]/30 hidden sm:inline">
              CGPA: 8.87
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-[#151F36] hover:bg-[#FF4F9A] text-white text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(255,79,154,0.4)]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#B8C0D4] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#080F22] text-[#F8F9FF] space-y-6 print:bg-white print:text-black print:p-4">
          {/* Header */}
          <div className="border-b border-white/15 pb-5 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              {PORTFOLIO_OWNER.name}
            </h1>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-1.5 gap-x-4 text-xs text-[#B8C0D4] font-mono mt-2.5">
              <a
                href={`tel:${PORTFOLIO_OWNER.phone}`}
                className="flex items-center gap-1 hover:text-[#FF4F9A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF4F9A]" />
                <span>{PORTFOLIO_OWNER.phone}</span>
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF4F9A]" />
                <span>{PORTFOLIO_OWNER.location}</span>
              </span>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a
                href={`mailto:${PORTFOLIO_OWNER.email}`}
                className="flex items-center gap-1 hover:text-[#FF4F9A] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF4F9A]" />
                <span>{PORTFOLIO_OWNER.email}</span>
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a
                href={PORTFOLIO_OWNER.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-[#FF4F9A] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#FF4F9A]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-white/20 hidden sm:inline">•</span>
              <a
                href={PORTFOLIO_OWNER.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-[#FF4F9A] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#FF4F9A]" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase font-mono tracking-widest text-[#FF4F9A] font-bold border-b border-white/10 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-[13px] text-[#C4CDDE] leading-relaxed">
              Information Science Engineering student (CGPA 8.87) with hands-on experience across the full software development lifecycle requirements, design, coding, testing, debugging, and deployment. Built and validated backend systems, REST APIs, and full-stack applications independently and in teams, with a consistent focus on code quality, edge-case handling, and root-cause debugging. Proficient in Python, Java, C, and JavaScript with working knowledge of SQL/NoSQL databases, Git-based collaborative workflows, and Agile practices. Motivated to apply strong problem solving and analytical skills to real world software challenges.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase font-mono tracking-widest text-[#FF4F9A] font-bold border-b border-white/10 pb-1">
              Education
            </h2>
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="text-xs">
                <div className="flex flex-wrap justify-between items-baseline gap-1">
                  <span className="font-bold text-white text-sm">{edu.institution}</span>
                  <span className="font-mono text-[#FFB3D1]">{edu.timeline}</span>
                </div>
                <div className="text-xs text-[#B8C0D4] font-medium mt-0.5">
                  {edu.degree} | <span className="text-[#FF4F9A] font-mono font-semibold">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-2.5">
            <h2 className="text-xs uppercase font-mono tracking-widest text-[#FF4F9A] font-bold border-b border-white/10 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              <div>
                <span className="font-bold text-white font-mono">Languages: </span>
                <span className="text-[#C4CDDE]">Python, Java, C, JavaScript, PHP, HTML5, CSS3</span>
              </div>
              <div>
                <span className="font-bold text-white font-mono">Software Development: </span>
                <span className="text-[#C4CDDE]">Object-Oriented Programming, Data Structures, REST API Design, Unit Testing & Debugging, Software Documentation, SDLC</span>
              </div>
              <div>
                <span className="font-bold text-white font-mono">Backend & Databases: </span>
                <span className="text-[#C4CDDE]">Flask, Node.js, PHP (server-side), MySQL, MongoDB, SQL (PostgreSQL-compatible)</span>
              </div>
              <div>
                <span className="font-bold text-white font-mono">Frontend: </span>
                <span className="text-[#C4CDDE]">HTML5, CSS3, JavaScript, Tailwind CSS, Responsive Design, AJAX, jQuery</span>
              </div>
              <div>
                <span className="font-bold text-white font-mono">Tools & Methodologies: </span>
                <span className="text-[#C4CDDE]">Git, GitHub (code reviews, branch-based collaboration), Agile/Scrum, Docker, CI/CD concepts, Vercel, XAMPP</span>
              </div>
              <div>
                <span className="font-bold text-white font-mono">Data & ML: </span>
                <span className="text-[#C4CDDE]">Pandas, TensorFlow, YOLO (custom fine-tuning), LSTM/GNN, Power BI, Excel</span>
              </div>
              <div>
                <span className="font-bold text-white font-mono">Soft Skills: </span>
                <span className="text-[#C4CDDE]">Analytical Thinking, Problem Solving, Team Collaboration, Adaptability, Critical Thinking</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase font-mono tracking-widest text-[#FF4F9A] font-bold border-b border-white/10 pb-1">
              Projects
            </h2>
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="p-3.5 rounded-xl bg-[#10182D]/70 border border-white/5 space-y-2">
                <div className="flex flex-wrap justify-between items-baseline gap-1">
                  <div>
                    <span className="font-bold text-white text-sm">{proj.title}</span>
                    <span className="text-xs text-[#FF6BAF] font-mono"> — {proj.subtitle}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#151F36] text-[#FFB3D1]">
                    {proj.technologies.slice(0, 5).join(' · ')}
                  </span>
                </div>
                <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#C4CDDE] leading-relaxed">
                  {proj.bullets.map((bullet, idx) => (
                    <li key={idx} className="marker:text-[#FF4F9A]">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Leadership & Extracurriculars */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase font-mono tracking-widest text-[#FF4F9A] font-bold border-b border-white/10 pb-1">
              Leadership & Extracurriculars
            </h2>
            <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#C4CDDE]">
              <li className="marker:text-[#FF4F9A]">
                <strong className="text-white">Sanchalana (Cultural Fest) Coordinator</strong> — led cross team coordination for a department wide event.
              </li>
              <li className="marker:text-[#FF4F9A]">
                <strong className="text-white">Member, ISE Club and NSS</strong>; <span className="text-[#FF4F9A] font-medium">Department level rank holder</span>.
              </li>
              <li className="marker:text-[#FF4F9A]">
                <strong className="text-white">Hostel Student Coordinator and Student Placement Coordinator</strong> — managed communication between students and administration.
              </li>
              <li className="marker:text-[#FF4F9A]">
                <strong className="text-white">Smart India Hackathon (SIH) Participant & Mini Project Expo Second Runner-Up</strong>.
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#10182D] border-t border-white/10 flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-[#7E879D] font-mono">
            Rakshitha HK • ISE Dept, SVIT Bengaluru • {PORTFOLIO_OWNER.email}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#151F36] hover:bg-white/10 text-white text-xs font-mono transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
