import React from 'react';
import { SectionHeader } from './Skills';

const projects = [
  {
    title: 'Teera',
    description: 'An AI-powered mobile application for the Cinnamon farmers with the ability to predict the spreading location of the identified disease and give recommended treatment options for the identified disease.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Flask', 'Python', 'Tensorflow', 'Numpy', 'Keras'],
    gradient: 'from-green-500/20 to-green-500/10',
    github: 'https://github.com/Sajani-Prabhashika/SDGP',
  },
  {
    title: 'FixIT',
    description: 'A mobile application prototype designed to connect homeowners with verified repair professionals for quick and reliable home maintenance services.',
    tags: ['Flutter', 'Dart'],
    gradient: 'from-purple-500/25 to-cyan-500/10',
    github: 'https://github.com/SemikaVidusha/Fix-IT-Codesprint',
  },
  {
    title: 'Portfolio Website',
    description: 'Developed to showcase skills, projects and education.',
    tags: ['ReactJS', 'Tailwind CSS', 'JavaScript', 'Vite'],
    gradient: 'from-cyan-500/10 to-blue-500/10',
    github: 'https://github.com/ManugaPerera06/portfolio-website',
  },
  {
    title: 'Traffic Flow Manager',
    description: 'This system gets traffic data of two junctions from CSV files provided, analyze them and returns an output to get better decisions on traffic flow on each junction.',
    tags: ['Python'],
    gradient: 'from-orange-500/20 to-amber-500/10',
    github: 'https://github.com/ManugaPerera06/Traffic_Flow_Management',
  },
];

function ProjectCard({ project }) {
  return (
    <div
      className={`relative bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Gradient bg accent — MUST be directly here */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none`}
      />

      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Top row — title + GitHub button */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="font-display font-bold text-white text-lg leading-tight">
            {project.title}
          </h3>

          {project.github && (
            
              <a href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg border border-border bg-surface text-muted hover:text-white hover:border-accent/40 hover:bg-accent/10 transition-all duration-200 shrink-0"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>
          )}
        </div>

        <p className="font-body text-muted text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2.5 py-1 rounded-lg bg-surface border border-border text-muted/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-border" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="// what I've built"
          title="Projects"
          subtitle="A selection of personal and academic projects I've worked on."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}