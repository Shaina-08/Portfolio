

import React from 'react';
import './Footer.scss'

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <img src="/output-onlinepngtools.png" alt="Logo" style={logoStyle} />
        <p>&copy; 2023 Shaina_Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  // backgroundColor: 'rgb(106, 140, 169);',
  padding: '20px',
  textAlign: 'center',
};

const logoStyle = {
  width: '100px', // Adjust the width and height as per your logo size
};

export default Footer;
