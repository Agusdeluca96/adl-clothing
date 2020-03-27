import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { auth } from './utils/firebase'

import Home from './pages/Home';
import Shop from './pages/Shop';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Header from './components/Header';

import './App.scss';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
