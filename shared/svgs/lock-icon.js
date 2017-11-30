import React from 'react';
import PropTypes from 'prop-types';

function LockIcon({ width = 18, height = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={width} height={height} version="1.1">
      <g id="surface1">
        <path d="M 8 1 C 5.796875 1 4 2.796875 4 5 L 4 6 L 3.5 6 C 2.675781 6 2 6.675781 2 7.5 L 2 12.5 C 2 13.324219 2.675781 14 3.5 14 L 12.5 14 C 13.324219 14 14 13.324219 14 12.5 L 14 7.5 C 14 6.675781 13.324219 6 12.5 6 L 12 6 L 12 5 C 12 2.796875 10.203125 1 8 1 Z M 8 2 C 9.664063 2 11 3.335938 11 5 L 11 6 L 5 6 L 5 5 C 5 3.335938 6.335938 2 8 2 Z M 3.5 7 L 12.5 7 C 12.78125 7 13 7.21875 13 7.5 L 13 12.5 C 13 12.78125 12.78125 13 12.5 13 L 3.5 13 C 3.21875 13 3 12.78125 3 12.5 L 3 7.5 C 3 7.21875 3.21875 7 3.5 7 Z " />
      </g>
    </svg>
  );
}

LockIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default LockIcon;
