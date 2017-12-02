import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/profile';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/profile' component={Profile} />
          </Switch>
      </HashRouter>
    );
  }
}

export default App;
