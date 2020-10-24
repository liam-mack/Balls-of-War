import React, { Component } from 'react';

class CardHolder extends Component{
    
    handleClick=()=>{
        this.props.changePlayer(this.props.player)
    }
    
    render(){
        return (
          <div className={this.props.className} onClick={this.handleClick}>
          </div>
        );
        
          
    }
}

export default CardHolder;
