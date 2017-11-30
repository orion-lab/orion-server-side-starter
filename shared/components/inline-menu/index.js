import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

function InlineMenu({ children, className, theme }) {
  const inlineMenuClass = classNames('inlineMenu', {
    [className]: className,
    [`inlineMenu--theme-${theme}`]: theme,
  });
  return (
    <ul className={inlineMenuClass}>
      {children && children.map((child, key) => (
        <li key={key}>{child}</li>
      ))}
    </ul>
  );
}

InlineMenu.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
  theme: PropTypes.string,
};

export default InlineMenu;
