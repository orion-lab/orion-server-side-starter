const errorValidator = (values) => {
  let errorObject = null;
  const {
    email,
    password,
  } = values;

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

  return errorObject;
};

export default errorValidator;
