import React from "react";
import API from "../utils/API";

function Btn() {
  
  const handleOnClick = function() {
    console.log("test");
    API.getPlayers().then(res => console.log(res.data))
  }

  const postTable = function() {
    console.log("posting");
    API.postPlayers().then(res => console.log(res));
  }
  return (
    <>
    <button
      onClick={handleOnClick}
      >Get Laker Info
    </button>
    <button
      onClick={postTable}
      >Add to laker table
    </button>
    </>
  )
}

export default Btn;