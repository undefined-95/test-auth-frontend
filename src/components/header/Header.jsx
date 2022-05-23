import React from 'react';
import './Header.css';
import Menu from '../menu-profile/MenuProfile';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="main-header">
      <Link to="/people">
        <h1 className="content-header">List of People</h1>
      </Link>
      <h2 className="content-header menu-header">
        <Menu />
      </h2>
    </div>
  );
};

export default Header;
