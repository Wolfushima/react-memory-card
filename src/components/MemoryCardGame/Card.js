import React from 'react';

const Card = ({ src, alt, count }) => (
  <div className={`card ${count}`}>
    <img className="character" src={src} alt={alt} />
  </div>
);

export default Card;
