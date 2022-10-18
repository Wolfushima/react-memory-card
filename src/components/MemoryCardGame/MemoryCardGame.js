import React, { useState, useEffect } from 'react';
import OverviewMemoryCard from './OverviewMemoryCard';
import fetchCharacters from './utils/fetchCharacters';
import { handleCharacterClick, handleCharacterKeyDown } from './utils/handleClickAndKeyDownEvents';
import ScoreBoard from './ScoreBoard';
import GameOver from './GameOver';

const MemoryCardGame = () => {
  const [data, setData] = useState([]);
  const [lvl, setLevel] = useState('');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

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

  /* Level */
  useEffect(() => {
    if (lvl === 'EASY') { fetchCharacters(setData, 5); }
    if (lvl === 'MEDIUM') { fetchCharacters(setData, 10); }
    if (lvl === 'HARD') { fetchCharacters(setData, 15); }
    if (lvl === 'EXTRAHARD') { fetchCharacters(setData, 20); }
  }, [lvl]);

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
    if (score === 5) { setLevel('EASY'); }
    if (score === 10) { setLevel('MEDIUM'); }
    if (score === 15) { setLevel('HARD'); }
    if (score === 20) { setLevel('EXTRAHARD'); }
    if (score > highScore) { setHighScore(score); }
  }, [score]);

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
        data={data}
        handleClickOnCharacter={handleClickOnCharacter}
        handleKeyDownOnCharacter={handleKeyDownOnCharacter}
      />
    </>
  );
};

export default MemoryCardGame;
