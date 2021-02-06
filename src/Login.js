import React from 'react';
import fire from './config/fire';
import {Link} from 'react-router-dom'
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      email: '',
      password: ''
    }
  }

  login = ()=> {
    // const email = document.querySelector('#email').value;
    // const password = document.querySelector('#password').value;
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

  onChange = (event) =>{
    const target = event.target;
    const name = target.name;
    const value = target.value;
        this.setState({
            [name]:value
        })
    }

  render() {
    console.log('in login render',this.state)
    return (
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
        
      </div>
    )
  }
}

export default Login;