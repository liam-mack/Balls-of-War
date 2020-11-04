/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import "./deck.css";

function Deck({ id, onClick, className }) {
  return (
    <div id={id} className={className} onClick={async () => onClick()} />
  );
}

export default Deck;
// style={{backgroundImage:`url(${cardImg})`}}
