import React, { useState } from 'react';
import { SectionHeader } from './Skills';

const socialLinks = [
  {
    label: 'GitHub',
    handle: '@ManugaPerera06',
    href: 'https://github.com/ManugaPerera06',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'Manuga Perera',
    href: 'https://www.linkedin.com/in/manuga-perera-332a46334/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'manuga.006@gmail.com',
    href: 'mailto:manuga.006@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Wire up to Formspree, EmailJS, or any backend */
    setSent(true);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-border" />

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(59,158,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="// let's connect"
          title="Get in Touch"
          subtitle="Whether you have an opportunity, a project idea, or just want to say hello — my inbox is open."
        />

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Social links */}
          <div className="flex flex-col gap-4">
            <p className="font-body text-muted text-sm leading-relaxed mb-2">
              I'm currently open to internship opportunities and collaborations. Feel free to reach out through any of these channels.
            </p>

            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-accent/40 hover:bg-card transition-all duration-200 group"
              >
                <span className="text-muted group-hover:text-accent transition-colors">{s.icon}</span>
                <div>
                  <p className="font-display font-semibold text-white text-sm">{s.label}</p>
                  <p className="font-mono text-xs text-muted">{s.handle}</p>
                </div>
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className="ml-auto text-muted/30 group-hover:text-accent transition-colors"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div className="bg-card border border-border rounded-2xl p-6">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-10">
                <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-lg">Message Sent!</h3>
                <p className="font-body text-muted text-sm text-center">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSent(false)}
                  className="font-body text-sm text-accent hover:underline mt-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="font-mono text-xs text-muted mb-1.5 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 font-body text-sm text-white placeholder:text-muted/40 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted mb-1.5 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 font-body text-sm text-white placeholder:text-muted/40 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted mb-1.5 block">Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="What's on your mind?"
                    className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 font-body text-sm text-white placeholder:text-muted/40 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-accent hover:bg-accent-dim font-body font-medium text-white text-sm transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
