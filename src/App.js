import React from 'react';
import './App.css';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';

import axios from 'axios';
import Returns from './components/returns';
import ReturnItem from './components/returnItem';
import NotFound from './components/notFound';
import Retailer from './components/retailer';
import Header from './components/layout/header';
import About from './components/pages/about';
import Home from './components/home';
import Stocks from './components/stocks';
import LoginForm from './components/loginForm';
import NewClaim from './components/newClaim';
import Claims from './components/claims';
import Pickups from './components/pickups';
import Loading from './components/pages/Loading';

//axios.defaults.baseURL =
//'http://localhost:5000' || 'http://hulrevlog.herokuapp.com';

axios.defaults.baseURL = 'http://hulrevlogtest.herokuapp.com';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/" component={Returns} /> */}

          <Route exact path="/returns" component={Returns} />
          <Route exact path="/about" component={About} />
          <Route exact path="/stocks" component={Stocks} />
          <Route path="/returnItem/:returnId" component={ReturnItem} />
          <Route exact path="/claims" component={Claims} />
          <Route exact path="/pickups" component={Pickups} />
          <Route path="/claims/new" component={NewClaim} />
          <Route path="/retailers/:retailerId" component={Retailer} />
          {/* <Redirect from="/" to="/return" /> */}
          <Route component={Returns} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
