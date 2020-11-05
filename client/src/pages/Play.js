// /*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import Deck from "../components/Play/Deck";
import Card from "../components/Play/Card";

function Play() {
  const session = useParams();
  const [game, setGame] = useState();

  useEffect(async () => {
    const { data } = await API.getGame(session);
    setGame(data);
  }, []);

  async function deckClick() {
    const { data } = await API.playGame(game._id, "deckClick");
    setGame(data);
  }

  async function statClick({ id }) {
    const { data } = await API.playGame(game._id, "statClick", id);
    setGame(data);
  }

  return (
    <>
      <h1>Game Page</h1>
      {game && (
        <>
          <Deck onClick={deckClick} id="player1" className={`playCard1 ${game.player1.team}`} />
          <Deck onClick={deckClick} id="player2" className={`playCard2 ${game.player2.team}`} />
          {game.hand ? <Card onClick={statClick} player="player1" team={game.player1.team} {...game.hand} />
            : <Card onClick={statClick} player="player2" team={game.player1.team} {...game.hand} />}
        </>
      )}
    </>
  );
}

export default Play;
