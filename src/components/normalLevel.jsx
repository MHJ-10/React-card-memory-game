import React from "react";
import { images } from "../services/cardImages";
import Game from "./game";

function NormalLevel() {
  return (
    <Game
      images={images.normal}
      turnsNumber={15}
      title="Normal Card Memory Game"
    />
  );
}

export default NormalLevel;
