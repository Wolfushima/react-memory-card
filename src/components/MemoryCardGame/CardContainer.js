import React, { Fragment } from 'react';
import uniqid from 'uniqid';
import Card from './Card';

const CardContainer = ({ data, handleClickOnCharacter, handleKeyDownOnCharacter }) => (
  <div className="card-container">
    {
      data.map((item, i) => {
        if (i === 5 || i === 10 || i === 15) {
          return (
            <Fragment key={uniqid()}>
              <span className="break-line" />
              <Card
                src={item.url}
                alt={item.name}
                count={`card${i + 1}`}
                key={uniqid()}
                handleClickOnCharacter={handleClickOnCharacter}
                handleKeyDownOnCharacter={handleKeyDownOnCharacter}
              />
            </Fragment>
          );
        }
        return (
          <Card
            src={item.url}
            alt={item.name}
            count={`card${i + 1}`}
            key={uniqid()}
            handleClickOnCharacter={handleClickOnCharacter}
            handleKeyDownOnCharacter={handleKeyDownOnCharacter}
          />
        );
      })
   }
  </div>
);

export default CardContainer;
