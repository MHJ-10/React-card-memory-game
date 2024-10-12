import React from "react";
import { images } from "../services/cardImages";
import Game from "./game";

function HardLevel() {
  return (
    <Game images={images.hard} turnsNumber={17} title="Hard Card Memory Game" />
  );
}

export default HardLevel;
