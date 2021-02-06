import React from 'react';
import fire from './config/fire';
import {Link} from 'react-router-dom'
class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      firstName:'',
      lastName:'',
      email: '',
      password: ''
    }
  }
  signUp = ()=> {
    const {
      firstName,
      lastName,
      email,
      password,
  } = this.state
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
        //login the user
        fire.auth().signInWithEmailAndPassword(email, password)
        console.log('login successfull')
        //pushing to home
        this.props.history.push('/home')
        
        //adding first name and last name
        const user = fire.auth().currentUser
        user.updateProfile({
            displayName: firstName+ ","+ lastName
        })
        console.log('displayName: ', firstName, " , ", lastName)
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
    console.log('in render',this.state)
    return (
      <div style={{ textAlign: 'center' }}>
          <div>
          <div>First name</div>
          <input id="fname" name= 'firstName' value = {this.state.firstName} onChange={this.onChange} placeholder="Enter fname.." type="text"/>
        </div>
        <div>
          <div>last name</div>
          <input id="lname" name= 'lastName' value = {this.state.lastName} onChange={this.onChange} placeholder="Enter lname.." type="text"/>
        </div>
        <div>
          <div>Email</div>
          <input id="email" name= 'email' value = {this.state.email} onChange={this.onChange} placeholder="Enter Email.." type="text"/>
        </div>
        <div>
          <div>Password</div>
          <input id="password" name= 'password' value = {this.state.password} onChange={this.onChange} placeholder="Enter Password.." type="text"/>
        </div>
        <Link to="/login">go</Link>
        <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
      </div>
    )
  }
}

export default Signup;