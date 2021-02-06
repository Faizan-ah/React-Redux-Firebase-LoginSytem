import React, { Component } from 'react';
import fire from './config/fire'
import Login from './Login.js';
import Signup from './Signup.js';
import Home from './Home.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ProtectedRoute from './config/ProtectedRoute';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }


  render() {
    return (
      <div className="App">
        
        <Router>
          {/* { this.state.user ? ( <Home /> ) : ( <Login /> ) } */}
          <Route path="/login" exact component={Login}/>


          <ProtectedRoute path="/Home" isAuth= {this.state.user} exact  component={Home} />
          
          
          {/* <ProtectedRoute component={Home} /> */}
          <Route path="/" exact component={Signup}/>
        </Router>
        
      </div>
    );
  }
}

export default App;
