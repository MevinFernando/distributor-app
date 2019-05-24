import React from "react";
import "./App.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import Returns from "./components/returns";
import ReturnItem from "./components/returnItem";
import NotFound from "./components/notFound";
import Header from "./components/layout/header";
import About from "./components/pages/about";
import Home from "./components/home";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="contianer">
          <Header />
          <Switch>
            <Route exact path="/returns" component={Returns} />
            <Route exact path="/about" component={About} />
            <Route path="/returnItem/:returnId" component={ReturnItem} />
            <Route path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
