/* eslint-disable */

import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Placeholder from "../components/gamePage/placeholder";
import PlayerCard from "../components/gamePage/playerCard"

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
    console.log(game.player1.team, game.player2.team)
  },[game.player1, game.player2])

  function clickHandler(){

  }

  return (
  <>
  <h1>Game Page</h1>
  <h2>{props.location.state.player1} vs {props.location.state.player2}</h2>
  <div>
  <Placeholder
          player={game.player1.team}
          className="playCard1"
          // handleClick={this.clickHandler}
  />
  <Placeholder
          player={game.player2.team}
          className="playCard2"
          // handleClick={this.clickHandler}
  />
  </div>
    </>
  );
}

export default Play;
