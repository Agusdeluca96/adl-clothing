import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './utils/firebase';
import { connect } from 'react-redux';

import Home from './pages/Home';
import Shop from './pages/Shop';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import { setCurrentUser } from './redux/user/user.actions';

import './App.scss';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((userSnapshop) => {
          setCurrentUser({
            id: userSnapshop.id,
            ...userSnapshop.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
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
            <Route exact path="/shop" component={Shop} />
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
            <Route exact path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
