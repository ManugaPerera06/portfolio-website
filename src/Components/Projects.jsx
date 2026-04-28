import React from 'react';
import { SectionHeader } from './Skills';

const projects = [
  {
    title: 'Teera',
    description: 'An AI-powered mobile application for the Cinnamon farmers with the ability to predict the spreading location of the identified disease and give recommended treatment options for the identified disease.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Flask', 'Python','Tensorflow', 'Numpy', 'Keras'],
    gradient: 'from-green-500/20 to-green-500/10',
  },
  {
    title: 'FixIT',
    description: 'A mobile application prototype designed to connect homeowners with verified repair professionals for quick and reliable home maintenance services.',
    tags: ['Flutter', 'Dart'],
    gradient: 'from-purple-500/25 to-cyan-500/10',
  },
  {
    title: 'Portfolio Website',
    description: 'Developed to showcase skills, projects and education.',
    tags: ['ReactJS', 'Tailwind CSS', 'JavaScript', 'Vite'],
    gradient: 'from-cyan-500/10 to-blue-500/10',
  },
  {
    title: 'Traffic Flow Manager',
    description: 'This system gets traffic data of two junctions from CSV files provided, analyze them and returns an output to get better decisions on traffic flow on each junction.',
    tags: ['Python'],
    gradient: 'from-orange-500/20 to-amber-500/10',
  },
];

function ProjectCard({ project }) {
  return (
    <div
      className={`relative bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Gradient bg accent */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none`}
      />
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div>
              <h3 className="font-display font-bold text-white text-lg leading-tight">{project.title}</h3>
            </div>
          </div>
        </div>

        <p className="font-body text-muted text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

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
      {/* Section divider line */}
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
