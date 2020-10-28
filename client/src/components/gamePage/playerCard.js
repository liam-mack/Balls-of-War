/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

class PlayerCard extends Component {
  showStats() {
    console.log(this.props.player.value);
  }

  render() {
    return (
      <div className={this.props.className} style={{ width: "13rem", height: "350px" }}>
        <img className="card-img-top" src={this.props.player.image} alt="Card" />
        <p>{this.props.player.name}</p>
        <p onClick={this.showStats}>{this.props.player.value}</p>
      </div>
    );
  }
}

export default PlayerCard;