import React, { useState, useEffect } from 'react';
import OverviewMemoryCard from './OverviewMemoryCard';
import fetchCharacters from './utils/fetchCharacters';

const MemoryCardGame = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCharacters(setData, 5);
  }, []);

  return (
    <OverviewMemoryCard
      data={data}
    />
  );
};

export default MemoryCardGame;
