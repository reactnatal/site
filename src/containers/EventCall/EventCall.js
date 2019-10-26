import React from 'react';

import logo from '../../logo.svg';
import Icon from '../../components/Icon';
import LogoEvolux from './evolux-logo.png';

import './EventCall.css';

const EventCall = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>1° Meetup - React Natal</h2>
      <h5>Introdução à comunidade e ao ReactJS + mini-curso</h5>
    </header>
    <aside className="App-content">
      <ul>
        <li>
            Local:
          {' '}
          <strong>
            <a
              href="http://jerimumhacker.space"
              target="_blank"
              rel="noopener noreferrer"
            >
                Jerimum Hackerspace
            </a>
          </strong>
            . (
          <a
            href="https://bit.ly/2n1zps0"
            target="_blank"
            rel="noopener noreferrer"
          >
              Ver mapa
          </a>
            )
        </li>
        <li>
            Data:
          {' '}
          <strong>26/10 das 14h às 18h</strong>
.
        </li>
        <li>
            Inscrições:
          {' '}
          <strong>
            <a
              href="https://bit.ly/2oBRgqe"
              target="_blank"
              rel="noopener noreferrer"
            >
                https://bit.ly/2oBRgqe
            </a>
          </strong>
            . (Vagas limitadas)
        </li>
      </ul>
      <p>
          * Por favor, se possivel trazer notebook para participar do mini
          curso.
      </p>
      <p>
          ** É novo por aqui? Preencha
        {' '}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfoa7A91QVldfTJJz7o6chDN4MxMADtjLuSJ5TlipqI6swL4A/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
            nossa pesquisa
        </a>
        {' '}
          para conhecermos melhor o perfil da comunidade.
      </p>
      <h3 className="App-sponsor">Patrocínio</h3>
      <a href="https://www.evolux.net.br/">
        <img src={LogoEvolux} alt="logo da evolux" text="evolux" />
      </a>
    </aside>
    <footer className="App-footer">
      <a
        href="https://t.me/joinchat/H1k6RhYZPseq9vZ1W8A5Eg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="telegram" />
      </a>
      <a
        href="https://instagram.com/reactnatal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="instagram" />
      </a>
    </footer>
  </div>
);

export default EventCall;
