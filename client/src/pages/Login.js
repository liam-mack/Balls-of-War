/* eslint-disable */
import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { loginUser, useAuthDispatch, useAuthState } from "../context";
import API from "../utils/API";
import "./home.css";

function Login() {
  const [alert, setAlert] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  // const [userInput, setUserInput] = useState({
  //   email: "",
  //   password: "",
  // });

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useAuthDispatch();
  const history = useHistory();
  const { loading, errorMessage } = useAuthState()

    const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await loginUser(dispatch, { email, password })
      if (!res.email) {
        return 
      }
      history.push("/selection");
    } catch (error) {
      console.log(error);
    }
  };
  
  function redirect(e) {
    e.preventDefault();
    history.push("/signup");
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
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input 
              type={passwordShown ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              />
            <i className="fas fa-eye" onClick={toggleVis} />
          </label>
          <div>
            <button name="login" id="loginBtn" type="submit" onClick={handleLogin}>
            <i className="fas fa-door-open" /> Log In</button>
            <button name="signup" id="signupBtn" type="button" onClick={redirect}>
              <i className="fas fa-door-closed" /> Register
            </button>
          </div>
        </div>
        {alert && <h5>{alert}</h5>}
      </form>
    </>
  );
}

export default Login;

// const handleChange = (event) => {
//   setUserInput({
//     ...userInput,
//     [event.target.name]: event.target.value,
//   });
// };