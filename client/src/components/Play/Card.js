/* eslint-disable */
import React, { Component } from "react";
import "./card.scss";
// import avatar from "../../images/Card/";

// function Card ({ name, position, jersey, height, weight, points, fieldgoal, rebounds, assists, personalfouls, turnovers, onClick }) {
function Card ({ name, position, jersey, height, weight, points, fieldgoal, rebounds, assists, personalfouls, turnovers, onClick }) {
  // console.log(props);

    return (
      <div className="playerCard1">

        <h4 onClick= { (event) => onClick(event.target) }>{ name }</h4>
        <h4 onClick= { (event) => onClick(event.target) }>{ position }</h4>
        <h4 onClick= { (event) => onClick(event.target) }>{ jersey }</h4>

        {/* < PlayerStats /> */}
        <h4 className="playerCard1__height stat" onClick= { (event) => onClick(event.target) }> { height} </h4>
        <h4 className="playerCard1__weight stat" onClick= { (event) => onClick(event.target) }> { weight} </h4>
        <h4 className="playerCard1__points stat" onClick= { (event) => onClick(event.target) }> { points} </h4>
        <h4 className="playerCard1__fieldgoal stat" onClick= { (event) => onClick(event.target) }> { fieldgoal} </h4>
        <h4 className="playerCard1__rebounds stat" onClick= { (event) => onClick(event.target) }> { rebounds} </h4>
        <h4 className="playerCard1__assists stat" onClick= { (event) => onClick(event.target) }> { assists} </h4>
        <h4 className="playerCard1__personalfouls stat" onClick= { (event) => onClick(event.target) }> { personalfouls } </h4>
        <h4 className="playerCard1__turnovers stat" onClick = { (event) => onClick(event.target) }> { turnovers}</h4>
      </div>
    )

}

export default Card;
