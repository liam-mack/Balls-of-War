/* eslint-disable */
import React, { Component, useEffect, useState } from "react";
import heat from '../../images/Heat.png'
import lakers from '../../images/Lakers.png'
import rockets from '../../images/Rockets.png'
import raptors from '../../images/Raptors.png'

function CardHolder (props) {
    // console.log(props.player)
    const [cardCol, setCardCol]=useState('')
    const [cardImg, setImg]=useState('')

    const teams ={
      lakers: {
        color:'linear-gradient(gold, purple)',
        image: lakers
    },
      raptors: {
        color:'linear-gradient(#CE1141,#000000,#A1A1A4)',
        image: raptors
    },
      heat: {
        color:'linear-gradient(#98002E, #F9A01B, #000000)',
        image: heat
      },
      rockets: {
        color:'linear-gradient(#C4CED4, #CE1141, #000000)',
        image: rockets
      },
    }
    useEffect(()=>{
      setCardCol(teams[props.player].color)
      setImg(teams[props.player].image)
    },[])

    function handleClick(){
      console.log(props)
    }
    return (
      <div className={props.className} style={{backgroundImage:`url(${cardImg})`}}/>
    );
}

export default CardHolder;
