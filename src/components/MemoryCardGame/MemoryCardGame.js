import React, { useState, useEffect } from 'react';
import OverviewMemoryCard from './OverviewMemoryCard';
import fetchCharacters from './utils/fetchCharacters';
import { handleCharacterClick, handleCharacterKeyDown } from './utils/handleClickAndKeyDownEvents';
import ScoreBoard from './ScoreBoard';
import GameOver from './GameOver';

const MemoryCardGame = () => {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [hasDataUpdated, setHasDataUpdated] = useState(false);

  const handleKeyDownOnCharacter = (e) => {
    handleCharacterKeyDown(e, data, score, setScore, setData, setIsGameOver);
  };

  const handleClickOnCharacter = (e) => {
    handleCharacterClick(e, data, score, setScore, setData, setIsGameOver);
  };

  /* Initialize game */
  useEffect(() => {
    fetchCharacters(setData, 2);
  }, []);

  /* Game over */
  useEffect(() => {
    if (isGameOver) {
      fetchCharacters(setData, 2);
      setScore(0);
      setTimeout(() => {
        setIsGameOver(false);
      }, 1000);
    }
  }, [isGameOver]);

  /* Score */
  useEffect(() => {
    if (score === 2) { fetchCharacters(setData, 3); }
    if (score === 5) { fetchCharacters(setData, 5); }
    if (score === 10) { fetchCharacters(setData, 10); }
    if (score === 20) { fetchCharacters(setData, 15); }
    if (score === 35) { fetchCharacters(setData, 20); }
    if (score === 55 || score === 95 || score === 115) { fetchCharacters(setData, 40); }
    if (score === 155) { setIsGameOver(true); }
    if (score > highScore) { setHighScore(score); }
  }, [score]);

  /* Data */
  useEffect(() => {
    setHasDataUpdated(false);
    setTimeout(() => { setHasDataUpdated(true); }, 300);
  }, [data]);

  if (data.length === 0) {
    return (
      <ScoreBoard
        score={score}
        highScore={highScore}
      />
    );
  }

  if (isGameOver) {
    return (
      <>
        <ScoreBoard
          score={score}
          highScore={highScore}
        />
        <GameOver />
      </>
    );
  }

  return (
    <>
      <ScoreBoard
        score={score}
        highScore={highScore}
      />
      <OverviewMemoryCard
        hasDataUpdated={hasDataUpdated}
        data={data}
        handleClickOnCharacter={handleClickOnCharacter}
        handleKeyDownOnCharacter={handleKeyDownOnCharacter}
      />
    </>
  );
};

export default MemoryCardGame;
