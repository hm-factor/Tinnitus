const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const renderErrorMessages = (field, value) => {
  let errors = {};

  if (field === "email") {
    if (value.length === 0) {
      errors.email = "Please enter your email.";
    } else if (!validateEmail(value)) {
      errors.email = "The email address you supplied is invalid.";
    } else {
      errors.email = "";
    }
  } 

  if (field === "password") {
    if (value.length === 0) {
      errors.password = "Enter a password to continue.";
    } else if (value.length < 8) {
      errors.password = "You password is too short.";
    } else {
      errors.password = "";
    }
  }

  if (field === "username") {
    if (value.length === 0) {
      errors.username = "What should we call you?";
    } else {
      errors.username = "";
    }
  }
  
  if (field === "month") {
    if (value === "") {
      errors.month = "Please enter your birth month.";
    }
  } 
  
  if (
    field === "day" ||
    value > 31 ||
    value < 1
  ) { errors.day = "Please enter a valid day of the day."; }

  if (
    field === "year" ||
    value > 12 ||
    value < 1
  ) { errors.year = "Please enter a valid year."; }

  if (field === "gender") {
    if (value.length === 0) {
      errors.gender = "Please indicate your gender."; 
    }
  }

  return errors;
};
