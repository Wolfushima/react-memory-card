import React from 'react';

const Card = ({
  src, alt, count, handleClickOnCharacter, handleKeyDownOnCharacter,
}) => (
  <div
    className={`card ${count}`}
    onKeyDown={handleKeyDownOnCharacter}
    onClick={handleClickOnCharacter}
    role="button"
    tabIndex={0}
  >
    <img className="character" src={src} alt={alt} />
  </div>
);

export default Card;
