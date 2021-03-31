import React from "react";
import "./App.css";
import { GlobalStyle } from "./components/Styles/GlobalStyle";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SigninPage from "./pages/signin";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
