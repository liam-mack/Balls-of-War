/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import "./deck.css";

function Deck({ id, deckClick, className }) {
  return (
    <button type="button" id={id} className={className} onClick={deckClick && ((e) => deckClick(e))} />
  );
}

export default Deck;
