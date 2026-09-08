import React, { useState } from 'react';
import { CERTIFICATIONS, CertificationItem } from '../data/portfolioData';
import { Award, ExternalLink, Calendar, CheckCircle, FileCheck, X } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-xs uppercase font-mono tracking-widest text-[#FF4F9A] mb-2 font-semibold">
            CONTINUOUS SKILL VALIDATION
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl">🌸</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Certificates & <span className="text-[#FF4F9A]">Learning</span>
            </h2>
            <span className="text-xl">🌸</span>
          </div>
          <p className="mt-3 text-sm sm:text-base text-[#7E879D] max-w-xl mx-auto">
            Professional achievements, self-paced technical courses, and skill certifications.
          </p>
        </div>

        {/* Certificates Grid (Inspired by Reference Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Title and Glowing Year */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FFB3D1] transition-colors leading-snug">
                    {cert.name}
                  </h3>
                  <span className="text-sm font-mono font-bold text-[#FF4F9A] pink-glow-text flex-shrink-0">
                    {cert.year}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#7E879D] uppercase tracking-wider mb-5 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#FF4F9A]" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Tags in rounded pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full bg-[#151F36] text-[11px] font-mono text-[#B8C0D4] border border-white/5 group-hover:border-[#FF4F9A]/30 group-hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate Action Link */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF4F9A] hover:text-[#FFB3D1] transition-colors cursor-pointer group/btn"
                >
                  <span className="w-3.5 h-3.5 rounded-full border border-[#FF4F9A] flex items-center justify-center text-[9px]">
                    ●
                  </span>
                  <span>View Certificate</span>
                </button>

                {cert.isPlaceholder && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#7E879D]">
                    Placeholder
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-[#0B1226] border border-[#FF4F9A]/40 rounded-3xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-[#FF4F9A] text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-[#FF4F9A]/15 border border-[#FF4F9A]/40 flex items-center justify-center text-[#FF4F9A] mb-4">
              <FileCheck className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono text-[#FF4F9A] uppercase tracking-wider mb-1">
              Certificate Credential Preview
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {selectedCert.name}
            </h3>
            <p className="text-xs text-[#7E879D] font-mono mb-4">
              Issued by: {selectedCert.issuer} • Year: {selectedCert.year}
            </p>

            <div className="p-4 rounded-xl bg-[#10182D] border border-white/10 mb-6 space-y-2">
              <div className="text-xs font-semibold text-white">Topics Covered:</div>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skills.map((s) => (
                  <span key={s} className="text-xs font-mono px-2.5 py-1 rounded bg-[#151F36] text-[#FFB3D1]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
              <span className="text-[#7E879D]">Status: Verified Coursework</span>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-full bg-[#FF4F9A] text-white font-bold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
