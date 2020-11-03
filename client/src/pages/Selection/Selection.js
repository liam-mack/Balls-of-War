/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./selection.css"


function Selection() {
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const onChange = function (event) {
    event.target.name === "player1" ? setPlayer1(event.target.value) : setPlayer2(event.target.value);
  };

  const [teams, setTeams] = useState(["lakers", "heat", "raptors", "rockets"]);
  return (
    <div className="tempCheck">
      <h1 id='intro'>Choose Your Teams</h1>
      <div className="playSelect1">
      <h2 id='playerone'> Player 1 Select: <span id='teamName'>{player1}</span></h2>
          {teams.map(team=>{
              return (
                <>
                    <input id={team} type="radio" value={team} name="player1" onChange={onChange}/> 
                    {/* {team} */}
                    <label className={`playerDecks ${team}`} for={team}></label>
                </>
              )
              ;
          })}
      </div>
      <h1 id='versus'>VS</h1>
      <div className="playSelect2">
      <h2 id='playertwo'>Player 2 Select: <span id='teamName'>{player2}</span></h2>
      {teams.map(team=>{
              return (
                <>
                    <input id={`player2 ${team}`} type="radio" value={team} name="player2" onChange={onChange}/> 
                    {/* {team} */}
                    <label className={`playerDecks ${team}`} for={`player2 ${team}`}></label>
                </>
              )
              ;
          })}      
        </div>
      <button id='playButton'><Link to={{ pathname: "/play/", state: { player1, player2 } }}><span>Start</span></Link></button>
    </div>
  );
}

export default Selection;
