import React from "react";
import { NavLink } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      blurred: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleDemoSubmit(e) {
    const demoUser = {
      username: "Demo",
      password: "demodemo"
    }

    this.props.login(demoUser);
  }

  renderErrorMessage(field) {
    if (this.state[field].length === 0 && this.state.blurred[field]) {
      return (
        <div className='login-errors'>
          Please enter your {field}.
        </div>
      )
    }
  }

  handleBlur(field) {
    let blurred = Object.assign({}, this.state.blurred, { [field]: true });
    return(e) => {
      this.setState({ blurred });
    }
  }

  render() {
    return (
      <div className="login-page">
        <div className="title">
          <h1>tinnitus</h1>
        </div>
        <h3>To continue, log in to Tinnitus.</h3>
        <div className="btn-demo">
          <button className="guest-btn" onClick={this.handleDemoSubmit}>
            LOG IN AS GUEST
          </button>
        </div>

        <hr className="divider" />

        <form className="signup-form" onSubmit={this.handleSubmit}>
          <ul>
            {this.props.errors.map((error, i) => {
              return <li key={i}>{error}</li>;
            })}
          </ul>
          <div className="log-user">
            <input
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
              onBlur={this.handleBlur("username")}
            />

            {this.renderErrorMessage("username")}
          </div>
          <div className="log-pw">
            <input
              type="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.update("password")}
              placeholder="Password"
              onBlur={this.handleBlur("password")}
            />

            {this.renderErrorMessage("password")}
          </div>
          <div className="btn-login">
            <button type="submit">LOG IN</button>
          </div>
        </form>

        <div className="divider"></div>

        <h3>Don't have an account?</h3>

        <div className="btn-to-signup">
          <NavLink className="to-signup" to="/signup">
            SIGN UP FOR SPOTIFY
          </NavLink>
        </div>

        <p>
          If you click "Log in with Facebook" and are not a Spotify user,
          nothing will happen because that button doesn't exist.
        </p>
      </div>
    );
  }
}

export default LoginForm;
