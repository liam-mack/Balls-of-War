/* eslint-disable */
import React from "react";
import "./card.scss";
import images from "../../images/Card/Images";

function Card ({ name, position, jersey, height, weight, points, fieldgoal, rebounds, assists, personalfouls, turnovers, onClick, team, player }) { 
  let photoUrl = (name.replace(/\s+/g, ''));
  photoUrl = (photoUrl.replace(/\./g,''));
  photoUrl = (photoUrl.replace(/\-/g,''));

    return (onClick ? (
      
      <div className={ `${player}Card ${team}CardHome`}>
        <h4 className={`${player}Card__name`}>{ name } <div className={`playertip ${team}tip`}>{`#${jersey} ${team}, ${position}`}</div></h4>
        <img className= {`${player}Card__img`} src={ images[photoUrl] } alt="playerImage" draggable="false"/>
        <h4 id="height" className= {`${player}Card__stat ${player}Card__${team}1`} onClick= { (event) => onClick(event.target) }> Height: { height} </h4> <div id="tooltip"> 6': Poor | 7': Good </div>
        <h4 id="weight" className={`${player}Card__stat ${player}Card__${team}2`} onClick= { (event) => onClick(event.target) }> Weight: { weight} </h4> <div id="tooltip"> 185: Poor | 260: Good </div>
        <h4 id="points" className={`${player}Card__stat ${player}Card__${team}1`} onClick= { (event) => onClick(event.target) }> Points: { points} </h4> <div id="tooltip"> 9: Poor | 15: Good</div>
        <h4 id="fieldgoal" className={`${player}Card__stat ${player}Card__${team}2`} onClick= { (event) => onClick(event.target) }> FG%: { fieldgoal} </h4> <div id="tooltip"> 40%: Poor | 50%: Good </div>
        <h4 id="rebounds" className={`${player}Card__stat ${player}Card__${team}1`} onClick= { (event) => onClick(event.target) }> Rebounds: { rebounds} </h4><div id="tooltip"> 3: Poor | 7: Good </div>
        <h4 id="assists" className={`${player}Card__stat ${player}Card__${team}2`} onClick= { (event) => onClick(event.target) }> Assists: { assists} </h4><div id="tooltip"> 3 : Poor | 7: Good  </div>
        <h4 id="personalfouls" className={`${player}Card__stat ${player}Card__${team}1`} onClick= { (event) => onClick(event.target) }> Fouls: {personalfouls} </h4><div id="tooltip"> *Low Number Wins* </div>
        <h4 id="turnovers" className={`${player}Card__stat ${player}Card__${team}2`} onClick = { (event) => onClick(event.target) }> Turnovers: {turnovers} </h4><div id="tooltip"> *Low Number Wins* </div>
      </div>
  ): 
      <div className={ `${player}Card ${team}CardHome `}>
        <h4 className={`${player}Card__name`}>{ name } <div className={`playertip ${team}tip`}>{`#${jersey} ${team}, ${position}`}</div></h4>
        <img className= {`${player}Card__img`} src={ images[photoUrl] } alt="playerImage" draggable="false"/>
        <h4 id="height" className= {`${player}Card__stat ${player}Card__${team}1`} > Height: { height} </h4> <div id="tooltip"> 6': Poor | 7': Good </div>
        <h4 id="weight" className={`${player}Card__stat ${player}Card__${team}2`} > Weight: { weight} </h4> <div id="tooltip"> 185: Poor | 260: Good </div>
        <h4 id="points" className={`${player}Card__stat ${player}Card__${team}1`} > Points: { points} </h4> <div id="tooltip"> 9: Poor | 15: Good </div>
        <h4 id="fieldgoal" className={`${player}Card__stat ${player}Card__${team}2`} > FG%: { fieldgoal} </h4> <div id="tooltip"> 40%: Poor | 50%: Good </div>
        <h4 id="rebounds" className={`${player}Card__stat ${player}Card__${team}1`} > Rebounds: { rebounds} </h4><div id="tooltip"> 3: Poor | 7: Good </div>
        <h4 id="assists" className={`${player}Card__stat ${player}Card__${team}2`} > Assists: { assists} </h4><div id="tooltip"> 3: Poor | 7: Good </div>
        <h4 id="personalfouls" className={`${player}Card__stat ${player}Card__${team}1`} > Fouls: {personalfouls} </h4><div id="tooltip"> *Low Number Wins* </div>
        <h4 id="turnovers" className={`${player}Card__stat ${player}Card__${team}2`} > Turnovers: {turnovers} </h4><div id="tooltip"> *Low Number Wins* </div>
      </div>
    )
}

export default Card;
