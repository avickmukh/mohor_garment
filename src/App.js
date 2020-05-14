import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/hompage.pages';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import AuthenticationPage from './pages/authentication/authentication.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// function App() {
//   const [currentUser, setCurrentUser ] = useState(null);
//   let unsubscribeFromAuth = null;
//   useEffect(() => {
//     unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
//       setCurrentUser(user);
//     });
//     return () => {
//       unsubscribeFromAuth();
//     };
//   }, []);
//   return (
//     <div className="App">
//       <Header />
//       <Switch>
//         <Route exact path='/' component={HomePage} />
//         <Route path='/shop' component={ShopPage} />
//         <Route path='/authentication' component={AuthenticationPage} />
//       </Switch>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/authentication' component={AuthenticationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;