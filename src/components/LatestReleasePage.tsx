import React from 'react';
import StarContainer from './StarContainer';
import LatestRelease from './LatestRelease';
import Footer from './Footer';

const LatestReleasePage: React.FC = () => {
  return (
    <div className="latest-release-page">
      <StarContainer />
      <LatestRelease />
      <Footer />
    </div>
  );
};

export default LatestReleasePage;