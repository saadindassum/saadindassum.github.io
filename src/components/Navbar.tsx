import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="max-width">
        <div className="logo">
          <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/assets/logo.png" id="logo" alt="logo.png" />
          </a>
        </div>
        <ul className="menu">
          <li><a href="#timeline" className="menu-btn">Timeline</a></li>
          <li><a href="#tomorrow" className="menu-btn">Latest Release</a></li>
          <li><a href="https://dev.saadindassum.com/" className="menu-btn">&lt;/&gt;</a></li>
          <li>
            <a href="https://www.instagram.com/saadindassum/">
              <i className="fa-brands fa-instagram social desk-socials"></i>
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/artist/0USg6VGxyTCghZFPGRKBwL?si=973b3728a0674e7c">
              <i className="fa-brands fa-spotify desk-socials"></i>
            </a>
          </li>
          <li>
            <a href="https://music.apple.com/us/artist/saadin-dassum/1469155696">
              <i className="fa-brands fa-apple desk-socials"></i>
            </a>
          </li>
          <li className="mobile-item">
            <a href="https://www.instagram.com/saadindassum/" className="social">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://open.spotify.com/artist/0USg6VGxyTCghZFPGRKBwL?si=973b3728a0674e7c" className="social">
              <i className="fa-brands fa-spotify"></i>
            </a>
            <a href="https://music.apple.com/us/artist/saadin-dassum/1469155696" className="social">
              <i className="fa-brands fa-apple"></i>
            </a>
          </li>
        </ul>
        <div className="menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;