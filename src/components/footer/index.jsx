import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => (
  <footer className="bck_black">
    <Fade delay={500}>
      <div className="font_righteous footer_logo_venue">
        The Venue
      </div>
            <div className="footer_copyright">
              The Venue 2018
            </div>
    </Fade>
  </footer>
);

export default Footer;
