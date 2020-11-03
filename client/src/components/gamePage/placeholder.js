/* eslint-disable */
import React, { Component, useEffect, useState } from "react";
import './placeholder.css';

function CardHolder (props) {

    return (
      <div className={`${props.player}Deck ${props.className}`}/>
    );
}

export default CardHolder;
