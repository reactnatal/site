import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>1° Meetup - React Natal</h2>
        <h5>Introdução à comunidade e ao ReactJS + mini-curso</h5>
      </header>
      <aside className="App-content">
        <ul>
          <li>Local: <strong><a href="http://jerimumhacker.space" target="_blank" rel="noopener noreferrer">Jerimum Hackerspace</a></strong>. (<a href="https://bit.ly/2n1zps0" target="_blank" rel="noopener noreferrer">Ver mapa</a>)</li>
          <li>Data: <strong>26/10 das 14h às 18h</strong>.</li>
          <li>Inscrições: <strong><a href="https://bit.ly/2pmQLAh" target="_blank" rel="noopener noreferrer">https://bit.ly/2pmQLAh</a></strong>. (Vagas limitadas)</li>
        </ul>
        <p>* Por favor, se possivel trazer notebook para participar do mini curso.</p>
        <p>** É novo por aqui? Preencha <a href="https://docs.google.com/forms/d/e/1FAIpQLSfoa7A91QVldfTJJz7o6chDN4MxMADtjLuSJ5TlipqI6swL4A/viewform" target="_blank" rel="noopener noreferrer">nossa pesquisa</a> para conhecermos melhor o perfil da comunidade.</p>
      </aside>
    </div>
  );
}

export default App;
