/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import API from "../utils/API";
import Deck from "../components/Play/Deck";
import Actions from "../utils/Actions";
import Card from "../components/Play/Card"

function Play() {
  const session = useParams();
  const [game, setGame] = useState();
  // const [hand, setHand] = useState();

  useEffect(async () => {
    const { data } = await API.getGame(session);
    setGame(data);
  }, []);

  async function deckClick() {
    await API.playGame(game._id, "deckClick");
  }
  async function statClick({id}) {
    console.log(id)
    await API.playGame(game._id, `statClick`, id  )

  }
  return (
    <>
      <h1>Game Page</h1>
      {game ? (
        <>
          <Deck onClick={deckClick} id="player1" className={`playCard1 ${game.player1.team}`} />
          <Deck onClick={deckClick} id="player2" className={`playCard2 ${game.player2.team}`} />

          < Card onClick={statClick}{ ...game.hand }/>
        </>
      )  
        : null}
    </>

  );
}

export default Play;
