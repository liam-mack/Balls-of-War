/* eslint-disable */
import React, { useState } from "react";
import API from "../../utils/API";
import './home.css'

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

  function signUp(e){
    e.preventDefault();
    API.signUp({email, pass})
  }

  return (
    <>
      <form id='loginForm'>
        <h1>Home {/*{email} {pass}*/}</h1>
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
            <button id='lButton' type="submit" onClick={loginAuth}>Log In</button>
            <button id='sButton' type="submit" onClick={signUp}>Sign Up</button>
          </div>
        </div>
      </form>

      {/* <form method="post" action="/api/signup">
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
      </form> */}
    </>
  );
}

export default Home;
