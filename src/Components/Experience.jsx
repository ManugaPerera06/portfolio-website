import React from 'react';
import { SectionHeader } from './Skills';

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Sri Lanka Social Security Board',
    period: 'August 2026 - Present',
    description:
      'Joined the IT Team to assist in developing and maintaining current web applications.',
    current: true,
    techStack: [
      { label: 'Languages', items: ['JavaScript', 'PHP'] },
      { label: 'Frameworks', items: ['React'] },
      { label: 'Tools & Databases', items: ['MySQL', 'Git', 'GitHub', 'Google Antigravity'] },
    ],
  },
];

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
            {experiences.map((exp, i) => (
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
                    <div>
                      <h3 className="font-display font-bold text-white text-lg">
                        {exp.role}
                      </h3>
                      <p className="font-body text-accent text-sm mt-0.5">
                        {exp.company}
                      </p>
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

                  {/* Tech stack — label: item, item, item */}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}