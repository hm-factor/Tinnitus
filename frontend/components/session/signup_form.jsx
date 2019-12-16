import React from "react";
import { NavLink } from "react-router-dom";
import { renderErrorMessages } from "../../util/validation_util";

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
      errors: {},
      blurred: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.createDate = this.createDate.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
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
      let errors = this.createErrors(field, e.target.value, this.state.blurred);
      this.setState({ [field]: e.target.value, errors });
    };
  }

  handleBlur(field) {
    let blurred = Object.assign({}, this.state.blurred, { [field]: true });
    return e => {
      this.setState({ blurred });
    };
  }

  handleFocus(field) {
    let blurred = Object.assign({}, this.state.blurred, { [field]: false });
    return e => {
      this.setState({ blurred });
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

  createErrors(field, value, blur) {
    return Object.assign({}, this.state.errors, renderErrorMessages(field, value, blur));
  }

  render() {
    return (
      <div className="signup-page">
        <div className="title">
          <h1>
            <i className="fas fa-deaf"></i>
            tinnitus
          </h1>
        </div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h3>Sign up with your email address</h3>

          <div className="sign-email">
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update("email")}
              onFocus={this.handleFocus("email")}
              onBlur={this.handleBlur("email")}
            />
            <div className="signup-errors">{this.state.errors.email}</div>
          </div>

          <div className="sign-pw">
            <input
              className="input-text"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update("password")}
              onBlur={this.handleBlur("password")}
            />
            <div className="signup-errors">{this.state.errors.password}</div>
          </div>
          <div className="sign-user">
            <input
              type="text"
              placeholder="What should we call you?"
              value={this.state.username}
              onChange={this.update("username")}
              onBlur={this.handleBlur("username")}
            />
            <div className="signup-errors">{this.state.errors.username}</div>
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
                  type="number"
                  value={this.state.day}
                  placeholder="Day"
                  onChange={this.update("day")}
                  onBlur={this.handleBlur("day")}
                />
              </div>
              <div className="year">
                <input
                  type="number"
                  value={this.state.year}
                  placeholder="Year"
                  onChange={this.update("year")}
                  onBlur={this.handleBlur("year")}
                />
              </div>
            </div>
            <div className="signup-errors">{this.state.errors.month}</div>
            <div className="signup-errors">{this.state.errors.day}</div>
            <div className="signup-errors">{this.state.errors.year}</div>
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
          </div>

          <div className="divider" />

          <p className="legalities">
            By clicking on Sign up, you are willingly relinquishing any proper
            ear functionality and agreeing to the Conditions of Use.
          </p>

          <p className="legalities">
            To learn more about how Tinnitus collects, uses, shares and protects
            your ear's functionality, follow us on instagram.
          </p>

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
