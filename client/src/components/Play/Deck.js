/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import "./deck.css";

function Deck({ id, onClick, className }) {
  return (
    onClick
      ? <div id={id} className={className} onClick={() => onClick()} />
      : <div id={id} className={className} />
  );
}

export default Deck;
