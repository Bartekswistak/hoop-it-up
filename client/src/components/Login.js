import React from "react";
import $ from 'jquery';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user : {
        name: "",
        password: "",
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
    const user = {name: this.state.name, password: this.state.password};
  
    $.ajax({
      url:'http://localhost:3001/api/v1/users',
      dataType: 'json',
      type: 'GET',
      data: {user: user},
      success: function(data) {
        // this.setState({data: user})
      }
    })
    console.log(user)
    alert("Welcome " + user.name)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <input id="name" name="name" type="text" placeholder="username" onChange={this.handleChange} />
        </div>
        <div>
            <input id="password" name="password" type="password" placeholder="password" onChange={this.handleChange} />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;