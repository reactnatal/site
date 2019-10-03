import React from 'react';
import Images from './../assets/images';

const Icon = ({ name }) => (
  <figure className="icon">
    <img src={Images[`${name}Icon`]} alt={name} />
  </figure>
);

export default Icon;
