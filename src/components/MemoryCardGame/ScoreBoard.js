import React from 'react';

const ScoreBoard = ({ score, highScore }) => (
  <div className="score-board-container">
    <div className="score-container">
      <p className="score__text">Score:</p>
      <p className="score__value">{score}</p>
    </div>
    <div className="high-score-container">
      <p className="high-score__text">High Score:</p>
      <p className="high-score__value">{highScore}</p>
    </div>
  </div>
);

export default ScoreBoard;
