import React from "react";
import { images } from "../services/cardImages";
import Game from "./game";

function EasyLevel() {
  return (
    <Game images={images.easy} turnsNumber={13} title="Easy Card Memory Game" />
  );
}

export default EasyLevel;
