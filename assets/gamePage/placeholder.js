/* eslint-disable */
import React from "react";

function CardHolder({ player, className }) {
  return (
    <div className={`${player}Deck ${className}`} />
  );
}

export default CardHolder;
