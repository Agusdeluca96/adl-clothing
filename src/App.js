import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/Homepage';
import './App.css';

function App() {
  return (
    <div>
      <Switch></Switch>
      <Homepage />
    </div>
  );
}

export default App;
