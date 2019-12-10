import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.signup(this.state);
  }

  update(field) {
    return(e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  render () {
  
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update("email")}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")}
          />
          <input
            type="text"
            placeholder="What should we call you?"
            value={this.state.username}
            onChange={this.update("username")}
          />
          <label>
            Date of Birth
            <input
              type="date"
              value={this.state.birth_date}
              onChange={this.update("birth_date")}
            />
          </label>
          <div>
            <label><input 
              type="radio" 
              name="gender" 
              value='male'
              checked={this.state.gender === 'male'}
              onChange={this.update('gender')} /> Male </label>
            <label><input 
              type="radio" 
              name="gender" 
              value='female'
              checked={this.state.gender === 'female'}
              onChange={this.update('gender')} /> Female</label>
            <label><input 
              type="radio" 
              name="gender" 
              value='non-binary'
              checked={this.state.gender === 'non-binary'}
              onChange={this.update('gender')} /> Non-binary</label>
          </div>
          <button type="submit">SIGN UP</button>
        </form>
        Already have an account?
        <Link to='/login'>Log in</Link>
      </div>
    );
  }
}

export default SignupForm;