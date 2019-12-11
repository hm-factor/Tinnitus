import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.login(this.state)
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {

    return (
      <div className="signup-form">
        <h1>tinnitus</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>To continue, log in to Tinnitus.</h3>
          <ul>
            {this.props.errors.map((error, i) => {
              return <li key={i}>{error}</li>;
            })}
          </ul>
          <label className="sign-user">
            <input
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
            />
          </label>
          <label className="sign-pw">
            <input
              type="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.update("password")}
              placeholder="Password"
            />
          </label>
          <button type="submit">LOG IN</button>
        </form>
        <h3>Don't have an account?</h3>
        <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
        <p>
          If you click "Log in with Facebook" and are not a Spotify user,
          nothing will happen because that button doesn't exist.
        </p>
      </div>
    );
  }
}

export default LoginForm;