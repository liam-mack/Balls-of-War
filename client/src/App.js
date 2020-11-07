/* eslint-disable */
import React, {
  createContext, useState, useContext, useEffect
} from "react";
import {
  BrowserRouter, Redirect, Route, Switch,
} from "react-router-dom";
import Play from "./pages/Play";
import Selection from "./pages/Selection/Selection";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
    // <UserContext.Provider value={{ user, setUser }}>
    // <ProvideAuth>
      <BrowserRouter>
        {/* <div> */}
          {/* <AuthButton /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login">
              <Selection />
            </Route>
            <Route exact path="/signup" component = {Signup} />
            <Route exact path="/selection" component={Selection} />
            {/* <PrivateRoute path="/selection">
              <Selection />
            </PrivateRoute> */}
            <Route exact path="/play/:session">
              <Play />
            </Route>
            {/* <Route>
              <Redirect to="/" />
            </Route> */}
          </Switch>
        {/* </div> */}
      </BrowserRouter>
    // </ProvideAuth>
    // </UserContext.Provider>
  );
}

export default App;
