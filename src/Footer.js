import React from 'react';
import NavLinks from './NavLinks';
import NavIcons from './NavIcons';

function Footer() {
  return (
    <footer className='section footer'>
      <NavLinks parentClass='footer-links' itemClass='footer-link' />
      <NavIcons parentClass='footer-icons' itemClass='footer-icon' />
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
