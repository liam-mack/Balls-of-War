import React from "react";
import API from "../utils/API";

function Btn() {
  
  const handleOnClick = function() {
    console.log("test");
    API.getPlayers().then(res => console.log(res))
  }

  return (
    <button
      onClick={handleOnClick}
    >Test</button>
  )
}

export default Btn;