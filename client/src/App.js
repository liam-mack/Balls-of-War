import React, { createContext, useState, useEffect } from "react";
import {
  BrowserRouter, Redirect, Route, Switch,
} from "react-router-dom";
import Play from "./pages/Play";
import Selection from "./pages/Selection/Selection";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import API from "./utils/API";
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Selection />
          </Route>
          <Route exact path="/selection">
            <Selection />
          </Route>
          <Route exact path="/play/:session">
            <Play />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
