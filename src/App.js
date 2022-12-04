import React, { useState } from "react";
import CardGrid from "./components/CardGrid";

const App = () => {

  const handleCardClick = () => {
    // Update the current score and best score
  };

  return (
    <div className="App">
      <CardGrid onCardClick={handleCardClick} />
    </div>
  );
};

export default App;
