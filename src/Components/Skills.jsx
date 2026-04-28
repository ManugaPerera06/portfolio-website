import React, { useEffect, useRef } from 'react';

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Python', 'Java', 'JavaScript','TypeScript'],
  },
  {
    title: 'Front-End Development',
    items: ['HTML', 'CSS', 'ReactJS','React Native'],
  },
  {
    title: 'Back-End & Databases',
    items: ['Flask', 'Firebase', 'MySQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'ClickUp', 'Expo'],
  },
  {
    title : 'Soft Skills',
    items: ['Communication', 'Presentation Skills', 'Teamwork', 'Adaptability', 'Empathy'],
  }
];

function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mb-14">
      <span className="font-mono text-xs tracking-widest text-accent uppercase mb-3 block">
        {label}
      </span>
      <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-muted max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}

export { SectionHeader };

function SkillCard({ group, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-card border border-border rounded-2xl p-6 card-hover"
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
      }}
    >
      <h4 className="font-mono font-medium text-white text-xs tracking-widest uppercase mb-5">
        {group.title}
      </h4>
      <div className="flex flex-wrap gap-3">
        {group.items.map((item) => (
          <span
            key={item}
            className="font-mono text-sm px-4 py-2 rounded-full border border-accent/20 bg-accent/10 text-accent cursor-default transition-all duration-200 hover:bg-accent/20 hover:border-accent/40"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="// what I work with"
          title="Skills"
          subtitle="Technical and Interpersonal strengths grouped here for a quick overview."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}