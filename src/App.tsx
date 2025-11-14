import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Timeline from './components/Timeline';
import LatestRelease from './components/LatestRelease';
import Footer from './components/Footer';
import StarContainer from './components/StarContainer';
import TeaserPage from './components/TeaserPage';
import LatestReleasePage from './components/LatestReleasePage';
import { getTeaserPageData } from './data/teaserPages';
import './App.css';

// Hook to handle hash navigation
const HashNavigator: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

// Home page component
const HomePage: React.FC = () => (
  <div className="App">
    <HashNavigator />
    <StarContainer />
    <Navbar />
    <Banner />
    <main>
      <Timeline />
      <LatestRelease />
    </main>
    <Footer />
  </div>
);

// Teaser page wrapper component
const TeaserPageWrapper: React.FC<{ id: string }> = ({ id }) => {
  const data = getTeaserPageData(id);

  if (!data) {
    return <div>Teaser page not found</div>;
  }

  return (
    <TeaserPage
      gradient={data.gradient}
      releaseDate={data.releaseDate}
      trackListing={data.trackListing}
      wordBank={data.wordBank}
      tip={data.tip}
      albumArt={data.albumArt}
      fontFamily={data.fontFamily}
      fontSrc={data.fontSrc}
    />
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/latest-release" element={<LatestReleasePage />} />
        <Route path="/teaser-pages/mrc" element={<TeaserPageWrapper id="mrc" />} />
        <Route path="/teaser-pages/ris" element={<TeaserPageWrapper id="ris" />} />
        <Route path="/teaser-pages/dis" element={<TeaserPageWrapper id="dis" />} />
        <Route path="/teaser-pages/lal" element={<TeaserPageWrapper id="lal" />} />
        <Route path="/teaser-pages/hrn" element={<TeaserPageWrapper id="hrn" />} />
      </Routes>
    </Router>
  );
}

export default App;
