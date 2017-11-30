import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form, Text } from 'react-form';
import errorValidator from './error-validator';
import UserIcon from '../../svgs/user-icon';
import LockIcon from '../../svgs/lock-icon';
import ArrowRightIcon from '../../svgs/arrow-right-icon';
import FormItem from '../auth-form-item';
import Button from '../button';
import LoadingCircle from '../../svgs/loading-circle';
import './styles.css';

function SignInForm({
  className,
  theme,
  userLogin,
  isLoading,
}) {
  const onSubmit = (submittedValues) => {
    const { email, password } = submittedValues;
    userLogin(email, password);
  };
  const signinFormClass = classNames('signinForm', {
    [className]: className,
    [`signinForm--theme-${theme}`]: theme,
  });
  return (
    <div className={signinFormClass}>
      <h2 className="signinForm__heading">Login to your account</h2>
      <div className="signinForm__description">
        Get access to contribute by giving comment, like or asking question. All for free!
      </div>
      <div className="signinForm__form">
        <Form
          validateError={errorValidator}
          onSubmit={onSubmit}>
          {({ submitForm, errors, touched }) => (
            <form onSubmit={submitForm} id="form2">
              <FormItem
                id="signin-form-email"
                icon={<UserIcon />}
                touched={touched.email}
                error={errors.email}>
                <Text field="email" id="signin-form-email" type="text" placeholder="Email" />
              </FormItem>
              <FormItem
                id="signin-form-password"
                icon={<LockIcon />}
                touched={touched.password}
                error={errors.password}>
                <Text field="password" id="signin-form-password" type="password" placeholder="Password" />
              </FormItem>
              <div className="signinForm__button">
                <Button>
                  Sign in  {isLoading ? <LoadingCircle /> : <ArrowRightIcon /> }
                </Button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </div>
  );
}

SignInForm.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  userLogin: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default SignInForm;
