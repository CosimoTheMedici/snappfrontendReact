import React from 'react';
import { Link } from 'react-router-dom';

import images from '../../assets/index'

import './header.scss';
const Header = () => {
  return (
    <div className="header">
      <nav className="container">
        <Link to="/">
          {/* <img src={Logo} alt="logo" /> */}
          <div className='logo'>
          <img className='vectorlogo' src={images.VectorLogo} alt="horse" />
          <img className='movieslogo' src={images.MoviesLogo} alt="horse" />

          </div>
        </Link>
        {/* <Searchbar handleSearch={handleSearch}/> */}
      </nav>
    </div>
  )
}

export default Header