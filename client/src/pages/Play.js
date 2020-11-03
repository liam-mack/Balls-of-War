import React, { useEffect, useState } from "react";
import API from "../utils/API";
import GameHand from "../components/GameHand";

function Play() {
  const [game, setGame] = useState();
  const [hand, setHand] = useState();

  useEffect(async () => {
    console.log("loaded");
    const p1Deck = await API.getPlayers("Lakers").then((res) => res.data);
    const p2Deck = await API.getPlayers("Raptors").then((res) => res.data);

    setGame({
      player1: {
        team: "Lakers",
        deck: p1Deck,
      },
      player2: {
        team: "Raptors",
        deck: p2Deck,
      },
    });
  }, []);

  function clickDeck() {
    const { deck } = game.player1;
    setHand(deck[0]);
  }
  return (
    <>
      <h1>Game Page</h1>
      {game ? (<h2>{game.player1.team} vs {game.player2.team}</h2>) : null}
      <button type="button" onClick={clickDeck}>Click Deck</button>

      {hand ? <GameHand {...hand} /> : null }
    </>
  );
}

export default Play;
