/*eslint-disable*/
import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Placeholder from "../components/gamePage/placeholder";
import Graveyard from "../components/gamePage/grave"
import GameHand from "../components/GameHand";

function Play(props) {
  // const [game, setGame] = useState();
  // const [hand, setHand] = useState();

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
    </>
  );
}

export default Play;
