import React from "react";
import $ from "jquery";
import {connect} from 'react-redux'
import {updateSignupForm} from '../actions/signupForm.js'
import {signup} from '../actions/currentUser.js'


class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user : {
        name: "",
        password: "",
        email: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const user = {name: this.state.name, email: this.state.email, password: this.state.password};
  
    $.ajax({
      //Google Chrome
      url:'http://192.168.1.217:3001/api/v1/users',

      //Linux Mozilla
      //  url:'http://localhost:3001/api/v1/users',

      dataType: 'json',
      type: 'POST',
      data: {user: user},
      success: function(data) {
        //  this.setState({data: user})
      }
    })
    console.log(user)
  }

  // componentWillUnmount(){
  //   this.setState(
  //     this.state.email = "",
  //     this.state.name = "",
  //     this.state.password = "" 
  //   )
  // }
  
  //TO DO 
  // -write componentDidMount and componentWillUnmount functions here for the form to go away upon submission
  // -encrypt the password?

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <input id="name" name="name" type="text" placeholder="username" onChange={this.handleChange} />
        </div>
        <div>
            <input id="email" name="email" type="email" placeholder="email" onChange={this.handleChange} />
        </div>
        <div>
            <input id="password" name="password" type="password" placeholder="password" onChange={this.handleChange} />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    );
  }
}

export default SignupForm;