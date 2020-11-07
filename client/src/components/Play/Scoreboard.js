/* eslint-disable */
import React from "react";
import Lakers from "../../images/Lakers.png";
import Heat from "../../images/Heat.png";
import Rockets from "../../images/Rockets.png";
import Raptors from "../../images/Raptors.png";
import "./scoreboard.scss";

export default function Scoreboard({ gameState }) {
  let homeLogo;
  let awayLogo;
  switch (gameState.player1.team) {
    case "Lakers":
      homeLogo = Lakers;
      break;
    case "Heat":
      homeLogo = Heat;
      break;
    case "Raptors":
      homeLogo = Raptors;
      break;
    case "Rockets":
      homeLogo = Rockets;
      break;
  }
  switch (gameState.player2.team) {
    case "Lakers":
      awayLogo = Lakers;
      break;
    case "Heat":
      awayLogo = Heat;
      break;
    case "Raptors":
      awayLogo = Raptors;
      break;
    case "Rockets":
      awayLogo = Rockets;
      break;
  }
  return (
    <footer className="scoreboard">
      <div className="scoreboard__stats">
        {console.log(gameState)}
         {gameState.player1.team} Bench: {gameState.player1.deck.length}
          <img alt="homeLogo" src={homeLogo} className="scoreboard__logo" />
          Turn: <img id="possession"src={gameState.turn ? `${homeLogo}` : `${awayLogo}`}></img>
          <img alt="awayLogo" src={awayLogo} className="scoreboard__logo" />
          {gameState.player2.team} Bench: {gameState.player2.deck.length}
        </div>
    </footer>
  );
}
