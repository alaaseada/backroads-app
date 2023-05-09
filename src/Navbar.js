import React from 'react';
import logo from './images/logo.svg';
import NavLinks from './NavLinks';
import NavIcons from './NavIcons';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <NavLinks parentClass='nav-links' itemClass='nav-link' />
        <NavIcons parentClass='nav-icons' itemClass='nav-icon' />
      </div>
    </nav>
  );
}

export default Navbar;
