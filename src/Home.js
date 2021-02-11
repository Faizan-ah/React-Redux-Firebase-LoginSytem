import React from 'react';
import Login from './Login';
import fire from './config/fire';
import {Link,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
class Home extends React.Component {
  constructor(props){
    super(props)
  }

  logout() {
    fire.auth().signOut();
    console.log('you are logged out')
  }




  render() {
    const isAuthenticated = this.props.user.isAuth;
    return (
    <>
     { isAuthenticated ? (
        <div style={{textAlign: 'center'}}>
          <h1>You Are Logged In</h1>
          <button onClick = {this.logout}><Link to="/">Logout</Link></button>
        </div>
         )
        :
        (
          // <Redirect to='/login'/>
          null
        )
      }  
    </>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    //initialUserState 
    user: state.user,
    // math: state.mathReducer
  }
}
export default connect(mapStateToProps)(Home);