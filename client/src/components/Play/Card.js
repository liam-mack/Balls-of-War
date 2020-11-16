/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable */
import React from "react";
import "./card.scss";
import images from "../../images/Card/Images";

function Card ({ name, position, jersey, height, weight, points, fieldgoal, rebounds, assists, personalfouls, turnovers, onClick, team, player }) { 
  let photoUrl = (name.replace(/\s+/g, ''));
  photoUrl = (photoUrl.replace(/\./g,''));
  photoUrl = (photoUrl.replace(/\-/g,''));

  return (
    <div className={`${player}Card ${team}CardHome`} >
      <h4 className={`${player}Card__name`}>{ name } <div className={`playertip ${team}tip`}>{`#${jersey} ${team}, ${position}`}</div></h4>
      <img className={`${player}Card__img`} src={images[photoUrl]} alt="player image" draggable="false" />
      {/* <img className={`${player}Card__img`} src={process.env.PUBLIC_URL + "/images/Rockets/JamesHarden.png"} alt="playerImage" draggable="false" /> */}

      <div onClick={onClick && ((e) => onClick(e))}>
      <h4 id="height" className={`${player}Card__stat ${player}Card__${team}1`}>Height: {height}</h4>
      <div id="tooltip">6': Poor | 7': Good</div>

      <h4 id="weight" className={`${player}Card__stat ${player}Card__${team}2`}>Weight: {weight}</h4>
      <div id="tooltip">185: Poor | 260: Good</div>

      <h4 id="points" className={`${player}Card__stat ${player}Card__${team}1`}>Points: {points}</h4>
      <div id="tooltip">9: Poor | 15: Good</div>

      <h4 id="fieldgoal" className={`${player}Card__stat ${player}Card__${team}2`}>FG%: {fieldgoal}</h4>
      <div id="tooltip">40%: Poor | 50%: Good</div>

      <h4 id="rebounds" className={`${player}Card__stat ${player}Card__${team}1`}>Rebounds: {rebounds}</h4>
      <div id="tooltip">3: Poor | 7: Good</div>

      <h4 id="assists" className={`${player}Card__stat ${player}Card__${team}2`}>Assists: {assists}</h4>
      <div id="tooltip">3 : Poor | 7: Good</div>

      <h4 id="personalfouls" className={`${player}Card__stat ${player}Card__${team}1`}>Personal Fouls: {personalfouls}</h4>
      <div id="tooltip">*Low Number Wins*</div>

      <h4 id="turnovers" className={`${player}Card__stat ${player}Card__${team}2`}>Turnovers: {turnovers}</h4>
      <div id="tooltip">*Low Number Wins*</div>
      </div>
    </div>
  );
}

export default Card;
