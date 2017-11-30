import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form, Text } from 'react-form';
import errorValidator from './error-validator';
import UserIcon from '../../svgs/user-icon';
import EmailIcon from '../../svgs/email-icon';
import LockIcon from '../../svgs/lock-icon';
import SignupFormItem from '../auth-form-item';
import ArrowRightIcon from '../../svgs/arrow-right-icon';
import Button from '../button';
import './styles.css';

function SignUpForm({ className, theme, createNewUser }) {
  const onSubmit = (submittedValues) => {
    const {
      username,
      name,
      password,
      email,
    } = submittedValues;
    createNewUser(username, name, email, password);
  };
  const signupFormClass = classNames('signupForm', {
    [className]: className,
    [`signupForm--theme-${theme}`]: theme,
  });
  return (
    <div className={signupFormClass}>
      <h2 className="signupForm__heading">Save your account now</h2>
      <div className="signupForm__description">
        Get unlimited typeforms, questions, and responses. Free forever.
      </div>
      <div className="signupForm__form">
        <Form
          validateError={errorValidator}
          onSubmit={onSubmit}>
          {({ submitForm, errors, touched }) => (
            <form onSubmit={submitForm} id="form2">
              <SignupFormItem
                id="signup-form-username"
                icon={<UserIcon />}
                touched={touched.username}
                error={errors.username}>
                <Text field="username" id="signup-form-username" type="text" placeholder="Username" />
              </SignupFormItem>
              <SignupFormItem
                id="signup-form-name"
                icon={<UserIcon />}
                touched={touched.name}
                error={errors.name}>
                <Text field="name" id="signup-form-name" type="text" placeholder="Full name" />
              </SignupFormItem>
              <SignupFormItem
                id="signup-form-email"
                icon={<EmailIcon />}
                touched={touched.email}
                error={errors.email}>
                <Text field="email" id="signup-form-email" type="email" placeholder="Email address" />
              </SignupFormItem>
              <SignupFormItem
                id="signup-form-password"
                icon={<LockIcon />}
                touched={touched.password}
                error={errors.password}>
                <Text field="password" id="signup-form-password" type="password" placeholder="Password" />
              </SignupFormItem>
              <SignupFormItem
                id="signup-form-repeatPassword"
                icon={<LockIcon />}
                touched={touched.repeatPassword}
                error={errors.repeatPassword}>
                <Text field="repeatPassword" id="signup-form-repeatPassword" type="password" placeholder="Repeat password" />
              </SignupFormItem>
              <div className="signupForm__button">
                <Button>
                  Sign up  <ArrowRightIcon />
                </Button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
}

SignUpForm.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  createNewUser: PropTypes.func,
};

export default SignUpForm;
