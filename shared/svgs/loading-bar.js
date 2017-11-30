import React from 'react';
import PropTypes from 'prop-types';

function LoadingBar({ width = 24, height = 30 }) {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 24 30">
      <rect x="0" y="8.55556" width="4" height="13.8889" fill="#333">
        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite" />
        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite" />
      </rect>
      <rect x="10" y="12.5556" width="4" height="5.88889" fill="#333">
        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
      </rect>
      <rect x="20" y="9.44444" width="4" height="12.1111" fill="#333">
        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

LoadingBar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default LoadingBar;
