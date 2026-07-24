import React, { useState } from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import StarContainer from './StarContainer';
import '../css/mailing-form.css';

const UnsubscribePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const normalized = email.trim().toLowerCase();
    console.log('[Unsubscribe] Attempting to delete:', normalized);
    setLoading(true);
    try {
      await deleteDoc(doc(db, 'subscribers', normalized));
      console.log('[Unsubscribe] deleteDoc succeeded for:', normalized);
    } catch (err) {
      console.error('[Unsubscribe] deleteDoc failed:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="mailing-page">
      <StarContainer />
      <div className="mailing-page__content">
        {submitted ? (
          <p className="mailing-form__success">This email has been unsubscribed.</p>
        ) : (
          <form className="mailing-form" onSubmit={handleSubmit} noValidate>
            <h2 className="mailing-form__title">Unsubscribe</h2>
            <p className="mailing-form__subtitle">
              Enter your email to be removed from the list.
            </p>

            <div className="mailing-form__field">
              <label htmlFor="unsub-email">Email</label>
              <input
                id="unsub-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                autoComplete="email"
              />
            </div>

            <button
              className="mailing-form__submit"
              type="submit"
              disabled={loading || !email.trim()}
            >
              {loading ? 'Processing...' : 'Unsubscribe'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UnsubscribePage;
