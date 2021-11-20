import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      
    };
  }

 handleLogin = (e) => {
   this.setState({[e.target.name]: e.target.value})
 }

 loginHandler = (e) => {
    e.preventDefault()
    console.log()
     if (this.state.username && this.state.password){
       this.props.handleLogin(this.state)
      }   
  }

  render() {
    return (
      <form onSubmit={this.loginHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleLogin}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleLogin}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
