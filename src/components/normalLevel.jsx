import React, { useState } from "react";
import UseMatchCards from "../hooks/useMatchCards";
import Card from "./card";
import LoseAlert from "./loseAlert";
import WinAlert from "./winAlert";
import { images } from "../services/cardImages";

function NormalLevel() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [turns, setTurns] = useState(15);
  const [disabled, setDisabled] = useState(false);
  const [showWinAlert, setShowWinAlert] = useState(true);

  function shufflecards() {
    const shufflecards = [...images.normal, ...images.normal]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shufflecards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(15);
  }

  function handleChoice(card) {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  UseMatchCards(
    choiceOne,
    choiceTwo,
    setDisabled,
    setCards,
    resetTurns,
    shufflecards
  );

  LoseAlert(turns, setCards, cards, setShowWinAlert);
  WinAlert(turns, cards, showWinAlert);

  function resetTurns() {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns - 1);
    setDisabled(false);
  }

  return (
    <div>
      <div className="text-center my-2 border border-2 rounded-pill bg-danger bg-gradient bg-opacity-25">
        <h4 className="text-light p-2 ">NORMAL CARD MEMORY GAME</h4>
        <button className="btn btn-success btn-sm" onClick={shufflecards}>
          New Game
        </button>
        <h5 className="text-light p-2">Turns: {turns}</h5>
      </div>
      <div className="row row-cols-4 w-100">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default NormalLevel;
