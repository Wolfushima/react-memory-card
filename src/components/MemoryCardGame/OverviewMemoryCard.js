import React from 'react';
import CardContainer from './CardContainer';

const OverviewMemoryCard = ({
  data, handleClickOnCharacter, handleKeyDownOnCharacter, hasDataUpdated,
}) => (
  <div className={`memory-card-container memory-card-${hasDataUpdated ? 'visible' : 'hidden'}`}>
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
