import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/Header/header.component';
import SigninAndSignup from './pages/signin-and-signup/signin-and-signup.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import React from 'react';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }
  //changes made due to no-undef error
  // unsubscribeFromAuth = null;
  // this.unsubscribeFromAuth = 
  componentDidMount() {
    auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        //getting the userreference by calling the function
        const userRef = await createUserProfileDocument(userAuth);

        //snapshot is only the snapreference it does not conatain the actual data but it contains the id and snapshot.data() gives the actual object containing the data.
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            }
          }, () => {
            console.log(this.state);
          })
        });
      } else {
        //if userAuth is null thn setting the state to null.
        this.setState({ currentUser: userAuth });
      }

    });
  }
  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }

}

export default App;
