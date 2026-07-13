import React, { useEffect, useState } from 'react';
import StarContainer from './StarContainer';

const initialFragment = window.location.hash.slice(1);

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com",
  "font-src 'self' https://cdnjs.cloudflare.com",
  "connect-src 'self'",
  "img-src 'self' data:",
  "frame-src 'none'",
  "form-action 'none'",
  "base-uri 'none'",
  "object-src 'none'",
].join('; ');

type Message = 'pending' | 'success' | 'failure' | 'tampered';

const Drop: React.FC = () => {
  const [message, setMessage] = useState<Message>('pending');

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = CSP;
    document.head.appendChild(meta);

    const onViolation = () => setMessage('tampered');
    document.addEventListener('securitypolicyviolation', onViolation);

    const fragment = initialFragment;

    if (!fragment) {
      setMessage('failure');
    } else {
      try {
        const decoded = atob(fragment);
        const safeLocation = {
          get href() { return window.location.href; },
          set href(_: string) { setMessage('tampered'); },
          get pathname() { return window.location.pathname; },
          get search() { return window.location.search; },
          get host() { return window.location.host; },
          get hostname() { return window.location.hostname; },
          get origin() { return window.location.origin; },
          get protocol() { return window.location.protocol; },
          assign(_: string) { setMessage('tampered'); },
          replace(_: string) { setMessage('tampered'); },
        };
        const safeHistory = {
          replaceState: (data: unknown, unused: string, url?: string | URL | null) => {
            window.history.replaceState(data, unused, url);
          },
          pushState(_: unknown, __: string, ___?: string | URL | null) { setMessage('tampered'); },
          go(_?: number) { setMessage('tampered'); },
          back() { setMessage('tampered'); },
          forward() { setMessage('tampered'); },
        };
        const result = new Function('window', decoded)({ ...window, location: safeLocation, history: safeHistory });
        setMessage(result === true ? 'success' : 'failure');
      } catch {
        setMessage('failure');
      }
    }

    return () => {
      document.head.removeChild(meta);
      document.removeEventListener('securitypolicyviolation', onViolation);
    };
  }, []);

  const text = {
    pending: '',
    success: 'Every three to four months. Check back here.',
    failure: 'You must scan a QR code at the right location',
    tampered: 'Our comms are being tampered with. Close this tab ASAP!',
  }[message];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <StarContainer />
      <p style={{ position: 'relative', zIndex: 1, color: 'white', fontSize: '1.5rem', textAlign: 'center' }}>
        {text}
      </p>
    </div>
  );
};

export default Drop;
