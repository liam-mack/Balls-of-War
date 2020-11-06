import React from "react";

function Opponent({
  name, position, jersey, height, weight, points, fieldgoal, rebounds, assists,
  personalfouls, turnovers, team, player,
}) {
  return (
    <div>
      <h4>{ name } </h4>
      <h4>{ position } {player}</h4>
      <h4>{ jersey } {team}</h4>

      {/* < PlayerStats /> */}
      <h4 id="height"> height { height} </h4>
      <h4 id="weight"> weight { weight} </h4>
      <h4 id="points"> points { points} </h4>
      <h4 id="fieldgoal"> fieldgoal { fieldgoal} </h4>
      <h4 id="rebounds"> rebounds { rebounds} </h4>
      <h4 id="assists"> assists { assists} </h4>
      <h4 id="personalfouls"> personalfouls {personalfouls} </h4>
      <h4 id="turnovers"> turnovers {turnovers}</h4>
    </div>
  );
}

export default Opponent;
