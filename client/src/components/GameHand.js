/*eslint-disable*/
import React from "react";

function GameHand({height, weight, assists, name, personalfouls, points, rebounds, turnovers}) {
  return (
    <>
    <h1>{name}</h1>
  <h2>{height}</h2>
  <h2>{weight}</h2>
  <h3>{points}</h3>
  <h3>{rebounds}</h3>
  <h3>{assists}</h3>
  <h3>{personalfouls}</h3>
  <h3>{turnovers}</h3>
  </>

    
  );
}

export default GameHand;

// <h1> name : value </h1>

// Object.keys(result).map((item, i) => (
//   <div key={i} className="report">
//           <h3>{result[item].name}</h3>
