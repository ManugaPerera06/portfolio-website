import React from 'react';
import { SectionHeader } from './Skills';

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Sri Lanka Social Security Board',
    period: 'August 2026 - Present',
    workMode: 'onsite', // 'onsite' | 'hybrid' | 'remote'
    description:
      'Joined the IT Team to assist in developing and maintaining current web applications.',
    current: true,
    techStack: [
      { label: 'Languages', items: ['JavaScript', 'PHP'] },
      { label: 'Frameworks', items: ['React'] },
      { label: 'Tools & Databases', items: ['MySQL', 'Git', 'GitHub', 'Google Antigravity', 'ClickUp'] },
    ],
  },
];

const workModeStyles = {
  onsite: {
    label: 'Onsite',
    badge: 'border-accent/30 bg-accent/10 text-accent',
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  hybrid: {
    label: 'Hybrid',
    badge: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    icon: (
      <>
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 014-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 01-4 4H3" />
      </>
    ),
  },
  remote: {
    label: 'Remote',
    badge: 'border-green-500/30 bg-green-500/10 text-green-400',
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-border" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="// where I've worked"
          title="Experience"
          subtitle="Professional experience and internships."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => {
              const mode = workModeStyles[exp.workMode];

              return (
                <div key={i} className="relative pl-16">
                  {/* Dot */}
                  <div
                    className={`absolute left-[18px] top-6 w-[17px] h-[17px] rounded-full border-2 flex items-center justify-center ${
                      exp.current
                        ? 'border-accent bg-accent/20'
                        : 'border-border bg-surface'
                    }`}
                    style={{ transform: 'translateX(-50%)' }}
                  >
                    {exp.current && (
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="flex flex-col gap-2">
                        <div>
                          <h3 className="font-display font-bold text-white text-lg">
                            {exp.role}
                          </h3>
                          <p className="font-body text-accent text-sm mt-0.5">
                            {exp.company}
                          </p>
                        </div>

                        {/* Work mode badge */}
                        {mode && (
                          <span
                            className={`inline-flex items-center gap-1.5 self-start font-mono text-xs px-2.5 py-1 rounded-full border ${mode.badge}`}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              {mode.icon}
                            </svg>
                            {mode.label}
                          </span>
                        )}
                      </div>

                      <span
                        className={`font-mono text-xs px-3 py-1 rounded-full border ${
                          exp.current
                            ? 'border-accent/30 bg-accent/10 text-accent'
                            : 'border-border bg-surface text-muted'
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-body text-muted text-sm leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-col gap-2 border-t border-border pt-4">
                      {exp.techStack.map((row) => (
                        <div key={row.label} className="flex items-baseline gap-2">
                          <span className="font-mono text-xs text-accent font-medium shrink-0">
                            {row.label}:
                          </span>
                          <span className="font-body text-sm text-muted">
                            {row.items.join(', ')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}