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
          Username
          <input
            type='text'
            value={this.state.username}
            onChange={this.update('username')}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            value={this.state.password}
            onChange={this.update('password')}
          />
        </label>
        <button type='submit'>LOG IN</button>
        <br/>
        <h3>Don't have an account?</h3>
        <br/>
        <Link to='/signup'>SIGN UP FOR SPOTIFY</Link>
      </form>
    );
  }
}

export default LoginForm;