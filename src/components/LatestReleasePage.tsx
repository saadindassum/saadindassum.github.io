import React, { useEffect } from 'react';
import StarContainer from './StarContainer';
import LatestRelease from './LatestRelease';
import Footer from './Footer';
import { StreamServ } from '../types/StreamingService';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const LatestReleasePage: React.FC = () => {
  useEffect(() => {
    // Meta Pixel Code
    (function (f: any, b: Document, e: string, v: string, n: any, t: HTMLScriptElement, s: HTMLScriptElement) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e) as HTMLScriptElement;
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0] as HTMLScriptElement;
      s.parentNode!.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', null, null as any, null as any);

    window.fbq('init', '1895294838060364');
    window.fbq('track', 'PageView');

    // Add noscript fallback
    const noscriptImg = document.createElement('img');
    noscriptImg.height = 1;
    noscriptImg.width = 1;
    noscriptImg.style.display = 'none';
    noscriptImg.src = 'https://www.facebook.com/tr?id=1895294838060364&ev=PageView&noscript=1';
    document.head.appendChild(noscriptImg);
  }, []);

  const handleStreamEvent = () => {
    if (window.fbq) {
      window.fbq('trackCustom', 'Streaming Link Click');
    }
  };

  return (
    <div className="latest-release-page">
      <StarContainer />
      <LatestRelease sendStreamEvent={handleStreamEvent} />
      <Footer />
    </div>
  );
};

export default LatestReleasePage;