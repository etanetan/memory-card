import React, { useState } from "react";
import "../cardStyle.css";
import bulbasaur from "../images/bulbasaur.png";
import charmander from "../images/charmander.png";
import geodude from "../images/geodude.png";
import jigglypuff from "../images/jigglypuff.png";
import magikarp from "../images/magikarp.png";
import meowth from "../images/meowth.png";
import mew from "../images/mew.png";
import pikachu from "../images/pikachu.png";
import psyduck from "../images/psyduck.png";
import squirtle from "../images/squirtle.png";
import Card from "./Card";
import Scoreboard from "./Scoreboard";

const CardGrid = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: pikachu,
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 2,
      image: squirtle,
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 3,
      image: charmander,
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 4,
      image: magikarp,
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 5,
      image: mew,
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 6,
      image: bulbasaur,
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 7,
      image: geodude,
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 8,
      image: psyduck,
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 9,
      image: meowth,
      isFlipped: false,
      isMatched: false,
    },
    {
      id: 10,
      image: jigglypuff,
      isFlipped: false,
      isMatched: false,
    },
  ]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestSCore] = useState(0);

  const handleCardClick = (card) => {
    // Check if all of the cards have been clicked
    if (card.isFlipped) {
      alert("You Lost!");

      // Reset the game
      setCards(cards.map((c) => ({ ...c, isFlipped: false })));
      setScore(0);
      return;
    } else {
      setScore((prevScore) => prevScore + 1);
      if (score === bestScore) {
        setBestSCore((prevScore) => prevScore + 1);
      }

      // Flip the clicked card
      setCards(
        cards.forEach((c) => {
          if (c.id === card.id) {
            c.isFlipped = true;
          } else {
            c.isFlipped = false;
          }
        })
      );
    }

    if (cards.every((c) => c.isFlipped)) {
      // Display an alert to the user
      alert("You won!");

      // Reset the game
      setCards(cards.map((c) => ({ ...c, isFlipped: false })));
      setScore(0);
    } else {
      // Shuffle the cards
      setCards(cards.sort(() => Math.random() - 0.5));
    }
  };

  return (
    <div>
      <Scoreboard currentScore={score} bestScore={bestScore} />
      <div className="gridOfCards">
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
