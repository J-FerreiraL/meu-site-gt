import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Page.css';

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Bem-vindo ao site do João Ferreira </p>
    <nav>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </div>
);

export default Home;
