/* eslint-disable */
import React, {
  createContext, useState, useContext, useEffect
} from "react";
import {
  BrowserRouter, Redirect, Route, Switch,
} from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import routes from "./config/routes";
import { AuthProvider } from "./context";
import AppRoutes from "./components/AppRoutes";

// const UserContext = createContext(null);

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(async () => {
  //   const res = await API.getUser();
  //   console.log(res);
  // }, []);

  return (
    // <UserContext.Provider value={{ user, setUser }}>
    <AuthProvider>
      <BrowserRouter>
      <Header />
        <Switch>
          {routes.map((route) => {
            return <AppRoutes
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          })}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

          // <Route exact path={["/", "/login"]} component={Login} />
          // <Route exact path="/signup" component={SignUp} />
          // <Route exact path="/selection" component={Selection} />
          // <Route exact path="/play/:session">
          //   <Play />
          // </Route>