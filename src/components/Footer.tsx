import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <img src="/assets/fullSD.png" alt="Saadin Dassum logo" />
      <span>
        Created by
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Saadin Dassum </a>
        <span className="far fa-copyright">{currentYear} All Rights Reserved.</span>
      </span>
      <br />
    </footer>
  );
};

export default Footer;