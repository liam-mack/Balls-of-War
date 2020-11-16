/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import teams from "../utils/constants";
import "./selection.css";

function Selection() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const history = useHistory();

  const onChange = function (event) {
    event.target.name === "player1" ? setPlayer1(event.target.value) : setPlayer2(event.target.value);
  };

  useEffect(async () => {
    const { data } = await API.checkUser();
    data ? history.push(`/play/${data._id}`) : history.push("/selection");
  }, []);

  const startGame = async (e) => {
    e.preventDefault();
    if (!(player1 && player2)) {
      return;
    }

    API.createGame({ player1, player2 }).then((res) => {
      history.push(`/play/${res.data}`);
    });
  };

  return (
    <div className="home tempCheck">
      <h1 id="intro">Choose Your Teams</h1>
      <div className="playSelect1">
        <h2 id="playerone"> Player 1: <span id="teamName">{player1}</span></h2>
        {teams.map((team) => (
          <div key={`${team}One`}>
            <input key={`${team}InputOne`} id={team} type="radio" value={team} name="player1" onChange={onChange} required />
            <label key={`${team}LabelOne`} className={`playerDecks ${team}`} htmlFor={team} />
          </div>
        ))}
      </div>

      <div className="playSelect2">
        <h2 id="playertwo">Player 2: <span id="teamName">{player2}</span></h2>
        {teams.map((team) => (
          <div key={`${team}Two`}>
            <input id={`player2 ${team}`} type="radio" value={team} name="player2" onChange={onChange} required />
            <label className={`playerDecks ${team}`} htmlFor={`player2 ${team}`} />
          </div>
        ))}
      </div>

      <button type="submit" id="playButton" onClick={startGame}>
        <span>Start</span>
      </button>
    </div>
  );
}

export default Selection;
