import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

function TextInput({
  placeholder,
  type,
  className,
  styles,
  theme,
}) {
  const textInputClass = classNames('textInput', {
    [className]: className,
    [`textInput--theme-${theme}`]: theme,
  });
  return (
    <input
      type={type}
      styles={styles}
      placeholder={placeholder}
      className={textInputClass}
    />
  );
}

TextInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  styles: PropTypes.object,
  theme: PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: 'Insert text',
  type: 'text',
};

export default TextInput;
