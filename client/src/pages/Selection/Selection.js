/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import "./selection.css";

function Selection() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const teams = ["lakers", "heat", "raptors", "rockets"];
  let history = useHistory();

  const onChange = function (event) {
    event.target.name === "player1" ? setPlayer1(event.target.value) : setPlayer2(event.target.value);
  };

  useEffect(async () => {
    await API.checkUser().then((res) => {
      history.push(`/play/${res.data._id}`)
    })
  }, []);

  async function redirect() {
    await API.createGame({ player1, player2 }).then((res) => {
      console.log(res);
      history.push(`/play/${res.data}`);
    });
  }

  return (
    <div className="tempCheck">
      <h1 id="intro">Choose Your Teams</h1>
      <div className="playSelect1">
        <h2 id="playerone"> Player 1 Select: <span id="teamName">{player1}</span></h2>
        {teams.map((team, index) => (
          <>
            <input key={index} id={team} type="radio" value={team} name="player1" onChange={onChange} />
            <label className={`playerDecks ${team}`} htmlFor={team} />
          </>
        ))}
      </div>

      <h1 id="versus">VS</h1>

      <div className="playSelect2">
        <h2 id="playertwo">Player 2 Select: <span id="teamName">{player2}</span></h2>
        {teams.map((team, index) => (
          <>
            <input id={`player2 ${team}`} type="radio" value={team} name="player2" onChange={onChange} />
            <label key={index} className={`playerDecks ${team}`} htmlFor={`player2 ${team}`} />
          </>
        ))}
      </div>

      <button
        type="button"
        id="playButton"
        onClick={redirect}
      >
        <span>Start</span>
      </button>
    </div>
  );
}

export default Selection;
