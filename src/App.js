import React from 'react';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import StreamSearch from './components/StreamSearch';
import StreamFilter from './components/StreamFilter';

import { requestStreams } from './store/actions/stream-actions';
import { getStreams, getLogins } from './store/selectors';

const App = ({ twitchUsers, streams }) => (
  <main className="app-root">
    <StreamSearch />
    <StreamFilter streams={streams} />
  </main>
);

// Adds state as a prop to avoid having components directly reference store.
const mapStateToProps = (state, ownProps) => ({
  twitchUsers: getLogins(state, ownProps),
  streams: getStreams(state, ownProps)
});

// Adds action creators as props to avoid having components directly reference store.
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestStreams }, dispatch);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.requestStreams(this.props.twitchUsers);
    }
  })
);

export default enhance(App);
