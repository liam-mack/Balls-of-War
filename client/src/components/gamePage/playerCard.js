import React, { Component } from 'react';

class PlayerCard extends Component{

    render(){
        return (
          <div className={this.props.className} style={{width:'13rem', height:'350px'}}>
              <img className='card-img-top' src={this.props.player.image} alt='Card'/>
              <p>{this.props.player.name}</p>
              <p>{this.props.player.value}</p>
          </div>
        );
        
          
    }
}

export default PlayerCard;
