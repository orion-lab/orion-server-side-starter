import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { withJob } from 'react-jobs';
import { compose } from 'redux';
import Container from '../../components/container';
import TextInput from '../../components/text-input';
import InlineMenu from '../../components/inline-menu';
import GithubLogo from '../../svgs/github-logo';
import { signOut, getUserInfo } from '../../reducers/user-states/actions';
import './styles.css';

function Header({
  theme,
  className,
  userData,
  dispatch,
}) {
  const headerClass = classNames('header', {
    [className]: className,
    [`header--theme-${theme}`]: theme,
  });
  return (
    <div>
      <div className={headerClass}>
        <Container>
          <div className="header__row">
            <div className="header__leftside">
              <div className="header__logo">
                <Link to="/">
                  <GithubLogo theme={theme} />
                </Link>
              </div>
              <div className="header__search">
                <TextInput theme={theme} />
              </div>
              <div className="header__navbar-menu">
                <InlineMenu theme={theme}>
                  <a href="/">Pull requests</a>
                  <a href="/">Issues</a>
                  <Link to="/signup">Marketplace</Link>
                  <Link to="/signin">Explore</Link>
                </InlineMenu>
              </div>
            </div>
            <div className="header__rightside">
              <div>
                {userData && userData.username ? (
                  <button className="header__profileImage" onClick={() => dispatch(signOut())}>
                    <span>{userData.username}</span>
                    <img src={userData.profilePicture} alt={userData.name} />
                  </button>
                ) : (
                  <div className="header__authButton">
                    <Link to="/signin" className="header__authButtonItem header__authButtonSignin">
                      Sign In
                    </Link>
                    <Link to="/signup" className="header__authButtonItem header__authButtonSignup">
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

Header.propTypes = {
  theme: PropTypes.string,
  className: PropTypes.string,
  userData: PropTypes.object,
  dispatch: PropTypes.func,
};

export default compose(
  connect(state => ({
    userData: state.userState && state.userState.data,
  })),
  withJob({
    work: async ({ dispatch, userData }) => {
      try {
        if (userData) return true;
        // bootstrapping user data on the server
        await dispatch(getUserInfo());
        return true;
      } catch (e) {
        return false;
      }
    },
  }),
)(Header);
