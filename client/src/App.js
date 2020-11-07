/* eslint-disable */
import React, {
  createContext, useState, useContext, useEffect
} from "react";
import {
  BrowserRouter, Redirect, Route, Switch,
} from "react-router-dom";
import Play from "./pages/Play";
import Selection from "./pages/Selection/Selection";
import Login from "./pages/Login";
import API from "./utils/API";
import SignUp from "./pages/Signup";
import Header from "./components/Header";
import "./App.css";

const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    const res = await API.getUser();
    console.log(res);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/login"]} component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/selection" component={Selection} />
          <Route exact path="/play/:session">
            <Play />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
