import React from 'react';
import logo from '../assets/github-logo.png';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <a href="https://github.com/Wolfushima">
        <img src={logo} alt="github logo" className="github-logo" />
        <span>Wolfushima</span>
      </a>
    </div>
  </footer>
);

export default Footer;
