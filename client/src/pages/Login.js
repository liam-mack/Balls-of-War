/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { loginUser, useAuthDispatch } from "../context";
import "./home.css";

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAuthDispatch();
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await loginUser(dispatch, { email, password });
      if (!res.email) {
        return;
      }
      history.push("/selection");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleVis = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <form id="loginForm">
        <h1 id="lTitle">L<i id="lImage" className="fas fa-basketball-ball" />GIN</h1>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

      </form>
    </>
  );
}

export default Login;
