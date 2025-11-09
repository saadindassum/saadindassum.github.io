import React, { useEffect, useRef } from 'react';

const Banner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fallbackRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const fallback = fallbackRef.current;

    if (video && fallback) {
      const handleError = () => {
        video.style.display = 'none';
        fallback.style.display = 'block';
      };

      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  const handleBannerClick = () => {
    const timelineElement = document.getElementById('timeline');
    if (timelineElement) {
      timelineElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="banner-container" onClick={handleBannerClick} style={{ cursor: 'pointer' }}>
      <video
        ref={videoRef}
        id="video-banner"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/videoBanner.mp4" type="video/mp4" />
      </video>
      <img
        ref={fallbackRef}
        id="fallback-banner"
        src="/assets/banner.jpg"
        alt="Banner"
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default Banner;