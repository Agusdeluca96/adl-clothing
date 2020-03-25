import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/Header';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
