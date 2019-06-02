import React from "react";
import "./App.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import axios from "axios";
import Returns from "./components/returns";
import ReturnItem from "./components/returnItem";
import NotFound from "./components/notFound";
import Header from "./components/layout/header";
import About from "./components/pages/about";
import Home from "./components/home";
import Stocks from "./components/stocks";
import LoginForm from "./components/loginForm";

axios.defaults.baseURL = "http://localhost:5000" || process.env.baseURL;

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/returns" component={Returns} />
          <Route exact path="/about" component={About} />
          <Route exact path="/stocks" component={Stocks} />
          <Route path="/returnItem/:returnId" component={ReturnItem} />
          <Route path="/" component={LoginForm} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
