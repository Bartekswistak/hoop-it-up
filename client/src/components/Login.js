import React from "react";

class Login extends React.Component {
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
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  // function handleFormSubmit() {
  //   var appointment = {title: this.state.title, appt_time: this.state.appt_time}
  //   $.post('/appointments',
  //     {appointment: appointment})
  // },

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
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default Login;