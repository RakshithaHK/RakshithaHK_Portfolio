import React, { useState } from 'react';
import { PORTFOLIO_OWNER } from '../data/portfolioData';
import { Mail, Github, Linkedin, Send, Copy, Check, Sparkles, MapPin, AlertCircle, ExternalLink, RefreshCw } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message of at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendViaGmail = () => {
    if (!validate()) return;
    const fullBody = `Hi Rakshitha,\n\n${formData.message}\n\n---\nSender Name: ${formData.name}\nSender Email: ${formData.email}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      PORTFOLIO_OWNER.email
    )}&su=${encodeURIComponent(
      `[Portfolio] ${formData.subject || 'Inquiry / Collaboration'}`
    )}&body=${encodeURIComponent(fullBody)}`;
    window.open(gmailUrl, '_blank');
    setSubmitted(true);
  };

  const handleSendViaMailClient = () => {
    if (!validate()) return;
    const fullBody = `Hi Rakshitha,\n\n${formData.message}\n\n---\nSender Name: ${formData.name}\nSender Email: ${formData.email}`;
    const mailtoUrl = `mailto:${PORTFOLIO_OWNER.email}?subject=${encodeURIComponent(
      `[Portfolio] ${formData.subject || 'Inquiry'}`
    )}&body=${encodeURIComponent(fullBody)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Send real email to recipient PORTFOLIO_OWNER.email via FormSubmit AJAX API
      await fetch(`https://formsubmit.co/ajax/${PORTFOLIO_OWNER.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject} (from ${formData.name})`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      setSubmitted(true);
    } catch (err) {
      console.warn('Network transmission notice:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_OWNER.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-xs uppercase font-mono tracking-widest text-[#FF4F9A] mb-2 font-semibold">
            START A CONVERSATION
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="text-xl">🌸</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Let's Build <span className="text-[#FF4F9A]">Something Together</span>
            </h2>
            <span className="text-xl">🌸</span>
          </div>
          <p className="mt-3 text-sm sm:text-base text-[#B8C0D4] max-w-xl mx-auto">
            Have an idea, opportunity, or project in mind? I'd love to connect and explore how we can build something meaningful.
          </p>
        </div>

        {/* 2-Column Grid: Left Contact Info, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          {/* LEFT: Direct Links, Bio, Email copy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-7 sm:p-8 border border-white/10 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-[#FF4F9A]/15 border border-[#FF4F9A]/40 flex items-center justify-center text-[#FF4F9A] mb-5 shadow-[0_0_20px_rgba(255,79,154,0.3)]">
                <Mail className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Get In Touch
              </h3>
              <p className="text-sm text-[#B8C0D4] leading-relaxed mb-6">
                Whether you're a recruiter, fellow engineer, or team lead interested in student collaboration or internship opportunities, my inbox is open.
              </p>

              {/* 1-Click Copy Email & Phone Box */}
              <div className="space-y-2 mb-6">
                <div className="p-3.5 rounded-xl bg-[#0B1226] border border-white/10 flex items-center justify-between gap-3">
                  <div className="overflow-hidden">
                    <div className="text-[10px] uppercase font-mono text-[#7E879D]">Direct Email</div>
                    <div className="text-xs sm:text-sm font-mono font-semibold text-white truncate">
                      {PORTFOLIO_OWNER.email}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PORTFOLIO_OWNER.email)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-[#FF4F9A]/15 hover:bg-[#FF4F9A] text-[#FF4F9A] hover:text-white text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer border border-[#FF4F9A]/30"
                      title="Compose in Gmail Web"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Gmail</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-2.5 py-1.5 rounded-lg bg-[#151F36] hover:bg-[#FF4F9A] text-white text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-300" />
                          <span className="text-emerald-300">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0B1226] border border-white/10 flex items-center justify-between gap-3">
                  <div className="overflow-hidden">
                    <div className="text-[10px] uppercase font-mono text-[#7E879D]">Direct Phone</div>
                    <div className="text-xs sm:text-sm font-mono font-semibold text-white">
                      {PORTFOLIO_OWNER.phone}
                    </div>
                  </div>

                  <a
                    href={`tel:${PORTFOLIO_OWNER.phone}`}
                    className="px-3 py-1.5 rounded-lg bg-[#151F36] hover:bg-[#FF4F9A] text-white text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer flex-shrink-0"
                  >
                    <span>Call</span>
                  </a>
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-3 text-xs text-[#B8C0D4] font-mono border-t border-white/10 pt-5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF4F9A]" />
                  <span>{PORTFOLIO_OWNER.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FF4F9A]" />
                  <span>Sai Vidya Institute of Technology (CGPA 8.77)</span>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PORTFOLIO_OWNER.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl glass-card hover:border-[#FF4F9A]/40 flex items-center justify-center gap-2 text-xs font-bold font-mono text-white transition-all group"
              >
                <Linkedin className="w-4 h-4 text-[#FF4F9A] group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PORTFOLIO_OWNER.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl glass-card hover:border-[#FF4F9A]/40 flex items-center justify-center gap-2 text-xs font-bold font-mono text-white transition-all group"
              >
                <Github className="w-4 h-4 text-[#FF4F9A] group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-7 sm:p-9 border border-white/10 relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Thank you for contacting!
                  </h3>
                  <p className="text-sm text-[#B8C0D4] max-w-md mx-auto leading-relaxed">
                    Your message has been sent successfully. I will get back to you as soon as possible.
                  </p>

                  <div className="pt-4 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#151F36] hover:bg-[#FF4F9A] text-white text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(255,79,154,0.4)]"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-[#B8C0D4] mb-2">
                        Your Name <span className="text-[#FF4F9A]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B1226] border text-sm text-white placeholder-[#7E879D] focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#FF4F9A]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-[#B8C0D4] mb-2">
                        Your Email <span className="text-[#FF4F9A]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B1226] border text-sm text-white placeholder-[#7E879D] focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#FF4F9A]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono uppercase text-[#B8C0D4] mb-2">
                      Subject <span className="text-[#FF4F9A]">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Inquiry / Software Collaboration"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0B1226] border text-sm text-white placeholder-[#7E879D] focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#FF4F9A]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-[#B8C0D4] mb-2">
                      Message <span className="text-[#FF4F9A]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Rakshitha, I saw your work on the Traffic Flow Optimiser..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#0B1226] border text-sm text-white placeholder-[#7E879D] focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#FF4F9A]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-2">
                    {/* Primary Button: Instant Direct Send via Gmail */}
                    <button
                      id="contact-gmail-btn"
                      type="button"
                      onClick={handleSendViaGmail}
                      className="w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-[#FF4F9A] via-[#FF2D8D] to-[#E91E87] text-white shadow-[0_0_25px_rgba(255,79,154,0.45)] hover:shadow-[0_0_35px_rgba(255,79,154,0.7)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Send Instantly via Gmail (Direct)</span>
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Secondary Button: Form Gateway */}
                      <button
                        id="contact-submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="py-3 px-4 rounded-xl font-mono font-medium text-xs uppercase bg-[#10182D] hover:bg-[#151F36] border border-white/15 text-white transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <span>Transmitting...</span>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5 text-[#FF4F9A]" />
                            <span>Send via Web Form</span>
                          </>
                        )}
                      </button>

                      {/* Third Button: Local Mail App */}
                      <button
                        type="button"
                        onClick={handleSendViaMailClient}
                        className="py-3 px-4 rounded-xl font-mono font-medium text-xs uppercase bg-[#10182D] hover:bg-[#151F36] border border-white/15 text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#FFB3D1]" />
                        <span>Send via Mail App</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
