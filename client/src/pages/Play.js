/* eslint-disable */

import React, { useEffect, useState } from "react";
import API from "../utils/API";

function Play(props) {
  const [game, setGame] = useState({
    player1: {
      team: props.location.state.player1,
      deck: null,
      grave: null
    },
    player2: {
      team: props.location.state.player2,
      deck: null,
      grave: null
    },
    status: true
  });

  useEffect(() => {
    console.log("loaded")
  },[game.player1, game.player2])

  return (
  <>
  <h1>Game Page</h1>
  <h2>{props.location.state.player1} vs {props.location.state.player2}</h2>
    </>
  );
}

export default Play;
