import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import API from "../utils/API";
import Deck from "../components/Play/Deck";
import Card from "../components/Play/Card";
import Graveyard from "../components/Play/Graveyard";
import Scoreboard from "../components/Play/Scoreboard";

function Play() {
  const session = useParams();
  const [game, setGame] = useState();
  const history = useHistory();

  useEffect(async () => {
    const res = await API.getGame(session);
    if (!res) {
      history.push("/");
    }
    setGame(res.data);
  }, []);

  async function deckClick() {
    const res = await API.playGame(game._id, "deckClick");
    if (!res) {
      history.push("/");
    }
    setGame(res.data);
  }

  async function statClick({ id }) {
    console.log(id);
    const check = await API.playGame(game._id, "oppHand");
    if (!check) {
      history.push("/");
    }
    setGame(check.data);
    setTimeout(async () => {
      const res = await API.playGame(game._id, "statClick", id);
      setGame(res.data);
    }, 3000);
  }

  return (
    <>
      {game && (
        <>
          {game.player1.grave.length > 0 && <Graveyard className="player1" />}
          {game.player2.grave.length > 0 && <Graveyard className="player2" />}

          {game.turn
            ? (
              <>
                <Deck onClick={deckClick} id="player1Active" className={`playCard1 ${game.player1.team}`} />
                <Deck id="player2" className={`playCard2 ${game.player2.team}`} />
                {(game.player1.hand.length > 0 && <Card onClick={statClick} player="player1" team={game.player1.team} {...game.player1.hand[0]} />)}
                {(game.player2.hand.length > 0 && <Card player="player2" team={game.player2.team} {...game.player2.hand[0]} />)}
                <Scoreboard gameState={game} />
              </>
            )
            : (
              <>
                <Deck id="player1" className={`playCard1 ${game.player1.team}`} />
                <Deck onClick={deckClick} id="player2Active" className={`playCard2 ${game.player2.team}`} />
                {(game.player2.hand.length > 0 && <Card onClick={statClick} player="player2" team={game.player2.team} {...game.player2.hand[0]} />)}
                {(game.player1.hand.length > 0 && <Card player="player1" team={game.player1.team} {...game.player1.hand[0]} />)}
                <Scoreboard gameState={game} />
              </>
            )}
        </>
      )}
    </>
  );
}

export default Play;
