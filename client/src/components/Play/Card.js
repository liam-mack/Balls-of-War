/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable */
import React from "react";
import "./card.scss";
import images from "../../images/Card/Images";

function Card ({ id, name, position, jersey, height, weight, points, fieldgoal, rebounds, assists, personalfouls, turnovers, onClick, team, player }) { 
  let photoUrl = (name.replace(/\s+/g, ''));
  photoUrl = (photoUrl.replace(/\./g,''));
  photoUrl = (photoUrl.replace(/\-/g,''));

  return (
    <div className={`${player}Card ${team}CardHome`}>
      <h4 className={`${player}Card__name`}>{ name } <div className={`playertip ${team}tip`}>{`#${jersey} ${team}, ${position}`}</div></h4>
      {/* <img className={`${player}Card__img`} src={images[photoUrl]} alt="playerImage" draggable="false" /> */}
      <img className={`${player}Card__img`} src={`${process.env.PUBLIC_URL}/images/${team}/${id}.png`} alt="playerImage" draggable="false" />

      <h4 id="height" className={`${player}Card__stat ${player}Card__${team}1`} onClick={onClick && ((e) => onClick(e.target))}>Height: {height}</h4>
      <div id="tooltip">6': Poor | 7': Good</div>

      <h4 id="weight" className={`${player}Card__stat ${player}Card__${team}2`} onClick={onClick && ((e) => onClick(e.target))}>Weight: {weight}</h4>
      <div id="tooltip">185: Poor | 260: Good</div>

      <h4 id="points" className={`${player}Card__stat ${player}Card__${team}1`} onClick={onClick && ((e) => onClick(e.target))}>Points: {points}</h4>
      <div id="tooltip">9: Poor | 15: Good</div>

      <h4 id="fieldgoal" className={`${player}Card__stat ${player}Card__${team}2`} onClick={onClick && ((e) => onClick(e.target))}>FG%: {fieldgoal}</h4>
      <div id="tooltip">40%: Poor | 50%: Good</div>

      <h4 id="rebounds" className={`${player}Card__stat ${player}Card__${team}1`} onClick={onClick && ((e) => onClick(e.target))}>Rebounds: {rebounds}</h4><div id="tooltip">3: Poor | 7: Good</div>

      <h4 id="assists" className={`${player}Card__stat ${player}Card__${team}2`} onClick={onClick && ((e) => onClick(e.target))}>Assists: {assists}</h4>
      <div id="tooltip">3 : Poor | 7: Good</div>

      <h4 id="personalfouls" className={`${player}Card__stat ${player}Card__${team}1`} onClick={onClick && ((e) => onClick(e.target))}>Fouls: {personalfouls} </h4><div id="tooltip">*Low Number Wins*</div>

      <h4 id="turnovers" className={`${player}Card__stat ${player}Card__${team}2`} onClick={onClick && ((e) => onClick(e.target))}>Turnovers: {turnovers} </h4><div id="tooltip">*Low Number Wins*</div>
    </div>
  );
}

export default Card;
