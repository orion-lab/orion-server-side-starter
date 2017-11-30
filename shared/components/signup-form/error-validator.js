const errorValidator = (values) => {
  let errorObject = null;
  const {
    username,
    name,
    email,
    password,
    repeatPassword,
  } = values;

  // Check username
  if (!username) {
    // Check if empty
    errorObject = { ...errorObject, username: 'Username is required' };
  } else if (!/^[a-zA-Z0-9.\-_$@*!]+$/.test(username)) {
    errorObject = { ...errorObject, username: 'Username should not use space' };
  } else if (username.length < 6) {
    errorObject = { ...errorObject, username: 'Username cannot be less than 6 characters' };
  } else if (username.length > 30) {
    errorObject = { ...errorObject, username: 'Username cannot be more than 30 characters' };
  } else {
    errorObject = { ...errorObject, username: null };
  }

  // Check name
  if (!name) {
    errorObject = { ...errorObject, name: 'Name is required' };
  } else if (name.length > 50) {
    errorObject = { ...errorObject, name: 'Name cannot be more than 50 characters' };
  } else {
    errorObject = { ...errorObject, name: null };
  }

  // Check email
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email) {
    errorObject = { ...errorObject, email: 'Email is required' };
  } else if (!emailRegex.test(email)) {
    errorObject = { ...errorObject, email: 'Email is invalid' };
  } else {
    errorObject = { ...errorObject, email: null };
  }

  // Check password
  if (!password) {
    errorObject = { ...errorObject, password: 'Password is required' };
  } else if (password.length < 7) {
    errorObject = { ...errorObject, password: 'Password must at least has 7 characters' };
  } else if (password.length > 30) {
    errorObject = { ...errorObject, password: 'Password cannot be more than 30 characters' };
  } else if (/\s/.test(password)) {
    errorObject = { ...errorObject, password: 'Password cannot contain any spaces' };
  } else {
    errorObject = { ...errorObject, password: null };
  }

  // Repeat password
  if (repeatPassword && password !== repeatPassword) {
    errorObject = { ...errorObject, repeatPassword: 'Password doesnt match' };
  } else {
    errorObject = { ...errorObject, repeatPassword: null };
  }

  return errorObject;
};

export default errorValidator;
