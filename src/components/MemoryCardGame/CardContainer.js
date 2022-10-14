import React from 'react';
import uniqid from 'uniqid';
import Card from './Card';

const CardContainer = ({ data }) => (
  <div className="card-container">
    {
    data.map((item, i) => (
      <Card
        src={item.url}
        alt={item.name}
        count={`card${i + 1}`}
        key={uniqid()}
      />
    ))
  }
  </div>
);

export default CardContainer;
