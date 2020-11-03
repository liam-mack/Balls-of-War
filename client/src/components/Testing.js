/* eslint-disable */

import React from "react";
import API from "../utils/API";

function Btn() {
  const handleOnClick = function () {
    console.log("test");
    API.getPlayers().then((res) => console.log(res.data));
  };

  const postTable = function () {
    console.log("posting");
    API.postPlayers().then((res) => console.log(res));
  };
  return (
    <>
      <button
        type="button"
        onClick={handleOnClick}
      >
        Get Laker Info
      </button>
      <button
        type="button"
        onClick={postTable}
      >
        Add to laker table
      </button>
    </>
  );
}

export default Btn;
