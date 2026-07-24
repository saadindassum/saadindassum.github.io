import React, { useEffect, useState } from 'react';
import MailingForm from './MailingForm';
import '../css/mailing-form.css';

const SESSION_KEY = 'mailing_dialog_seen';

const MailingDialog: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="mailing-dialog__overlay" onClick={close}>
      <div className="mailing-dialog" onClick={e => e.stopPropagation()}>
        <button className="mailing-dialog__close" onClick={close} aria-label="Close">
          ✕
        </button>
        <MailingForm onSuccess={() => setTimeout(close, 3000)} />
      </div>
    </div>
  );
};

export default MailingDialog;
