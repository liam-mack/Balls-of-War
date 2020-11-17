/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./card.scss";

function Card ({ stat, name, position, jersey, height, weight, points, fieldgoal, rebounds, assists, personalfouls, turnovers, onClick, team, player }) {
  const [active, setActive] = useState(null);

  useEffect(async () => {
    stat && setActive(stat)
  },[stat])


  let photoUrl = (name.replace(/\s+/g, ''));
  photoUrl = (photoUrl.replace(/\./g,''));
  photoUrl = (photoUrl.replace(/\-/g,''));

  return (
    <div className={`${player}Card ${team}CardHome`} >
    {/* <div className={`${player}Card` (player === "player1") ? `${team}CardHome` : `${team}CardAway`} > */}

      <h4 className={`${player}Card__name`}>{name} <div className={`playertip ${team}tip`}>{`#${jersey} ${team}, ${position}`}</div></h4>
      {/* <img className={`${player}Card__img`} src={images[photoUrl]} alt="player image" draggable="false" /> */}
      <img className={`${player}Card__img`} src={`${process.env.PUBLIC_URL}/images/Basketball/${photoUrl}.png`} alt="playerImage" draggable="false" />
      
      <div onClick={onClick && ((e) => onClick(e))}>
      <h4 data-stat="height" className={`${player}Card__stat ${player}Card__${team}1 ${(active==="height") ? "active" : ""}`}>Height: {height}</h4>
      <div className="tooltip">6': Poor | 7': Good</div>

      <h4 data-stat="weight" className={`${player}Card__stat ${player}Card__${team}2 ${(active==="weight") ? "active" : ""}`}>Weight: {weight}</h4>
      <div className="tooltip">185: Poor | 260: Good</div>

      <h4 data-stat="points" className={`${player}Card__stat ${player}Card__${team}1 ${(active==="points") ? "active" : ""}`}>Points: {points}</h4>
      <div className="tooltip">9: Poor | 15: Good</div>

      <h4 data-stat="fieldgoal" className={`${player}Card__stat ${player}Card__${team}2 ${(active==="fieldgoal") ? "active" : ""}`}>FG%: {fieldgoal}</h4>
      <div className="tooltip">40%: Poor | 50%: Good</div>

      <h4 data-stat="rebounds" className={`${player}Card__stat ${player}Card__${team}1 ${(active==="rebounds") ? "active" : ""}`}>Rebounds: {rebounds}</h4>
      <div className="tooltip">3: Poor | 7: Good</div>

      <h4 data-stat="assists" className={`${player}Card__stat ${player}Card__${team}2 ${(active==="assists") ? "active" : ""}`}>Assists: {assists}</h4>
      <div className="tooltip">3 : Poor | 7: Good</div>

      <h4 data-stat="personalfouls" className={`${player}Card__stat ${player}Card__${team}1 ${(active==="personalfouls") ? "active" : ""}`}>Personal Fouls: {personalfouls}</h4>
      <div className="tooltip">*Low Number Wins*</div>

      <h4 data-stat="turnovers" className={`${player}Card__stat ${player}Card__${team}2 ${(active==="turnovers") ? "active" : ""}`}>Turnovers: {turnovers}</h4>
      <div className="tooltip">*Low Number Wins*</div>
      </div>
    </div>
  );
}

export default Card;
