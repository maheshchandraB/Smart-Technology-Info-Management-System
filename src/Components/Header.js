import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => (
  <header className='navbar'>
      <div className='navbar__title navbar__item'><Link className='colr' to="/" >Farming Technologies</Link></div>
      
  </header>
);

export default Header;
