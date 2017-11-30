import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Container from '../container';
import PortalListItem from '../portal-list-item';
import './styles.css';

function PortalList({ className, theme, portalList }) {
  const portalListClass = classNames('portalList', {
    [className]: className,
    [`portalList--theme-${theme}`]: theme,
  });
  return (
    <div className={portalListClass}>
      <Container>
        <div className="portalList__items">
          {portalList && portalList.length && portalList.map((topic, key) => (
            <div className="portalList__item" key={key}>
              <PortalListItem
                imageURL={topic.imageURL}
                name={topic.name}
                description={topic.description}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

PortalList.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  portalList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  })),
};

export default PortalList;
