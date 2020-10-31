/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Selection() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const onChange = function (event) {
    event.target.name === "player1" ? setPlayer1(event.target.value) : setPlayer2(event.target.value);
  };

  return (
    <>
      <h1>Decks Page</h1>
      <h3> Player 1: {player1}</h3>
      <div>
        <input type="radio" value="lakers" name="player1" onChange={onChange} /> Lakers
        <input type="radio" value="heat" name="player1" onChange={onChange} /> Heat
        <input type="radio" value="raptors" name="player1" onChange={onChange} /> Raptors
        <input type="radio" value="rockets" name="player1" onChange={onChange} /> Rockets
      </div>
      <h3>Player 2: {player2}</h3>
      <div>
        <input type="radio" value="lakers" name="player2" onChange={onChange} /> Lakers
        <input type="radio" value="heat" name="player2" onChange={onChange} /> Heat
        <input type="radio" value="raptors" name="player2" onChange={onChange} /> Raptors
        <input type="radio" value="rockets" name="player2" onChange={onChange} /> Rockets
      </div>
      <Link to={{ pathname: "/play/", state: { player1, player2 } }}>Play</Link>
    </>
  );
}

export default Selection;
