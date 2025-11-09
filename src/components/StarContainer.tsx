import React, { useEffect, useRef } from 'react';

const StarContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const starsRef = useRef<NodeList | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const starContainer = containerRef.current;

    // The amount of space stars have around them in pixels
    const horiSpace = 50;
    let vw = 3840;
    let vh = 2160;

    const windowX = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const windowY = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    if (windowX > vw) {
      vw = windowX;
    }

    if (windowY > vh) {
      vh = windowY;
    }

    const initStars = () => {
      // Clear existing stars
      starContainer.innerHTML = '';

      for (let i = horiSpace / 2; i < vw; i += horiSpace) {
        const currentStar = document.createElement('div');
        currentStar.setAttribute("class", "star");
        const x = i;
        const y = Math.floor(Math.random() * vh) + 1;
        currentStar.setAttribute("style", `left:${x}px;top:${y}px;`);
        starContainer.appendChild(currentStar);
      }
      starsRef.current = starContainer.childNodes;
    };

    const createZeroStar = () => {
      const currentStar = document.createElement('div');
      currentStar.setAttribute("class", "star");
      const x = 0;
      const y = Math.floor(Math.random() * vh) + 1;
      currentStar.setAttribute("style", `left:${x}px;top:${y}px;`);
      return currentStar;
    };

    const moveStars = () => {
      if (!starsRef.current) return;

      const stars = starsRef.current;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i] as HTMLElement;
        if (!star || !star.style) continue;

        // check if star is out of bounds
        const starX = parseInt(star.style.left);

        if (starX > vw) {
          starContainer.removeChild(star);

          // Now that we deleted the thing, we're adding a new star
          starContainer.appendChild(createZeroStar());
        } else {
          // move the stars
          const newLeft = (parseInt(star.style.left) + 1) + "px";
          star.style.left = newLeft;
        }
      }

      // Update the stars reference after modifications
      starsRef.current = starContainer.childNodes;
    };

    // Initialize stars
    initStars();

    // Start animation - speed chosen because it's half of 24 fps (84ms)
    const speed = 84;
    intervalRef.current = setInterval(moveStars, speed);

    // Handle window resize
    const handleResize = () => {
      // Recalculate viewport dimensions
      const newWindowX = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const newWindowY = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

      if (newWindowX > vw) {
        vw = newWindowX;
      }

      if (newWindowY > vh) {
        vh = newWindowY;
      }

      initStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div id="star-container" ref={containerRef}></div>;
};

export default StarContainer;