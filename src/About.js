import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Page.css';

const About = () => (
  <div>
    <h1>About</h1>
    <p>João é um desenvolvedor de software atualmente cursando Ciência da Computação. Ele possui uma sólida fundamentação em estudos voltados para a área de Ciências de Dados. Além disso, João é um jovem ambicioso e extremamente dedicado, sempre disposto a aprender e expandir seus conhecimentos na área de tecnologia. Sua paixão pela inovação e seu compromisso com o aprendizado contínuo fazem dele um profissional promissor no campo da computação e das ciências de dados.</p>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </div>
);

export default About;
