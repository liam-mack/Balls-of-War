import React, { useState } from "react";
import API from "../../utils/API";
import "./home.css";

function Home() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  function loginInfo(event) {
    const { name, value } = event.target;
    name === "emailLogin" ? setEmail(value) : setPass(value);
  }

  function loginAuth(event) {
    event.preventDefault();
    console.log(email, pass);
  }

  function signUp(e) {
    e.preventDefault();
    API.signUp({ email, pass });
  }

  return (
    <>
      <form id="loginForm">
        <h1>Balls of War</h1>
        <div>
          <label htmlFor="emailLogin">
            Email:
            <input type="text" name="emailLogin" onChange={loginInfo} />
          </label>
        </div>
        <div>
          <label htmlFor="passLogin">
            Password:
            <input type="password" name="passLogin" onChange={loginInfo} />
          </label>
          <div>
            <button id="lButton" type="submit" onClick={loginAuth}>Log In</button>
            <button id="sButton" type="submit" onClick={signUp}>Sign Up</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Home;
