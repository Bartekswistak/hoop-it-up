import React from "react";

class SignupForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    var name = e.target.name;
    var obj = {};
      obj[name] = e.target.value;
   console.log(obj);
   console.log(this.props.onUserInput);
      this.props.onUserInput(obj);
  }

  handleSubmit = event => {
    event.preventDefault()
  }

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