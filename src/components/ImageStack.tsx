import React, { useRef, useEffect } from 'react';
import { useUserInteraction } from '../hooks/useUserInteraction';

interface ImageStackProps {
  id: string;
  iconSrc: string;
  glowSrc: string;
  title: string;
  href?: string;
  audioSrc?: string;
  className?: string;
}

const ImageStack: React.FC<ImageStackProps> = ({
  id,
  iconSrc,
  glowSrc,
  title,
  href,
  audioSrc,
  className = ''
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const glowRef = useRef<HTMLImageElement>(null);
  const faderRef = useRef<NodeJS.Timeout | null>(null);
  const imageFaderRef = useRef<NodeJS.Timeout | null>(null);
  const stopTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasUserInteracted = useUserInteraction();

  const playAudioById = (projectId: string) => {
    const sound = document.getElementById(projectId + '-audio') as HTMLAudioElement;
    if (sound) {
      const playPromise = sound.play();

      // Handle the promise to catch autoplay policy errors
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio started successfully
          })
          .catch(error => {
            // Audio play failed (likely due to autoplay policy)
            // This is expected behavior before user interaction, so we silently ignore it
            // Don't log to console to avoid cluttering - this is normal behavior
          });
      }
    }
  };

  const fadeIn = (projectId: string) => {
    if (faderRef.current) clearInterval(faderRef.current);
    if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);

    const sound = document.getElementById(projectId + '-audio') as HTMLAudioElement;
    if (!sound) return;

    faderRef.current = setInterval(() => {
      try {
        sound.volume += 0.01;
        if (sound.volume >= 1) {
          sound.volume = 1;
          if (faderRef.current) clearInterval(faderRef.current);
        }
      } catch (e) {
        sound.volume = 1;
        if (faderRef.current) clearInterval(faderRef.current);
      }
    }, 10);
  };

  const fadeOut = (projectId: string) => {
    if (faderRef.current) clearInterval(faderRef.current);

    const sound = document.getElementById(projectId + '-audio') as HTMLAudioElement;
    const image = document.getElementById(projectId + '-glow') as HTMLImageElement;
    if (!sound || !image) return;

    faderRef.current = setInterval(() => {
      try {
        const currentOpacity = parseFloat(image.style.opacity || '0');
        sound.volume = Math.max(0, currentOpacity - 0.02);

        if (sound.volume <= 0) {
          sound.volume = 0;
          if (faderRef.current) clearInterval(faderRef.current);
          sound.pause();
          stopTimeoutRef.current = setTimeout(() => {
            resetSound(projectId);
          }, 2000);
        }
      } catch (e) {
        console.log('Error caught!', e);
        sound.volume = 0;
        if (faderRef.current) clearInterval(faderRef.current);
        sound.pause();
        stopTimeoutRef.current = setTimeout(() => {
          resetSound(projectId);
        }, 2000);
      }
    }, 10);
  };

  const fadeInGlow = (projectId: string) => {
    if (imageFaderRef.current) clearInterval(imageFaderRef.current);

    const image = document.getElementById(projectId + '-glow') as HTMLImageElement;
    if (!image) return;

    imageFaderRef.current = setInterval(() => {
      try {
        const currentOpacity = parseFloat(image.style.opacity || '0');
        const newOpacity = currentOpacity + 0.1;

        if (newOpacity >= 1) {
          image.style.opacity = '1';
          if (imageFaderRef.current) clearInterval(imageFaderRef.current);
        } else {
          image.style.opacity = newOpacity.toString();
        }
      } catch (e) {
        image.style.opacity = '1';
        if (imageFaderRef.current) clearInterval(imageFaderRef.current);
      }
    }, 10);
  };

  const fadeOutGlow = (projectId: string) => {
    if (imageFaderRef.current) clearInterval(imageFaderRef.current);

    const image = document.getElementById(projectId + '-glow') as HTMLImageElement;
    if (!image) return;

    imageFaderRef.current = setInterval(() => {
      try {
        const currentOpacity = parseFloat(image.style.opacity || '0');
        const newOpacity = currentOpacity - 0.02;

        if (newOpacity <= 0) {
          image.style.opacity = '0';
          if (imageFaderRef.current) clearInterval(imageFaderRef.current);
        } else {
          image.style.opacity = newOpacity.toString();
        }
      } catch (e) {
        image.style.opacity = '0';
        if (imageFaderRef.current) clearInterval(imageFaderRef.current);
      }
    }, 10);
  };

  const resetSound = (projectId: string) => {
    const sound = document.getElementById(projectId + '-audio') as HTMLAudioElement;
    if (sound) {
      sound.currentTime = 0;
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth < 992) return;

    fadeInGlow(id);
    if (audioSrc && id !== 'ast' && id !== 'inh') {
      playAudioById(id);
      fadeIn(id);
    }
  };

  const handleMouseLeave = () => {
    fadeOutGlow(id);
    if (audioSrc && id !== 'ast' && id !== 'inh') {
      fadeOut(id);
    }
  };

  const handleClick = () => {
    if (href) {
      window.location.href = href;
    }
  };

  useEffect(() => {
    // Set initial volume to 0
    if (audioRef.current) {
      audioRef.current.volume = 0;
    }

    return () => {
      if (faderRef.current) clearInterval(faderRef.current);
      if (imageFaderRef.current) clearInterval(imageFaderRef.current);
      if (stopTimeoutRef.current) clearTimeout(stopTimeoutRef.current);
    };
  }, []);

  // Enable audio context after user interaction
  useEffect(() => {
    if (hasUserInteracted && audioRef.current) {
      // Try to preload and prepare the audio for seamless playback
      audioRef.current.load();
    }
  }, [hasUserInteracted]);

  return (
    <div className="project">
      <div
        className={`image-stack ${className}`}
        id={id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ cursor: href ? 'pointer' : 'default' }}
      >
        <img
          src={iconSrc}
          id={`${id}-image`}
          alt={`${id}-icon.png`}
          className="project-image locked"
        />
        <img
          ref={glowRef}
          src={glowSrc}
          id={`${id}-glow`}
          alt={`${id}-glow.png`}
          className="glow-image"
          style={{ opacity: 0 }}
        />
        <h3>{title}</h3>
      </div>
      {audioSrc && (
        <audio
          ref={audioRef}
          controls
          className="hover-audio"
          id={`${id}-audio`}
        >
          <source src={audioSrc} type="audio/mp3" />
        </audio>
      )}
    </div>
  );
};

export default ImageStack;