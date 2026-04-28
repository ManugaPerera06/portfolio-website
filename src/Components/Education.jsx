import React from 'react';
import { SectionHeader } from './Skills';

const education = [
  {
    degree: 'BEng (Hons) Software Engineering',
    institution: 'University of Westminster',
    period: '2024 - Present',
    current: true,
  },
  {
    degree: 'Foundation Certificate in Higher Education',
    institution: 'Informatics Institute of Technology',
    period: '2023 - 2024',
    description: 'Completed the Foundation with a Merit pass.',
    current: false,
  },
  {
    degree: 'G.C.E. Ordinary Level Examination 2022(2023)',
    institution: 'Nalanda College',
    period: '2012 - 2023',
    description: 'Completed O/Ls and got 7As and 2Bs',
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-border" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="// where I've studied"
          title="Education"
          subtitle="My academic journey and key milestones."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-10">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-16">
                {/* Dot */}
                <div
                  className={`absolute left-[18px] top-6 w-[17px] h-[17px] rounded-full border-2 flex items-center justify-center ${
                    edu.current
                      ? 'border-accent bg-accent/20'
                      : 'border-border bg-surface'
                  }`}
                  style={{ transform: 'translateX(-50%)' }}
                >
                  {edu.current && (
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-white text-lg">{edu.degree}</h3>
                      <p className="font-body text-accent text-sm mt-0.5">{edu.institution}</p>
                    </div>
                    <span
                      className={`font-mono text-xs px-3 py-1 rounded-full border ${
                        edu.current
                          ? 'border-accent/30 bg-accent/10 text-accent'
                          : 'border-border bg-surface text-muted'
                      }`}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <p className="font-body text-muted text-sm leading-relaxed mb-4">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
