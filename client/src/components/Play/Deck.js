/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import "./deck.css";

function Deck({ id, onClick, className }) {
  // const [cardCol, setCardCol]=useState('')
  // const [cardImg, setImg]=useState('')

  // const teams ={
  //   Lakers: {
  //     color:'linear-gradient(gold, purple)',
  //     image: lakers
  // },
  //   Raptors: {
  //     color:'linear-gradient(#CE1141,#000000,#A1A1A4)',
  //     image: raptors
  // },
  //   Heat: {
  //     color:'linear-gradient(#98002E, #F9A01B, #000000)',
  //     image: heat
  //   },
  //   Rockets: {
  //     color:'linear-gradient(#C4CED4, #CE1141, #000000)',
  //     image: rockets
  //   },
  // }
  // useEffect(()=>{
  //   setCardCol(teams[props.player].color)
  //   setImg(teams[props.player].image)
  // },[])

  return (
    <div id={id} className={className} onClick={async (e) => onClick(e.target.id)} />
  );
}

export default Deck;
// style={{backgroundImage:`url(${cardImg})`}}
