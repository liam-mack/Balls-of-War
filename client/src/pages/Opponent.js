/* eslint-disable */
import React from "react";
import Card from "../components/Play/Card"
// import images from "../images/Card/Images";

function Opponent({
  name, position, jersey, height, weight, points, fieldgoal, rebounds, assists,
  personalfouls, turnovers, team, player,
}) {
  return (
    <Card name = {name}
    position = {position}
    jersey = {jersey}
    height = {height}
    weight = {weight} 
    points = {points}
    fieldgoal = {fieldgoal}
    rebounds = {rebounds}
    assists = {assists}
    personalfouls = {personalfouls}
    turnovers = {turnovers}
    team = {team}
    player = {player}/>
  )
}

export default Opponent;
