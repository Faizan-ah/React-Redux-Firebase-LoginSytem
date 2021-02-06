import React from 'react';
import Login from './Login';
import fire from './config/fire';
import {Link} from 'react-router-dom';
class Home extends React.Component {
  constructor(props){
    super(props)
  }
  logout() {
    fire.auth().signOut();
    console.log('you are logged out')
    // this.props.history.push('/')
  }


  settingUserNull = ()=>{
    const isAuthenticated = this.props.isAuth;
  }


  render() {
    const isAuthenticated = this.props.isAuth;
    console.log('in home', isAuthenticated)
    return (
    <>
     
        <div style={{textAlign: 'center'}}>
          <h1>You Are Logged In</h1>
          <button onClick = {this.logout}><Link to="/">Logout</Link></button>
        </div> 
    </>
    )
  }
}

export default Home;