import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

function Row({ children, className }) {
  const rowClass = classNames('row', {
    [className]: className,
  });
  return (
    <div className={rowClass}>
      {children}
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Row;
