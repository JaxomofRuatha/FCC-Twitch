import React from 'react';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import StreamSearch from './components/StreamSearch';
import StreamFilter from './components/StreamFilter';

import { requestStreams } from './store/actions/stream-actions';

const App = props => (
  <main className="app-root">
    <StreamSearch />
    <StreamFilter />
  </main>
);

// Adds state as a prop to avoid having components directly reference store.
const mapStateToProps = state => ({
  twitchUsers: state.getIn(['streamReducer', 'twitchUsers'])
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
