import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

function Container({ children, className, wide }) {
  const containerClass = classNames('container', {
    [className]: className,
    'container--wide': wide,
  });
  return (
    <div className={containerClass}>
      {children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  wide: PropTypes.bool,
  children: PropTypes.node,
};

export default Container;
