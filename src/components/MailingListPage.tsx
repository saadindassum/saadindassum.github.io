import React from 'react';
import StarContainer from './StarContainer';
import MailingForm from './MailingForm';
import '../css/mailing-form.css';

const MailingListPage: React.FC = () => (
  <div className="mailing-page">
    <StarContainer />
    <div className="mailing-page__content">
      <MailingForm />
    </div>
  </div>
);

export default MailingListPage;
