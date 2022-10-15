import React from 'react';
import CardContainer from './CardContainer';

const OverviewMemoryCard = ({ data, handleClickOnCharacter, handleKeyDownOnCharacter }) => (
  <div className="memory-card-container">
    <div className="cards-container">
      <CardContainer
        data={data}
        handleClickOnCharacter={handleClickOnCharacter}
        handleKeyDownOnCharacter={handleKeyDownOnCharacter}
      />
    </div>
  </div>
);

export default OverviewMemoryCard;
