import React from "react";

export default function Scoreboard({ gameState }) {
//   console.log(gameState.player1);
  return (
    <div className="scoreboard">
      Generic Scoreboard between {gameState.player1.team} and {gameState.player2.team};
    </div>
  );
}
