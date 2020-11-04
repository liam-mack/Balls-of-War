/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import API from "../utils/API";
<<<<<<< HEAD
import Deck from "../components/Play/Deck";
import Actions from "../utils/Actions";
=======
import Placeholder from "../components/gamePage/placeholder";
import Graveyard from "../components/gamePage/grave"
import GameHand from "../components/GameHand";
>>>>>>> main

function Play() {
  const session = useParams();
  const [game, setGame] = useState();
  // const [hand, setHand] = useState();

<<<<<<< HEAD
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
=======
  // useEffect(async () => {
  //   console.log("loaded");
  //   const p1Deck = await API.getPlayers("Lakers").then((res) => res.data);
  //   const p2Deck = await API.getPlayers("Raptors").then((res) => res.data);

  //   setGame({
  //     player1: {
  //       team: "Lakers",
  //       deck: p1Deck,
  //     },
  //     player2: {
  //       team: "Raptors",
  //       deck: p2Deck,
  //     },
  //   });
  // }, []);

  // function clickDeck() {
  //   const { deck } = game.player1;
  //   setHand(deck[0]);
  // }
  // return (
  //   <>
  //     <h1>Game Page</h1>
  //     {game ? (<h2>{game.player1.team} vs {game.player2.team}</h2>) : null}
  //     <button type="button" onClick={clickDeck}>Click Deck</button>

  //     {hand ? <GameHand {...hand} /> : null }
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


  return (
  <>
  <h1>Game Page</h1>
  <h2>{props.location.state.player1} vs {props.location.state.player2}</h2>
  <div>
  <Placeholder
          player={game.player1.team}
          className="playCard1"
  />
  <Placeholder
          player={game.player2.team}
          className="playCard2"
  />
  <Graveyard className='player1'/>
  <Graveyard className='player2'/>
  </div>
>>>>>>> main
    </>
  );
}

export default Play;
