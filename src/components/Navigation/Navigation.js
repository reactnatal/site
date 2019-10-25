import React from 'react';

import { Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => (
  <nav className="Navegacao">
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/codigo-de-conduta">Código de Conduta</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
