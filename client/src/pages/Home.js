/* eslint-disable */
import React, { useState } from "react";

function Home() {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);

  function loginInfo(event) {
    const { name, value } = event.target;
    name==="email" ? setEmail(value) : setPass(value);
  };
  
  function loginAuth() {
    console.log(email, pass);
  }

  return (
    <>
      <h1>Home</h1>
      <h2>{email}</h2>
      <h2>{pass}</h2>
      <input type="text" name="email" onChange={loginInfo} />
      <input type="text" name="pass" onChange={loginInfo} />
      <button type="submit" onClick={loginAuth}>Log In</button>
    </>
  );
}

export default Home;
