import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

import Header from './components/Header';
import Spinner from './components/Spinner';

import './App.scss';

const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const Checkout = lazy(() => import('./pages/Checkout'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));



const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <div className="content">
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/sign-in"
              render={() =>
                currentUser ? (
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
                currentUser ? (
                  <Redirect to='/' />
                ) : (
                    <SignUp />
                  )
              }
            />
          </Suspense>
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
