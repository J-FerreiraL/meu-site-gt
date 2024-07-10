import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Page.css';

const Contact = () => (
  <div>
    <h1>Contact</h1>
    <p>Entre em contato comigo</p>
    <p>
      E-mail: joaoferreiralinhares@zohomail.com<br />
      Git Hub: <a href="https://github.com/J-FerreiraL" target="_blank" rel="noopener noreferrer">https://github.com/J-FerreiraL</a>
    </p>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  </div>
);

export default Contact;
