import React from "react";
import "./header.css";

function Header({ children }) {
  return (
    <header>
      <h1 id="heading">{(children === "tie") ? children : (`${children} WINS`)}</h1>
    </header>
  );
}

export default Header;
