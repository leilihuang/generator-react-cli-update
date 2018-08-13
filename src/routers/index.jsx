import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from '../components/home';
import About from '../components/my-abount';
import Info from '../components/info';

export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/topics' component={Info} />
    </Switch>
  </Router>
);
