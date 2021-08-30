import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import GamePage from "./components/GamePage/GamePage";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/game/:gameCode">
            <GamePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
