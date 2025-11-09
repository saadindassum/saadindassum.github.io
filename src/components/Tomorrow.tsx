import React from 'react';

const Tomorrow: React.FC = () => {
  const handleSpotifyClick = () => {
    window.location.href = 'https://open.spotify.com/track/37Zf1KF4jlAzZfORWL9JQ4?si=76ff7e88a8b143c5';
  };

  const handleAppleMusicClick = () => {
    window.location.href = 'https://music.apple.com/us/artist/saadin-dassum/1469155696';
  };

  return (
    <section className="tomorrow" id="tomorrow">
      <div className="max-width">
        <div className="tomorrow-content">
          <img src="/assets/forgotMyName.png" alt="Forgot My Name Album Artwork" />
          <div className="button-container" onClick={handleSpotifyClick}>
            <i className="fa-brands fa-spotify stream-button spoti-button"></i>
            <p>Spotify</p>
          </div>
          <div className="button-container" onClick={handleAppleMusicClick}>
            <i className="fa-brands fa-apple stream-button"></i>
            <p>Apple Music</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tomorrow;