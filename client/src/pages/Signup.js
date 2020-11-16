import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
    const { email, password } = userInput;
    if (!(email && password)) {
      setAlert("Email and password must be filled");
      return;
    }
    setAlert(null);
    try {
      await API.signup(userInput);
      history.push("/");
    } catch (error) {
      console.log(error);
      setAlert("Sorry, signup request unsuccessful. Please try again!");
      setInterval(() => setAlert(null), 3000);
    }
  };

  return (
    <div className="home">
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
        </div>
        <div className="formBtn">
          <Link to="/">
            <button name="back" id="backBtn" type="button">
              <i className="fas fa-long-arrow-alt-left" /> Go Back
            </button>
          </Link>
          <button name="signup" id="signupBtn" type="button" onClick={handleClick}>
            <i className="fas fa-user-plus" /> Sign Up
          </button>
        </div>

        <h5>{alert}</h5>
      </form>
    </div>
  );
}

export default SignUp;
