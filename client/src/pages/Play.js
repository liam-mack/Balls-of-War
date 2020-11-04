/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import API from "../utils/API";
import Deck from "../components/Play/Deck";
import Actions from "../utils/Actions";
// import PlayerCard from "../components/gamePage/playerCard"
// import Actions from "../utils/Actions";
// import GameHand from "../components/GameHand";


function Play() {
  const session = useParams();
  const [game, setGame] = useState();
  // const [hand, setHand] = useState();

  useEffect(async () => {
    const { data } = await API.getGame(session);
    setGame(data);
  }, []);

  async function deckClick(player) {
    const card = await Actions.clickDeck(game[player].deck)
    // setHand(card);
    console.log(card);
  }
  return (
    <>
      <h1>Game Page</h1>
      {game ? (
        <>
          <Deck onClick={deckClick} id="player1" className={`playCard1 ${game.player1.team}`} />
          <Deck onClick={deckClick} id="player2" className={`playCard2 ${game.player2.team}`} />
        </>
      )
        : null}
    </>
  );
}

export default Play;
