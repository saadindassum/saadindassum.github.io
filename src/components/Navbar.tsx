import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuActive(false);
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="max-width">
        <div className="logo">
          <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/assets/logo.png" id="logo" alt="logo.png" />
          </a>
        </div>
        <ul className={`menu ${isMobileMenuActive ? 'active' : ''}`}>
          <li><a href="#timeline" className="menu-btn" onClick={handleMenuItemClick}>Timeline</a></li>
          <li><a href="#tomorrow" className="menu-btn" onClick={handleMenuItemClick}>Latest Release</a></li>
          <li><a href="https://dev.saadindassum.com/" className="menu-btn" onClick={handleMenuItemClick}>&lt;/&gt;</a></li>
          <li>
            <a href="https://www.instagram.com/saadindassum/" onClick={handleMenuItemClick}>
              <i className="fa-brands fa-instagram social desk-socials"></i>
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/artist/0USg6VGxyTCghZFPGRKBwL?si=973b3728a0674e7c" onClick={handleMenuItemClick}>
              <i className="fa-brands fa-spotify desk-socials"></i>
            </a>
          </li>
          <li>
            <a href="https://music.apple.com/us/artist/saadin-dassum/1469155696" onClick={handleMenuItemClick}>
              <i className="fa-brands fa-apple desk-socials"></i>
            </a>
          </li>
          <li className="mobile-item">
            <a href="https://www.instagram.com/saadindassum/" className="social" onClick={handleMenuItemClick}>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://open.spotify.com/artist/0USg6VGxyTCghZFPGRKBwL?si=973b3728a0674e7c" className="social" onClick={handleMenuItemClick}>
              <i className="fa-brands fa-spotify"></i>
            </a>
            <a href="https://music.apple.com/us/artist/saadin-dassum/1469155696" className="social" onClick={handleMenuItemClick}>
              <i className="fa-brands fa-apple"></i>
            </a>
          </li>
        </ul>
        <div className="menu-btn" onClick={toggleMobileMenu}>
          <i className={`fas fa-bars ${isMobileMenuActive ? 'active' : ''}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;