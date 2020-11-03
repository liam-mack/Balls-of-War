/* eslint-disable */
import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Play from "./pages/Play";
import Selection from "./pages/Selection/Selection";
// import Home from "./pages/Home";
// import GamePage from "./components/gamePage/page";
// import Login from "./components/loginPage/login";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        {/* <Home /> */}
        <Selection />
      </Route>
      <Route exact path="/decks">
        <Selection />
      </Route>
      <Route path="/play" component={Play} />
    </Switch>
  );
}

export default App;
