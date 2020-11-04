/* eslint-disable */
import React from "react";
import "./card.css"

function Card ({ name, position, jersey, height, weight, points, fieldgoal, rebounds, assists, personalfouls, turnovers, onClick }) {
  // console.log(props);

    return (
      <div className="{playerTeam}">
        <h4 onClick= { (event) => onClick(event.target) } className="{playerName}">{ name }</h4>
        {/* <h4 onClick= { (event) => onClick(event.target) }>{ position }</h4>
        <h4 onClick= { (event) => onClick(event.target) }>{ jersey }</h4>
        <img className={name} /> */}
        {/* < PlayerStats /> */}
        <h4 id="height" onClick= { (event) => onClick(event.target) }> { height} </h4>
        <h4 id="weight" onClick= { (event) => onClick(event.target) }> { weight} </h4>
        <h4 id="points" onClick= { (event) => onClick(event.target) }> { points} </h4>
        <h4 id="fieldgoal" onClick= { (event) => onClick(event.target) }> { fieldgoal} </h4>
        <h4 id="rebounds" onClick= { (event) => onClick(event.target) }> { rebounds} </h4>
        <h4 id="assists" onClick= { (event) => onClick(event.target) }> { assists} </h4>
        <h4 id="personalfouls" onClick= { (event) => onClick(event.target) }> { personalfouls } </h4>
        <h4 id="turnovers" onClick = { (event) => onClick(event.target) }> { turnovers}</h4>
      </div>
    )

}

export default Card;
