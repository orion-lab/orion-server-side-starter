import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

function AuthFormItem({
  className,
  theme,
  icon,
  id,
  children,
  touched,
  error,
}) {
  const authFormItemClass = classNames('authFormItem', {
    [className]: className,
    [`authFormItem--theme-${theme}`]: theme,
  });
  return (
    <div className={authFormItemClass}>
      <label htmlFor={id}>
        <span className="authFormItem__icon">
          {icon}
        </span>
        {children}
      </label>
      {touched && error && (
        <div className="authFormItemError">
          {error}
        </div>
      )}
    </div>
  );
}

AuthFormItem.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  theme: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.node,
  touched: PropTypes.bool,
  error: PropTypes.string,
};

export default AuthFormItem;
