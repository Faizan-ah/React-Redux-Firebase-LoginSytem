import React, { Component } from 'react';
import fire from './config/fire'
import Login from './Login.js';
import Signup from './Signup.js';
import Home from './Home.js';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import { connect } from 'react-redux';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user.user,
      isAuth: this.props.user.isAuth
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
        this.props.confirmUserAuth(user)
      } else {
    
        this.setState({ user: null,isAuth:false });
        // this.props.returnNullUser(user)
      }
    })
  }


  render() {
    return (
      <div className="App">
        
        <Router>
          {/* { this.state.user ? ( <Home /> ) : ( <Login /> ) } */}
          <Route path="/" exact component={Signup}/>
          <Route path="/login" exact component={Login}/>
          <Route exact path="/Home" currentUser={this.state.user} issAuth= { this.props.setisAuth } component={Home} />
          
          {/* <ProtectedRoute component={Home} /> */}
          
        </Router>
        
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    //initialUserState 
    user: state.user,
    // math: state.mathReducer
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    confirmUserAuth: (user)=>{
      dispatch({
        type: 'setUser',
        payload: user
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

