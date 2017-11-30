import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

function Button({
  className,
  theme,
  children,
  isSubmit = true,
  onClick = () => {},
}) {
  const buttonClass = classNames('button', {
    [className]: className,
    [`button--theme-${theme}`]: theme,
  });
  return (
    <button className={buttonClass} onClick={onClick} type={isSubmit ? 'submit' : 'button'}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.node,
  isSubmit: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
