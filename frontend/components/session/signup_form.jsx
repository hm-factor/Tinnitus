import React from "react";
import { NavLink } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      month: "",
      day: "",
      year: "",
      gender: "",
      blurred: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createDate = this.createDate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let birth_date = this.createDate();
    const user = Object.assign({}, this.state, { birth_date });
    this.props.signup(user);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  createDate() {
    const { month, day, year } = this.state;
    let newDay = day;
    if (parseInt(day, 10) < 10) {
      newDay = "0" + day;
    }
    return newDay + "/" + month + "/" + year;
  }

  renderErrorMessage(field) {
    if (this.state[field].length === 0 && this.state.blurred[field]) {
      if (field === "email") {
        return <div className="signup-errors">Please enter your email.</div>;
      } else if (field === "password") {
        return (
          <div className="signup-errors">Enter a password to continue.</div>
        );
      } else if (field === "username") {
        return <div className="signup-errors">What should we call you?</div>;
      } else if (field === "month") {
        return (
          <div className="signup-errors">Please enter your birth month.</div>
        );
      } else if (
        field === "day" ||
        this.state[field] > 31 ||
        this.state[field] < 1
      ) {
        return (
          <div className="signup-errors">
            Please enter a valid day of the day.
          </div>
        );
      } else if (
        field === "year" ||
        this.state[field] > 12 ||
        this.state[field] < 1
      ) {
        return <div className="signup-errors">Please enter a valid year.</div>;
      } else if (field === "gender") {
        return (
          <div className="signup-errors">Please indicate your gender.</div>
        );
      }
    }
  }

  handleBlur(field) {
    let blurred = Object.assign({}, this.state.blurred, { [field]: true });
    return e => {
      this.setState({ blurred });
    };
  }

  render() {
    return (
      <div className="signup-page">
        <div className="title">
          <h1>tinnitus</h1>
        </div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h3>Sign up with your email address</h3>

          <div className="sign-email">
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update("email")}
              onBlur={this.handleBlur("email")}
            />

            {this.renderErrorMessage("email")}
          </div>

          <div className="sign-pw">
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update("password")}
              onBlur={this.handleBlur("password")}
            />

            {this.renderErrorMessage("password")}
          </div>
          <div className="sign-user">
            <input
              type="text"
              placeholder="What should we call you?"
              value={this.state.username}
              onChange={this.update("username")}
              onBlur={this.handleBlur("username")}
            />

            {this.renderErrorMessage("username")}
          </div>

          <div>
            <p className="DoB">Date of birth</p>
            <div className="birthday">
              <div className="month">
                <select
                  value={this.state.month}
                  onChange={this.update("month")}
                  onBlur={this.handleBlur("month")}
                >
                  <option value="">Month</option>
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
              </div>
              <div className="day">
                <input
                  type="integer"
                  value={this.state.day}
                  placeholder="Day"
                  onChange={this.update("day")}
                  onBlur={this.handleBlur("day")}
                />
              </div>
              <div className="year">
                <input
                  type="integer"
                  value={this.state.year}
                  placeholder="Year"
                  onChange={this.update("year")}
                  onBlur={this.handleBlur("year")}
                />
              </div>
            </div>
            {this.renderErrorMessage("month")}
            {this.renderErrorMessage("day")}
            {this.renderErrorMessage("year")}
          </div>

          <div className="radio-gender">
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
            {this.renderErrorMessage("gender")}
          </div>

          <div className="btn-signup">
            <button type="submit">SIGN UP</button>
          </div>
        </form>
        <div className="has-account">
          <h3>Already have an account?</h3>
          <NavLink className="to-login" to="/login">
            Log in
          </NavLink>
        </div>
      </div>
    );
  }
}

export default SignupForm;
