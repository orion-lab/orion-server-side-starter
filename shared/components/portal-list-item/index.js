import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

function PortalListItem({
  className,
  theme,
  imageURL,
  name,
  description,
}) {
  const portalListItemClass = classNames('portalListItem', {
    [className]: className,
    [`portalListItem--theme-${theme}`]: theme,
  });
  return (
    <a href="#/" className={portalListItemClass}>
      <img className="portalListItem__image" src={imageURL} alt={name} />
      <h4 className="portalListItem__name">
        {name}
      </h4>
      <p className="portalListItem__description">
        {description}
      </p>
    </a>
  );
}

PortalListItem.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  imageURL: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  name: PropTypes.string,
  description: PropTypes.string,
};

export default PortalListItem;
