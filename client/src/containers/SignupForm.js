import React from "react";
import $ from 'jquery';

class SignupForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

  handleChange = e => {
    var name = e.target.name;
    var obj = {};
      obj[name] = e.target.value;
  //  console.log(obj);
  }

  handleSubmit = event => {
    event.preventDefault()
    const user = {username: this.state.username, email: this.state.email, password: this.state.password};
    $.post('http://localhost:3001/api/v1/users',
            {user: user})
            .done(function(data) {
              this.addNewUser(data);
            }.bind(this));
  }

  addNewUser = user => {
    this.setState({
      user: user
    });
    console.log(user)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Email
            <input id="email" name="email" type="email" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    );
  }
}

export default SignupForm;