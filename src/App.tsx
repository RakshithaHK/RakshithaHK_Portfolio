import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStackMarquee } from './components/TechStackMarquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SakuraBackground } from './components/SakuraBackground';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080F22] text-[#F8F9FF] selection:bg-[#FF4F9A] selection:text-white overflow-x-hidden font-sans">
      {/* Dynamic Cyber Sakura Animated Background */}
      <SakuraBackground />

      {/* 1. Sticky Navbar with capsule styling */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* 2. Full-Screen Hero */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. Tech Stack Infinite Marquee */}
        <TechStackMarquee />

        {/* 4. About Section with Glowing Fan & Student Stats */}
        <About />

        {/* 5. Skills & Technologies */}
        <Skills />

        {/* 6. Featured Projects with Dynamic Category Filtering */}
        <Projects />

        {/* 7. Achievements & Recognition (SIH & Mini Project Expo) */}
        <Achievements />

        {/* 8. Education Section with Sakura Branch Art */}
        <Education />

        {/* 9. Certifications & Learning */}
        <Certifications />

        {/* 10. Futuristic Learning Journey Timeline */}
        <LearningJourney />

        {/* 11. Contact CTA with Validated Form & Quick Email Copy */}
        <Contact />
      </main>

      {/* 12. Minimal Clean Footer */}
      <Footer />

      {/* Resume Viewer Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
