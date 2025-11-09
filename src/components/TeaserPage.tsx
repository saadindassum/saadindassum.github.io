import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StarContainer from './StarContainer';
import CrazyPlace from './CrazyPlace';

interface TeaserPageProps {
  gradient: string;
  releaseDate: string;
  trackListing: string[];
  wordBank: string[];
  tip: string;
  albumArt: string;
  fontFamily: string;
  fontSrc: string;
}

const TeaserPage: React.FC<TeaserPageProps> = ({
  gradient,
  releaseDate,
  trackListing,
  wordBank,
  tip,
  albumArt,
  fontFamily,
  fontSrc
}) => {
  React.useEffect(() => {
    // Apply custom styles
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: ${fontFamily};
        src: url(${fontSrc});
      }

      body {
        font-family: ${fontFamily};
      }

      #star-container {
        background: ${gradient};
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [gradient, fontFamily, fontSrc]);

  return (
    <div className="teaser-page">
      <Navbar />
      <StarContainer />

      <CrazyPlace
        wordBank={wordBank.join(' ')}
        tip={tip}
        onClickHref="#track-listing"
      />

      <section id="track-listing" className="max-width">
        <div>
          <div id="image-container">
            <img src={albumArt} alt="album-art" />
          </div>
          <p>
            {trackListing.map((track, index) => (
              <React.Fragment key={index}>
                {track}
                {index < trackListing.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </section>

      <section id="release-date">
        <h2>{releaseDate}</h2>
      </section>

      <Footer />
    </div>
  );
};

export default TeaserPage;