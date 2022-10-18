import React, { useState } from 'react';

const Card = ({
  src, alt, count, handleClickOnCharacter, handleKeyDownOnCharacter,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`card ${count} character-${imageLoaded ? 'visible' : 'hidden'}`}
      onKeyDown={handleKeyDownOnCharacter}
      onClick={handleClickOnCharacter}
      role="button"
      tabIndex={0}
    >
      <img
        className={
          `smooth-image character character-${imageLoaded ? 'visible' : 'hidden'}`
        }
        onLoad={() => setImageLoaded(true)}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Card;
