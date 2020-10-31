/* eslint-disable */
import React, { Component } from "react";
import heat from "../../images/Heat.png";
import lakers from "../../images/Lakers.png";
import raptors from "../../images/Raptors.png";
import rockets from "../../images/Rockets.png";

function GameDeck(){

    return (
      <div className="deckSelect">
        <img className="miami" alt="miami" value="miami" src={heat}/>
        <img className="lakers" alt="lakers" value="lakers" src={lakers}/>
        <img className="raptors" alt="raptors" value="raptors" src={raptors}/>
        <img className="rockets" alt="rockets" value="rockets" src={rockets}/>
      </div>
    );
  
}

export default GameDeck;
