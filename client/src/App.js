import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Play from "./pages/Play";
import Selection from "./pages/Selection/Selection";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/selection">
        <Selection />
      </Route>
      <Route path="/play/:session">
        <Play />
      </Route>
      {/* <Route path="/play">
        <Play />
      </Route> */}
    </Switch>
  );
}

export default App;
