/* eslint-disable */
import React from "react";
import "./card.scss";
// import avatar from "../../images/Card/";

// function Card ({ name, position, jersey, height, weight, points, fieldgoal, rebounds, assists, personalfouls, turnovers, onClick }) {
function Card ({ name, position, jersey, height, weight, points, fieldgoal, rebounds, assists, personalfouls, turnovers, onClick, team, player }) {

    return (
      <div className="playerCard1">
        <h4 onClick= { (event) => onClick(event.target) }>{ name } </h4>
        <h4 onClick= { (event) => onClick(event.target) }>{ position } {player}</h4>
        <h4 onClick= { (event) => onClick(event.target) }>{ jersey } {team}</h4>

        {/* < PlayerStats /> */}
        <h4 id="height" className="playerCard1__height stat" onClick= { (event) => onClick(event.target) }> height { height} </h4>
        <h4 id="weight" className="playerCard1__weight stat" onClick= { (event) => onClick(event.target) }> weight { weight} </h4>
        <h4 id="points" className="playerCard1__points stat" onClick= { (event) => onClick(event.target) }> points { points} </h4>
        <h4 id="fieldgoal" className="playerCard1__fieldgoal stat" onClick= { (event) => onClick(event.target) }> fieldgoal { fieldgoal} </h4>
        <h4 id="rebounds" className="playerCard1__rebounds stat" onClick= { (event) => onClick(event.target) }> rebounds { rebounds} </h4>
        <h4 id="assists" className="playerCard1__assists stat" onClick= { (event) => onClick(event.target) }> assists { assists} </h4>
        <h4 id="personalfouls" className="playerCard1__personalfouls stat" onClick= { (event) => onClick(event.target) }> personalfouls {personalfouls} </h4>
        <h4 id="turnovers" className="playerCard1__turnovers stat" onClick = { (event) => onClick(event.target) }> turnovers {turnovers}</h4>
      </div>
    )
}

export default Card;
