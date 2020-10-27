/* eslint-disable */
import React, { Component } from "react";
import Placeholder from "./placeholder";
import PlayerCard from "./playerCard";

class gamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          image: "https://i1.wp.com/mainstsolar.com/wp-content/uploads/2016/08/avatar-placeholder-generic.png?fit=300%2C300",
          name: "Lebron",
          value: "4",
        },
        {
          image: "https://i1.wp.com/mainstsolar.com/wp-content/uploads/2016/08/avatar-placeholder-generic.png?fit=300%2C300",
          name: "AD",
          value: "2",
        },
        {
          image: "https://i1.wp.com/mainstsolar.com/wp-content/uploads/2016/08/avatar-placeholder-generic.png?fit=300%2C300",
          name: "Rondo",
          value: "9",
        },
        {
          image: "https://i1.wp.com/mainstsolar.com/wp-content/uploads/2016/08/avatar-placeholder-generic.png?fit=300%2C300",
          name: "Kawhi",
          value: "8",
        },
        {
          image: "https://i1.wp.com/mainstsolar.com/wp-content/uploads/2016/08/avatar-placeholder-generic.png?fit=300%2C300",
          name: "Steph",
          value: "10",
        },
      ],
      player1: {
        image: "https://i1.wp.com/mainstsolar.com/wp-content/uploads/2016/08/avatar-placeholder-generic.png?fit=300%2C300",
        name: "Steph",
        value: "10",
      },
      player2: {
        image: "https://i1.wp.com/mainstsolar.com/wp-content/uploads/2016/08/avatar-placeholder-generic.png?fit=300%2C300",
        name: "Steph",
        value: "10",
      },
    };
  }

  // randomPlayer=(playerNum)=>{
  //     let player = this.state.players[Math.floor(Math.random() * this.state.players.length)];
  //     if(playerNum==='player1'){
  //         this.setState({
  //             player1: player
  //         })
  //     }else if(playerNum==='player2'){
  //         this.setState({
  //             player2: player
  //         })
  //     }
  // }

  clickables() {

  }

  render() {
    return (
      <div>
        <Placeholder
          player="player1"
          className="playCards1"
          value={this.state.players}
          changePlayer={this.randomPlayer}
        />
        <Placeholder
          player="player2"
          className="playCards2"
          value={this.state.players}
          changePlayer={this.randomPlayer}
        />
        <PlayerCard className="card playerCard2" player={this.state.player2} />
        <PlayerCard className="card playerCard1" player={this.state.player1} />
      </div>
    );
  }
}

export default gamePage;
