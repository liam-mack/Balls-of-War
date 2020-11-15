import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Header from "./components/Header";
import routes from "./config/routes";
import { AuthProvider } from "./context";
import AppRoutes from "./components/AppRoutes";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map((route) => (
            <AppRoutes
              key={route.path}
              path={route.path}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
