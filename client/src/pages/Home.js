/* eslint-disable */
import React, { useState } from "react";
import API from "../utils/API";

function Home() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  function loginInfo(event) {
    const { name, value } = event.target;
    name === "email" ? setEmail(value) : setPass(value);
  }

  function loginAuth(event) {
    event.preventDefault();
    console.log(email, pass);
  }

  return (
    <>
      <form>
        <h1>Home {email} {pass}</h1>
        <label htmlFor="emailLogin">
          Email
          <input type="text" name="emailLogin" onChange={loginInfo} />
        </label>
        <label htmlFor="passLogin">
          Password
          <input type="text" name="passLogin" onChange={loginInfo} />
        </label>
        <button type="submit" onClick={loginAuth}>Log In</button>
      </form>

      <form method="post" action="/api/signup">
        <h1>Signup</h1>
        <label htmlFor="emailSignup">
          Email
          <input type="text" name="emailSignup" />
        </label>
        <label htmlFor="passSignup">
          Password
          <input type="text" name="passSignup" />
        </label>
        <button type="submit" onClick={API.signUp}>Signup</button>
      </form>
    </>
  );
}

export default Home;
