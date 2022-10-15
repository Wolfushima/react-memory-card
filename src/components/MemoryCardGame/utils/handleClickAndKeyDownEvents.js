const handleCharacterClick = (e, data, score, setScore, setData, setIsGameOver) => {
  const characterName = e.target.alt;
  const character = data.find((obj) => obj.name === characterName);

  if (character.clicked === true) {
    setIsGameOver(true);
    return;
  }

  if (character.clicked === false) {
    const nextData = data.map((obj) => {
      if (obj.name === characterName) { return { ...obj, clicked: true }; }
      return obj;
    });
    const shuffledData = [...nextData];
    shuffledData.sort(() => Math.random() - 0.5);
    setData(shuffledData);
  }

  setScore(score + 1);
};

const handleCharacterKeyDown = (e, data, score, setScore, setData, setIsGameOver) => {
  if (e.key === 'Enter' || e.keyCode === 13) {
    const characterName = e.currentTarget.querySelector('img').alt;
    const character = data.find((obj) => obj.name === characterName);

    if (character.clicked === true) {
      setIsGameOver(true);
      return;
    }

    if (character.clicked === false) {
      const nextData = data.map((obj) => {
        if (obj.name === characterName) { return { ...obj, clicked: true }; }
        return obj;
      });
      const shuffledData = [...nextData];
      shuffledData.sort(() => Math.random() - 0.5);
      setData(shuffledData);
    }

    setScore(score + 1);
  }
};

export { handleCharacterClick, handleCharacterKeyDown };
