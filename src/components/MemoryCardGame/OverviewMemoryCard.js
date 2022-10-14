import React from 'react';
import CardContainer from './CardContainer';

const OverviewMemoryCard = ({ data }) => (
  <div className="memory-card-container">
    <div className="cards-container">
      <CardContainer
        data={data}
      />
    </div>
  </div>
);

export default OverviewMemoryCard;
