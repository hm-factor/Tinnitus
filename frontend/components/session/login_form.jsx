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

  // componentDidMount() {
  //   this.props.receiveCurrentUser();
  // }

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
      <form onSubmit={this.handleSubmit}>
        <h3>To continue, log in to Tinnitus.</h3>
        <label>
          <input
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.update('username')}
            placeholder="Username"
          />
        </label>
        <label>
          <input
            type='password'
            value={this.state.password}
            placeholder='password'
            onChange={this.update('password')}
            placeholder="Password"
          />
        </label>
        <button type='submit'>LOG IN</button>
        <h3>Don't have an account?</h3>
        <Link to='/signup'>SIGN UP FOR SPOTIFY</Link>
      </form>
    );
  }
}

export default LoginForm;