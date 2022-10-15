const handleCharacterClick = (e, data, score, setScore, setData) => {
  const characterName = e.target.alt;
  const character = data.find((obj) => obj.name === characterName);

  if (character.clicked === true) { return; }

  if (character.clicked === false) {
    setData(data.map((obj) => {
      if (obj.name === characterName) {
        return { ...obj, clicked: true };
      }
      return obj;
    }));
  }

  setScore(score + 1);
};

const handleCharacterKeyDown = (e, data, score, setScore, setData) => {
  if (e.key === 'Enter' || e.keyCode === 13) {
    const characterName = e.currentTarget.querySelector('img').alt;
    const character = data.find((obj) => obj.name === characterName);

    if (character.clicked === true) { return; }

    if (character.clicked === false) {
      setData(data.map((obj) => {
        if (obj.name === characterName) {
          return { ...obj, clicked: true };
        }
        return obj;
      }));
    }

    setScore(score + 1);
  }
};

export { handleCharacterClick, handleCharacterKeyDown };
