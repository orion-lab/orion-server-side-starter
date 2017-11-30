import React from 'react';
import PropTypes from 'prop-types';

function EmailIcon({ width = 18, height = 18 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={width} height={height} version="1.1">
      <g id="surface1">
        <path d="M 2.5 2 C 1.675781 2 1 2.675781 1 3.5 L 1 11.5 C 1 12.324219 1.675781 13 2.5 13 L 13.5 13 C 14.324219 13 15 12.324219 15 11.5 L 15 3.5 C 15 2.675781 14.324219 2 13.5 2 Z M 2.5 3 L 13.5 3 C 13.535156 3 13.5625 3.011719 13.59375 3.019531 L 8 6.890625 L 2.40625 3.019531 C 2.4375 3.011719 2.464844 3 2.5 3 Z M 2 3.953125 L 8 8.109375 L 14 3.953125 L 14 11.5 C 14 11.78125 13.78125 12 13.5 12 L 2.5 12 C 2.21875 12 2 11.78125 2 11.5 Z " />
      </g>
    </svg>
  );
}

EmailIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default EmailIcon;
