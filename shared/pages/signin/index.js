import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from '../../components/container';
import SignInForm from '../../components/signin-form';
import { userLogin } from './actions';
import './styles.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.userLogin = this.userLogin.bind(this);
  }
  userLogin(email, password) {
    const { dispatch } = this.props;
    dispatch(userLogin(email, password));
  }
  render() {
    const { userState, signinState: { isLoading } } = this.props;
    if (userState.data && userState.data.username) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <div className="signin">
        <Container className="signin__container">
          <div className="signin__row">
            <div className="signin__grid signin__ilustration">
              <div className="signin__ilustration_image">
                <img src="https://storage.googleapis.com/orionfiles/signin-illustra.png" alt="OrionLab Signup" />
              </div>
            </div>
            <div className="signin__grid signin__main">
                <SignInForm userLogin={this.userLogin} isLoading={isLoading} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

SignIn.propTypes = {
  userState: PropTypes.object,
  signinState: PropTypes.object,
};

export default connect(state => ({
  signinState: state.signinState,
  userState: state.userState,
}))(SignIn);
