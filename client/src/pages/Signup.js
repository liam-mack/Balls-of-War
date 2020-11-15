import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import "./home.css";

function SignUp() {
  const [alert, setAlert] = useState();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      console.log(userInput);
      await API.signup(userInput);
      return history.push("/login");
    } catch (error) {
      setAlert(`Sorry, ${event.target.name} request unsuccessful. Please try again!`);
      console.log(error);
      // setInterval(() => <Redirect to="/selection" />, 3000);
      return false;
    }
  };

  return (
    <>
      <form id="loginForm">
        <h1 id="sTitle">SignUp!</h1>
        <div>
          <label htmlFor="email">
            Email:
            <input type="text" name="email" onChange={handleChange} placeholder="Email" required />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
          </label>
          <div>
            <button name="back" id="backBtn" type="button" onClick={() => history.push("/")}>
              <i className="fas fa-long-arrow-alt-left" /> Go Back
            </button>
            <button name="signup" id="signupBtn" type="button" onClick={handleClick}>
              <i className="fas fa-user-plus" /> Sign Up
            </button>
          </div>
        </div>
        {alert && <h5>{alert}</h5>}
      </form>
    </>
  );
}

export default SignUp;
