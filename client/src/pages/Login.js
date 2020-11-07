/* eslint-disable */
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import "./home.css";

function Login() {
  const [alert, setAlert] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const res = await API.login(userInput);
      console.log(res);
      // setAlert(`${event.currentTarget.name} successful!`);
      // setInterval(() => , 3000);
      return <Redirect to="/selection" />;
    } catch (error) {
      setAlert(`Sorry, ${event.target.name} request unsuccessful. Please try again!`);
      console.log(error);
      // setInterval(() => <Redirect to="/selection" />, 3000);
      return false;
    }
  };

  // const history = useHistory();

  function redirect() {
    // e.preventDefault();
    <Redirect to="/signUp" />;
  }

  const toggleVis = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <>
      <form id="loginForm">
        <h1 id="lTitle">L<i id="lImage" className="fas fa-basketball-ball" />GIN</h1>
        <div>
          <label htmlFor="email">
            Email:
            <input type="text" name="email" onChange={handleChange} placeholder="Email" required />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <i className="fas fa-eye" onClick={toggleVis} />
          </label>
          <div>
            <button name="login" id="loginBtn" type="submit" onClick={handleClick}>Log In</button>
            <button name="signup" id="signupBtn" type="submit" onClick={redirect}>Sign Up</button>
          </div>
        </div>
        {alert && <h5>{alert}</h5>}
      </form>
    </>
  );
}

export default Login;