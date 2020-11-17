/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { loginUser, useAuthDispatch } from "../context";
import "./home.css";

function Login() {
  const [alert, setAlert] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const dispatch = useAuthDispatch();
  const history = useHistory();

  const handleChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = userInput;
    setAlert("");

    if (!email || !password) {
      setAlert("Please fill all fields!");
      return;
    }

    try {
      const res = await loginUser(dispatch, userInput);
      if (!res.email) {
        setAlert("Login failed. Please try again!");
        return;
      }
      setAlert("Login successful!");
      history.push("/selection");
    } catch (error) {
      setAlert("Login failed. Please try again!");
      console.log(error);
    }
  };

  const toggleVis = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="home">
      <form id="loginForm">
        <h1 id="lTitle">L<i id="lImage" className="fas fa-basketball-ball" />GIN</h1>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              required
            />
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
        </div>

        <div className="formBtn">
          <button name="login" id="loginBtn" type="submit" onClick={handleLogin}>
            <i className="fas fa-door-open" /> Log In
          </button>
          <Link to="/signup">
            <button name="signup" id="signupBtn" type="button">
              <i className="fas fa-door-closed" /> Register
            </button>
          </Link>
        </div>

        {alert && <h5>{alert}</h5>}
      </form>
    </div>
  );
}

export default Login;
