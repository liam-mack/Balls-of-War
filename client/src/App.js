import React from "react";
// import "./App.css";
import { Route, Switch } from "react-router-dom";
import Selection from "./pages/Selection";
// import GamePage from "./components/gamePage/page";
// import Login from "./components/loginPage/login";

function App() {
  return (
    <Switch>
      <Route exact path={["/", "/decks"]}>
        <Selection />
      </Route>
      <Route path="/play/:session" />
    </Switch>
  );
}

export default App;
