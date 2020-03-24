import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Shop from './pages/Shop';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
