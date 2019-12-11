import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      month: '',
      day: '',
      year: '',
      gender: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createDate = this.createDate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let birth_date = this.createDate();
    const user = Object.assign({}, this.state, {birth_date})
    this.props.signup(user);
  }

  update(field) {
    return(e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  createDate() {
    const { month, day, year } = this.state;
    let newDay = day;
    if (parseInt(day, 10) < 10) {
      newDay = ('0' + day)
    };
    return (newDay + '/' + month + '/' + year);
  }

  render () {
  
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.props.errors.map((error, i) => {
              return <li key={i}>{error}</li>;
            })}
          </ul>
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
            <div>
              <select value={this.state.month} onChange={this.update("month")}>
                <option value="" disabled hidden>
                  Month
                </option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <input
                type="number"
                value={this.state.day}
                placeholder="Day"
                onChange={this.update("day")}
              />
              <input
                type="number"
                value={this.state.year}
                placeholder="Year"
                onChange={this.update("year")}
              />
            </div>
          </label>

          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.update("gender")}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.update("gender")}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="non-binary"
                checked={this.state.gender === "non-binary"}
                onChange={this.update("gender")}
              />
              Non-binary
            </label>
          </div>
          <button type="submit">SIGN UP</button>
        </form>
        Already have an account?
        <Link to="/login">Log in</Link>
      </div>
    );
  }
}

export default SignupForm;