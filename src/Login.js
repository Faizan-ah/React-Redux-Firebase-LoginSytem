import React from 'react';
import fire from './config/fire';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home.js';
import { connect } from 'react-redux';
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      email: '',
      password: ''
    }
    
  }

  printRedux = ()=>{
    console.log('redux state user', this.props.user.user)
    console.log('redux state auth', this.props.user.isAuth)
  }

  login = ()=> {
    const {
      email,
      password,
  } = this.state
  console.log('in login', this.state)
  fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
        
        this.props.history.push('/home')
     
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());

      })
  
}
  // handleSubmit = (e)=>{
  //   e.preventDefault();
  //   this.props.signIn(this.state)
  // }
  onChange = (event) =>{
    const target = event.target;
    const name = target.name;
    const value = target.value;
        this.setState({
            [name]:value
        })
    }

  render() {
    this.printRedux()
    return (
      <>
      <div style={{ textAlign: 'center' }}>
        <div>
          <div>Email</div>
          <input id="email" name= 'email' value = {this.state.email} onChange={this.onChange} placeholder="Enter Email.." type="text"/>
        </div>
        <div>
          <div>Password</div>
          <input id="password" name= 'password' value = {this.state.password} onChange={this.onChange} placeholder="Enter Password.." type="text"/>
        </div>
        <button style={{margin: '10px'}} onClick={this.login}>Login</button>
        <Link to="/">go</Link>
        <div>
          {this.props.authError ? <p>{this.props.authError}</p>:null}
        </div>
      </div>
      </>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    //initialUserState 
    user: state.user,
  }
}
export default connect(mapStateToProps)(Login);
// export default Login