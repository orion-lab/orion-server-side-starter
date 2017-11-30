import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from '../../components/container';
import SignUpForm from '../../components/signup-form';
import { createNewUser } from './actions';
import './styles.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.createNewUser = this.createNewUser.bind(this);
  }
  createNewUser(username, name, email, password) {
    const { dispatch } = this.props;
    dispatch(createNewUser(username, name, email, password));
  }
  render() {
    const { userState } = this.props;
    if (userState.data && userState.data.username) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <div className="signup">
        <Container className="signup__container">
          <div className="signup__row">
            <div className="signup__grid signup__ilustration">
              <div className="signup__ilustration_image">
                <img src="https://storage.googleapis.com/orionfiles/signup-illustration.png" alt="OrionLab Signup" />
              </div>
            </div>
            <div className="signup__grid signup__main">
                <SignUpForm
                  createNewUser={this.createNewUser}
                />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

SignUp.propTypes = {
  userState: PropTypes.object,
};

export default connect(state => ({
  signupState: state.signupState,
  userState: state.userState,
}))(SignUp);
