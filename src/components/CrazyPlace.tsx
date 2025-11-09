import React, { useEffect, useRef } from 'react';

interface CrazyPlaceProps {
  wordBank: string;
  tip: string;
  onClickHref?: string;
}

const CrazyPlace: React.FC<CrazyPlaceProps> = ({ wordBank, tip, onClickHref = '#track-listing' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordContainersRef = useRef<HTMLElement[][]>([]);
  const wordContainerObjectsRef = useRef<HTMLElement[]>([]);
  const intervalRefs = useRef<NodeJS.Timeout[]>([]);

  const frame = 33; // 33ms for ~30fps
  const mWord = 0; // main word index
  const tShad = 1; // top shadow index
  const bShad = 2; // bottom shadow index

  const delay = (time: number) => new Promise(resolve => setTimeout(resolve, time));

  useEffect(() => {
    if (!containerRef.current) return;

    const words = wordBank.split(' ').map(word => word.toUpperCase());

    // Get the crazy place structure
    const crazyPlace = containerRef.current;
    const crazyPlaceContent = crazyPlace.querySelector('#crazy-place-content') as HTMLElement;
    const splitScreen = crazyPlaceContent.querySelector('.split-screen') as HTMLElement;

    const screens: HTMLElement[] = [];
    for (let i = 0; i < splitScreen.children.length; i++) {
      const child = splitScreen.children[i] as HTMLElement;
      if (child.classList && child.classList.length > 0) {
        screens.push(child);
      }
    }

    // Get word containers
    const wordContainers: HTMLElement[][] = [];
    const wordContainerObjects: HTMLElement[] = [];

    for (let i = 0; i < screens.length; i++) {
      const containerChildren: HTMLElement[] = [];
      for (let j = 0; j < screens[i].children.length; j++) {
        const child = screens[i].children[j] as HTMLElement;
        if (child.classList && child.classList.length > 0) {
          containerChildren.push(child);
        }
      }

      for (let j = 0; j < containerChildren.length; j++) {
        wordContainerObjects.push(containerChildren[j]);
        const wordContainer: HTMLElement[] = [];

        const deepChildren: HTMLElement[] = [];
        for (let k = 0; k < containerChildren[j].children.length; k++) {
          const child = containerChildren[j].children[k] as HTMLElement;
          if (child.classList && child.classList.length > 0) {
            deepChildren.push(child);
          }
        }

        for (let k = 0; k < deepChildren.length; k++) {
          wordContainer.push(deepChildren[k]);
        }
        wordContainers.push(wordContainer);
      }
    }

    wordContainersRef.current = wordContainers;
    wordContainerObjectsRef.current = wordContainerObjects;

    // Initialize words
    const initWords = () => {
      for (let i = 0; i < wordContainers.length; i++) {
        const word = words[Math.floor(Math.random() * words.length)];

        for (let j = 0; j < wordContainers[i].length; j++) {
          wordContainers[i][j].innerHTML = word;
          if (j > 0) {
            wordContainers[i][j].style.opacity = "0";
          }
        }
      }
    };

    // Animation functions
    const showTopShadow = (index: number) => {
      if (wordContainers[index] && wordContainers[index][tShad]) {
        wordContainers[index][tShad].style.opacity = "0.5";
      }
    };

    const hideTopShadow = (index: number) => {
      if (wordContainers[index] && wordContainers[index][tShad]) {
        wordContainers[index][tShad].style.opacity = "0";
      }
    };

    const showBotShadow = (index: number) => {
      if (wordContainers[index] && wordContainers[index][bShad]) {
        wordContainers[index][bShad].style.opacity = "0.5";
      }
    };

    const hideBotShadow = (index: number) => {
      if (wordContainers[index] && wordContainers[index][bShad]) {
        wordContainers[index][bShad].style.opacity = "0";
      }
    };

    const fadeIn = async (index: number, frames: number, opacity = 1) => {
      const wordContainer = wordContainerObjects[index];
      if (!wordContainer) return;

      const distance = opacity - parseFloat(wordContainer.style.opacity || '0');
      const amount = parseFloat((distance / frames).toFixed(2));

      try {
        for (let i = 0; i < frames; i++) {
          const newValue = parseFloat(wordContainer.style.opacity || '0') + amount;
          wordContainer.style.opacity = `${newValue < opacity ? newValue : opacity}`;
          await delay(frames * frame);
        }
        if (parseFloat(wordContainer.style.opacity) !== opacity) {
          wordContainer.style.opacity = `${opacity}`;
        }
      } catch (e) {
        wordContainer.style.opacity = `${opacity}`;
      }
    };

    const fadeOut = async (index: number, frames: number, opacity = 0.5) => {
      const wordContainer = wordContainerObjects[index];
      if (!wordContainer) return;

      const distance = 1 - opacity;
      const amount = parseFloat((distance / frames).toFixed(2));

      try {
        for (let i = 0; i < frames; i++) {
          const newValue = parseFloat(wordContainer.style.opacity || '1') - amount;
          wordContainer.style.opacity = `${newValue > opacity ? newValue : opacity}`;
          await delay(frames * frame);
        }
        if (parseFloat(wordContainer.style.opacity) !== opacity) {
          wordContainer.style.opacity = `${opacity}`;
        }
      } catch (e) {
        wordContainer.style.opacity = `${opacity}`;
      }
    };

    const opacityFull = (index: number) => {
      const wordContainer = wordContainerObjects[index];
      if (wordContainer) {
        wordContainer.style.opacity = (index === 2 || index === 3) ? "0.5" : "1";
      }
    };

    const opacityHalf = (index: number) => {
      const wordContainer = wordContainerObjects[index];
      if (wordContainer) {
        wordContainer.style.opacity = (index === 2 || index === 3) ? "0.1" : "0.5";
      }
    };

    const changeWord = (index: number) => {
      const word = words[Math.floor(Math.random() * words.length)];
      for (let j = 0; j < wordContainers[index].length; j++) {
        if (wordContainers[index][j]) {
          wordContainers[index][j].innerHTML = word;
        }
      }
    };

    // Animation sequences (simplified versions of the original 9 animations)
    const animation0 = async (index: number) => {
      await delay(7 * frame);
      showTopShadow(index);
      await delay(2 * frame);
      hideTopShadow(index);
      showBotShadow(index);
      await delay(5 * frame);
      hideBotShadow(index);
      opacityHalf(index);
      await delay(frame);
      changeWord(index);
      showBotShadow(index);
      await delay(5 * frame);
      await fadeIn(index, 3, (index === 2 || index === 3) ? 0.5 : 1);
      hideBotShadow(index);
      triggerRandomAnimation(index);
    };

    const animation1 = async (index: number) => {
      opacityHalf(index);
      await delay(2 * frame);
      changeWord(index);
      await delay(2 * frame);
      await fadeIn(index, 3, (index === 2 || index === 3) ? 0.5 : 1);
      triggerRandomAnimation(index);
    };

    const animation2 = async (index: number) => {
      await delay(2 * frame);
      showTopShadow(index);
      await delay(2 * frame);
      hideTopShadow(index);
      showBotShadow(index);
      await delay(2 * frame);
      hideBotShadow(index);
      await delay(2 * frame);
      await fadeOut(index, 3, (index === 2 || index === 3) ? 0.1 : 0.5);
      opacityFull(index);
      await delay(2 * frame);
      await fadeOut(index, 6, (index === 2 || index === 3) ? 0.1 : 0.5);
      await delay(5 * frame);
      showTopShadow(index);
      await delay(5 * frame);
      hideTopShadow(index);
      showBotShadow(index);
      await delay(2 * frame);
      await fadeOut(index, 7, (index === 2 || index === 3) ? 0.1 : 0.5);
      hideBotShadow(index);
      changeWord(index);
      await fadeIn(index, 3, (index === 2 || index === 3) ? 0.5 : 1);
      triggerRandomAnimation(index);
    };

    const animation3 = async (index: number) => {
      await delay(frame);
      showBotShadow(index);
      await delay(3 * frame);
      hideBotShadow(index);
      await delay(2 * frame);
      await fadeOut(index, 3, (index === 2 || index === 3) ? 0.1 : 0.5);
      opacityFull(index);
      await delay(7 * frame);
      await fadeOut(index, 3, (index === 2 || index === 3) ? 0.1 : 0.5);
      showTopShadow(index);
      opacityFull(index);
      await delay(5 * frame);
      hideTopShadow(index);
      showBotShadow(index);
      await delay(frame);
      await fadeOut(index, 5, (index === 2 || index === 3) ? 0.1 : 0.5);
      changeWord(index);
      await fadeIn(index, 3, (index === 2 || index === 3) ? 0.5 : 1);
      triggerRandomAnimation(index);
    };

    const animation4 = async (index: number) => {
      await delay(2 * frame);
      opacityHalf(index);
      await delay(frame);
      changeWord(index);
      await fadeIn(index, 5, (index === 2 || index === 3) ? 0.5 : 1);
      await delay(4 * frame);
      showTopShadow(index);
      await delay(6 * frame);
      hideTopShadow(index);
      showBotShadow(index);
      await fadeOut(index, 5, (index === 2 || index === 3) ? 0.1 : 0.5);
      hideBotShadow(index);
      await delay(frame);
      changeWord(index);
      await fadeIn(index, 4, (index === 2 || index === 3) ? 0.5 : 1);
      triggerRandomAnimation(index);
    };

    const animation5 = async (index: number) => {
      await delay(3 * frame);
      showBotShadow(index);
      await delay(3 * frame);
      hideBotShadow(index);
      await delay(2 * frame);
      opacityHalf(index);
      await delay(2 * frame);
      opacityFull(index);
      await delay(6 * frame);
      await fadeOut(index, 6, (index === 2 || index === 3) ? 0.1 : 0.5);
      await delay(frame);
      changeWord(index);
      await fadeIn(index, 4, (index === 2 || index === 3) ? 0.5 : 1);
      triggerRandomAnimation(index);
    };

    const animation6 = async (index: number) => {
      showTopShadow(index);
      await delay(3 * frame);
      hideTopShadow(index);
      await delay(5 * frame);
      await fadeOut(index, 2, (index === 2 || index === 3) ? 0.1 : 0.5);
      opacityFull(index);
      await delay(5 * frame);
      showBotShadow(index);
      await delay(6 * frame);
      hideBotShadow(index);
      await delay(2 * frame);
      await fadeOut(index, 4, (index === 2 || index === 3) ? 0.1 : 0.5);
      await delay(2 * frame);
      changeWord(index);
      await delay(frame);
      opacityFull(index);
      triggerRandomAnimation(index);
    };

    const animation7 = async (index: number) => {
      await delay(frame);
      showBotShadow(index);
      await fadeOut(index, 8, (index === 2 || index === 3) ? 0.1 : 0.5);
      hideBotShadow(index);
      changeWord(index);
      await delay(2 * frame);
      showTopShadow(index);
      await fadeIn(index, 2, (index === 2 || index === 3) ? 0.5 : 1);
      hideTopShadow(index);
      showBotShadow(index);
      await delay(4 * frame);
      hideBotShadow(index);
      triggerRandomAnimation(index);
    };

    const animation8 = async (index: number) => {
      await delay(2 * frame);
      await fadeOut(index, 3, (index === 2 || index === 3) ? 0.1 : 0.5);
      changeWord(index);
      await delay(2 * frame);
      opacityFull(index);
      triggerRandomAnimation(index);
    };

    const triggerRandomAnimation = (index: number) => {
      const anim = Math.floor(Math.random() * 9);
      switch (anim) {
        case 0:
          animation0(index);
          break;
        case 1:
          animation1(index);
          break;
        case 2:
          animation2(index);
          break;
        case 3:
          animation3(index);
          break;
        case 4:
          animation4(index);
          break;
        case 5:
          animation5(index);
          break;
        case 6:
          animation6(index);
          break;
        case 7:
          animation7(index);
          break;
        default:
          animation8(index);
          break;
      }
    };

    // Initialize and start animations
    initWords();

    for (let i = 0; i < wordContainers.length; i++) {
      triggerRandomAnimation(i);
    }

    return () => {
      // Cleanup intervals
      intervalRefs.current.forEach(interval => clearTimeout(interval));
    };
  }, [wordBank]);

  const handleClick = () => {
    if (onClickHref.startsWith('#')) {
      const element = document.getElementById(onClickHref.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = onClickHref;
    }
  };

  return (
    <section id="crazy-place" onClick={handleClick} ref={containerRef}>
      <div id="crazy-place-content">
        <div className="split-screen max-width">
          <div className="left-screen">
            <div className="top-word word-container" style={{ opacity: 0.9 }}>
              <div className="main-word" style={{ opacity: 1 }}>LOADING</div>
              <div className="top-shadow" style={{ opacity: 0.5 }}>LOADING</div>
              <div className="bot-shadow" style={{ opacity: 0.5 }}>LOADING</div>
            </div>
            <div className="mid-word word-container" style={{ opacity: 0.9 }}>
              <div className="main-word" style={{ opacity: 1 }}>LOADING</div>
              <div className="top-shadow" style={{ opacity: 0.5 }}>LOADING</div>
              <div className="bot-shadow" style={{ opacity: 0.5 }}>LOADING</div>
            </div>
            <div className="bot-word word-container" style={{ opacity: 0.5 }}>
              <div className="main-word" style={{ opacity: 1 }}>LOADING</div>
              <div className="top-shadow" style={{ opacity: 0.5 }}>LOADING</div>
              <div className="bot-shadow" style={{ opacity: 0.5 }}>LOADING</div>
            </div>
          </div>
          <div className="right-screen">
            <div className="top-word word-container" style={{ opacity: 0.5 }}>
              <div className="main-word" style={{ opacity: 1 }}>LOADING</div>
              <div className="top-shadow" style={{ opacity: 0.5 }}>LOADING</div>
              <div className="bot-shadow" style={{ opacity: 0.5 }}>LOADING</div>
            </div>
            <div className="mid-word word-container" style={{ opacity: 0.9 }}>
              <div className="main-word" style={{ opacity: 1 }}>GAME</div>
              <div className="top-shadow" style={{ opacity: 0.5 }}>GAME</div>
              <div className="bot-shadow" style={{ opacity: 0.5 }}>GAME</div>
            </div>
            <div className="bot-word word-container" style={{ opacity: 0.9 }}>
              <div className="main-word" style={{ opacity: 1 }}>GIRLFRIEND</div>
              <div className="top-shadow" style={{ opacity: 0.5 }}>GIRLFRIEND</div>
              <div className="bot-shadow" style={{ opacity: 0.5 }}>GIRLFRIEND</div>
            </div>
          </div>
        </div>
        <div id="tip-container" className="max-width">
          <div id="loading-screen-tip">
            <span dangerouslySetInnerHTML={{ __html: tip }} />
          </div>
        </div>
      </div>
      <div id="word-bank" style={{ display: 'none' }}>
        {wordBank}
      </div>
    </section>
  );
};

export default CrazyPlace;