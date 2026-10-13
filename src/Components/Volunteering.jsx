import React from 'react';
import { SectionHeader } from './Skills';
import coderallyImg from '../assets/CodeRally 7.0.jpeg';

const events = [
  {
    title: 'CodeRally 7.0',
    organizer: 'IEEE CIS Student Branch Chapter of IIT',
    role: 'Logistics Volunteer',
    period: 'June 2026 - September 2026',
    description: 'Contributed to the operational execution of CodeRally 7.0, a premiere 24-hour national competitive programming hackathon bringing together coders from 35+ universities. Managed physical venue setup, inventory procurement, meal schedules, and continuous on-site logistics during the workshops and the final hackathon to ensure smooth operations for hundreds of participants, mentors, and organizers.',
    image: coderallyImg,
    postLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7513095698389782528/', 
    albums: [
      { label: 'Workshop 1', href: 'https://www.facebook.com/share/p/1P857kwCT9/?mibextid=wwXIfr ' },          
      { label: 'Workshop 2', href: 'https://www.facebook.com/share/p/19myqYJnyw/?mibextid=wwXIfr' },
      { label: '24-Hour Hackathon', href: 'https://www.facebook.com/share/p/1BwPFiDdvZ/?mibextid=wwXIfr' },
      { label: 'Awards Ceremony', href: 'https://www.facebook.com/share/p/19eUhDogJ3/' },
    ],
  },
];

function EventCard({ event }) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col">
      {/* Cover image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Period */}
        <span className="font-mono text-xs tracking-widest text-accent uppercase mb-2">
          {event.period}
        </span>

        {/* Title + organizer */}
        <h3 className="font-display font-bold text-white text-xl leading-tight">
          {event.title}
        </h3>
        <p className="font-body text-sm text-muted mt-1">
          {event.role} · {event.organizer}
        </p>

        {/* Description */}
        <p className="font-body text-muted text-sm leading-relaxed mt-4 mb-5 flex-1">
          {event.description}
        </p>

        {/* Main link */}
        {event.postLink && (
          <a
            href={event.postLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start font-body font-medium text-sm text-white hover:text-accent transition-colors duration-200"
          >
            View LinkedIn Post
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        )}

        {/* Album links */}
        {event.albums?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
            {event.albums.map((album) => (
              <a
                key={album.label}
                href={album.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs px-2.5 py-1 rounded-lg bg-surface border border-border text-muted/80 hover:text-white hover:border-accent/40 hover:bg-accent/10 transition-all duration-200"
              >
                {album.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-border" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="// beyond the code"
          title="Volunteering"
          subtitle="Events and communities I've contributed to outside my degree."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}