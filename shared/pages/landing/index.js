import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withJob } from 'react-jobs';
import PropTypes from 'prop-types';
import PortalList from '../../components/portal-list/async';
import { getTopicData } from '../../pages/landing/actions';

function Landing({ portalList }) {
  return (
    <div className="landing">
      <PortalList portalList={portalList} />
    </div>
  );
}

Landing.propTypes = {
  portalList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  })),
};

export default compose(
  connect(state => ({
    portalList: state.landingState.topics && state.landingState.topics.data,
  })),
  withJob({
    work: ({ portalList, dispatch }) => {
      if (portalList && portalList.length) return true;
      return dispatch(getTopicData());
    },
  }),
)(Landing);
