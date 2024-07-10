import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Início</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/contact">Contato</Link>
    </nav>
  </header>
);

export default Header;
