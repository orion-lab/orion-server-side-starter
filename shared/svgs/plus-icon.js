import React from 'react';
import PropTypes from 'prop-types';

function PlusIcon({ width = 20, height = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} version="1.1">
      <g id="surface1">
        <path d="M 11 5 L 11 11 L 5 11 L 5 13 L 11 13 L 11 19 L 13 19 L 13 13 L 19 13 L 19 11 L 13 11 L 13 5 Z " />
      </g>
    </svg>
  );
}

PlusIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default PlusIcon;
