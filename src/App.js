import React from 'react';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import StreamSearch from './components/StreamSearch';
import StreamFilter from './components/StreamFilter';

import {
  requestStreams,
  showAll,
  showOnline,
  showOffline
} from './store/actions/stream-actions';
import { getFilteredStreams, getLogins } from './store/selectors';

const App = props => (
  <main className="app-root">
    <StreamSearch />
    <StreamFilter
      streams={props.streams}
      showAll={props.showAll}
      showOffline={props.showOffline}
      showOnline={props.showOnline}
    />
  </main>
);

App.propTypes = {
  showAll: PropTypes.func.isRequired,
  showOffline: PropTypes.func.isRequired,
  showOnline: PropTypes.func.isRequired
};

// Adds state as a prop to avoid having components directly reference store.
const mapStateToProps = (state, ownProps) => ({
  twitchUsers: getLogins(state, ownProps),
  streams: getFilteredStreams(state, ownProps)
});

// Adds action creators as props to avoid having components directly reference store.
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestStreams,
      showAll,
      showOffline,
      showOnline
    },
    dispatch
  );

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.requestStreams(this.props.twitchUsers);
    }
  })
);

export default enhance(App);
