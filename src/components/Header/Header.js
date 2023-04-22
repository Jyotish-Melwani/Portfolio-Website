import React from 'react';
import './Header.scss';

const Header = ({ onClick }) => {
  return (
    <header className="header">
      <h1 onClick={onClick}>Jyotish Melwani</h1>
    </header>
  );
};

export default Header;
