import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';


import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();

    // // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    // //   if (userAuth) {
    // //     const userRef = await createUserProfileDocument(userAuth);

    // //     userRef.onSnapshot((userSnapshot) => {
    // //       setCurrentUser({
    // //         id: userSnapshot.id,
    // //         ...userSnapshot.data()
    // //       });
    // //     });
    // //   } else {
    // //     setCurrentUser(userAuth);
    // //   }
    // // });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/sign-in"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                    <SignIn />
                  )
              }
            />
            <Route
              exact
              path="/sign-up"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                    <SignUp />
                  )
              }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
