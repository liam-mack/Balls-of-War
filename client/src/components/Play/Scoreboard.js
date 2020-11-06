/* eslint-disable */
import React from "react";
import Lakers from "../../images/Lakers.png";
import Heat from "../../images/Heat.png";
import Rockets from "../../images/Rockets.png";
import Raptors from "../../images/Raptors.png";
import "./scoreboard.scss"

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
    <div className="scoreboard">
      Generic Scoreboard {gameState.player1.team} <img alt="homeLogo" src={homeLogo} className="scoreboard__Logo"/>  {gameState.player2.team} <img alt="awayLogo" src={awayLogo} className="scoreboard__Logo"/>
    </div>
  );
}
