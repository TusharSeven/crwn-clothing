import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.component'
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
// import { setCurrentUser } from './redux/user/user.actions';
import { checkUserSession } from './redux/user/user.actions';


import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import { GlobalStyle } from './global.styles';


const App = ({ currentUser, checkUserSession }) => {
  // unsubscribeFromAuth = null;
  // this.unsubscribeFromAuth = 
  useEffect(() => {
    checkUserSession();
    // auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     //to get the data, we use onSnapshot method
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     })
    //   }
    //   setCurrentUser(userAuth);
    // });
  }, []);

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : <SigninAndSignup />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})
//it dispatches the user object to the action(setCurrentUser in reducer action) , by using this we can replace the setState fuction, it updates the state in reducer
const mapDispatchToProps = dispatch => ({
  // setCurrentUser: user => dispatch(setCurrentUser(user))
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
