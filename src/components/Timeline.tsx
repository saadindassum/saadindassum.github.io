import React from 'react';
import ImageStack from './ImageStack';

const Timeline: React.FC = () => {
  const projects = [
    {
      id: 'ris',
      iconSrc: '/gameplan-assets/ris/ris-icon.png',
      glowSrc: '/gameplan-assets/ris/ris-glow.png',
      title: '2025/2026',
      href: '/teaser-pages/ris',
      audioSrc: '/gameplan-assets/ris/ris-sample.mp3'
    },
    {
      id: 'dis',
      iconSrc: '/gameplan-assets/dis/dis-icon.png',
      glowSrc: '/gameplan-assets/dis/dis-glow.png',
      title: '2026',
      href: '/teaser-pages/dis',
      audioSrc: '/gameplan-assets/dis/dis-sample.mp3'
    },
    {
      id: 'mrc',
      iconSrc: '/gameplan-assets/mrc/mrc-icon.png',
      glowSrc: '/gameplan-assets/mrc/mrc-glow.png',
      title: '202X',
      href: '/teaser-pages/mrc',
      audioSrc: '/gameplan-assets/mrc/mrc-sample.mp3'
    },
    {
      id: 'lal',
      iconSrc: '/gameplan-assets/lal/lal-icon.png',
      glowSrc: '/gameplan-assets/lal/lal-glow.png',
      title: '202X',
      href: '/teaser-pages/lal',
      audioSrc: '/gameplan-assets/lal/lal-sample.mp3'
    },
    {
      id: 'hrn',
      iconSrc: '/gameplan-assets/hrn/hrn-icon.png',
      glowSrc: '/gameplan-assets/hrn/hrn-glow.png',
      title: '202X',
      href: '/teaser-pages/hrn',
      audioSrc: '/gameplan-assets/hrn/hrn-sample.mp3'
    }
  ];

  return (
    <section id="timeline">
      <div className="scrolling-background">
        {projects.map((project) => (
          <ImageStack
            key={project.id}
            id={project.id}
            iconSrc={project.iconSrc}
            glowSrc={project.glowSrc}
            title={project.title}
            href={project.href}
            audioSrc={project.audioSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;