import React from 'react';

import './CodeOfConduct.css';

const CodeOfConduct = () => (
  <div className="Conduct">
    <h1>Código de conduta</h1>
    <p>
        Nosso código de conduta reflete o que esperamos como comunidade, tanto
        para os participantes, como para os membros da organização e qualquer
        pessoa que participará dos eventos e das redes sociais.
    </p>
    <h2>Porque temos um código de conduta para a React Natal?</h2>
    <p>
        “Ele cria expectativas de comportamento nos nossos eventos. Só ter um
        código de conduta pode evitar assédio. Ele encoraja pessoas que já
        tiveram experiências ruins anteriormente a participarem dos nossos
        eventos. Ele dá aos organizadores/voluntários instruções de como lidar
        com situações de assédio rapidamente, com o mínimo de repercussão nos
        eventos”.¹
    </p>
    <div>
      <p>Não será tolerado:</p>
      <ul>
        <li>
            Qualquer tipo de discriminação, seja ela relacionada a raça,
            sexualidade, religião, sexo, classe social, idade, identidade de
            gênero, corpo, nível de experiência, capacidade física e mental.
        </li>
        <li>Linguagem vulgar e desrespeitosa, assim como de cunho sexual</li>
        <li>Afrontas pessoais ou políticas</li>
        <li>Qualquer tipo de assédio físico ou verbal</li>
      </ul>
    </div>
    <p>
        A violação do código acarretará em ações por parte da organização, seja
        ela um aviso ou banimento temporário, ou até mesmo permanente, da
        comunidade.
    </p>
    <p>
        Caso alguma pessoa sinta-se respeitada ou percebeu alguém sendo,
        comunicar a questão à organização para que ações sejam tomadas, seja
        pelas redes sociais ou pelo email da comunidade (reactnatal@gmail.com).
    </p>
    <div className="Conduct-links">
      <p>Esse código foi baseado nos seguintes códigos:</p>
      <a href="https://dev.to/code-of-conduct">Dev.to Code of conduct</a>
      <a href="https://medium.com/devcbeirut/facebook-developer-circle-beirut-community-2d8fbf0a04ea">
          Developer Circle Beirut Code of Conduct
      </a>
      <a href="https://github.com/gdg-bh/codigo-de-conduta">
          Código de Conduta - GDG BH¹
      </a>
    </div>
  </div>
);

export default CodeOfConduct;
