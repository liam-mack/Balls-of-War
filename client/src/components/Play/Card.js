/* eslint-disable */
import React from "react";
import "./card.scss";
import images from "../../images/Card/Images";
// images[photoUrl]

// function Card ({ name, position, jersey, height, weight, points, fieldgoal, rebounds, assists, personalfouls, turnovers, onClick }) {
function Card ({ name, position, jersey, height, weight, points, fieldgoal, rebounds, assists, personalfouls, turnovers, onClick, team, player }) { 
  let photoUrl = (name.replace(/\s+/g, ''));
  photoUrl = (photoUrl.replace(/\./g,''));
  photoUrl = (photoUrl.replace(/\-/g,''));
  console.log(photoUrl)
  // const image = `../../images/Card/${team}/${photoUrl}.png`

    return (
      <div className={ `${player}Card ${team}CardHome`}>
        <h4 className={`${player}Card__name`}onClick= { (event) => onClick(event.target) }>{ name } <div className={`playertip ${team}tip`}>{`#${jersey} ${team}, ${position}`}</div></h4>
        <img className= {`${player}Card__img`} src={ images[photoUrl] } alt="playerImage"/>
        {/* < PlayerStats /> */}
        <h4 id="height" className= {`${player}Card__stat ${player}Card__${team}1`} onClick= { (event) => onClick(event.target) }> Height: { height} <div id="tooltip"> Team Average: </div></h4> 
        <h4 id="weight" className={`${player}Card__stat ${player}Card__${team}2`} onClick= { (event) => onClick(event.target) }> Weight: { weight} <div id="tooltip"> Team Average: </div></h4>
        <h4 id="points" className={`${player}Card__stat ${player}Card__${team}1`} onClick= { (event) => onClick(event.target) }> Points: { points} <div id="tooltip"> Team Average: </div></h4>
        <h4 id="fieldgoal" className={`${player}Card__stat ${player}Card__${team}2`} onClick= { (event) => onClick(event.target) }> FG%: { fieldgoal} <div id="tooltip"> Team Average: </div></h4>
        <h4 id="rebounds" className={`${player}Card__stat ${player}Card__${team}1`} onClick= { (event) => onClick(event.target) }> Rebounds: { rebounds} <div id="tooltip"> Team Average: </div></h4>
        <h4 id="assists" className={`${player}Card__stat ${player}Card__${team}2`} onClick= { (event) => onClick(event.target) }> Assists: { assists} <div id="tooltip"> Team Average: </div></h4>
        <h4 id="personalfouls" className={`${player}Card__stat ${player}Card__${team}1`} onClick= { (event) => onClick(event.target) }> Fouls: {personalfouls} <div id="tooltip"> Team Average: </div></h4>
        <h4 id="turnovers" className={`${player}Card__stat ${player}Card__${team}2`} onClick = { (event) => onClick(event.target) }> Turnovers: {turnovers} <div id="tooltip"> Team Average: </div></h4>
      </div>
    )
}

export default Card;
