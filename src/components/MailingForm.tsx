import React, { useState } from 'react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import '../css/mailing-form.css';

interface Props {
  onSuccess?: () => void;
}

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const MailingForm: React.FC<Props> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }

    setLoading(true);
    try {
      await setDoc(doc(db, 'subscribers', email.trim().toLowerCase()), {
        email: email.trim().toLowerCase(),
        name: name.trim() || null,
        subscribedAt: serverTimestamp(),
      });
      setSubmitted(true);
      onSuccess?.();
    } catch (err) {
      console.error('Firestore write failed:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="mailing-form">
        <p className="mailing-form__success">You're on the list!</p>
      </div>
    );
  }

  return (
    <form className="mailing-form" onSubmit={handleSubmit} noValidate>
      <h2 className="mailing-form__title">Join the mailing list!</h2>
      <p className="mailing-form__subtitle">For news and special treats!</p>

      <div className="mailing-form__field">
        <label htmlFor="mf-name">
          Name <span className="mailing-form__optional">(optional)</span>
        </label>
        <input
          id="mf-name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Your name"
          autoComplete="name"
        />
      </div>

      <div className="mailing-form__field">
        <label htmlFor="mf-email">Email</label>
        <input
          id="mf-email"
          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            if (emailError) setEmailError(false);
          }}
          placeholder="your@email.com"
          autoComplete="email"
          className={emailError ? 'mailing-form__input--error' : ''}
        />
        {emailError && (
          <span className="mailing-form__error-msg">Please enter a valid email address.</span>
        )}
      </div>

      <button className="mailing-form__submit" type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Subscribe'}
      </button>
    </form>
  );
};

export default MailingForm;
