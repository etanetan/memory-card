import React from "react";

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="Scoreboard">
      <p>Best Score: {bestScore}</p>
      <p>Current Score: {currentScore}</p>
    </div>
  );
};

export default Scoreboard;
