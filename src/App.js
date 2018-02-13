import React from 'react';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import StreamSearch from './components/StreamSearch';
// import StreamFilter from './components/StreamFilter';

import { requestStreams } from './store/actions/stream-actions';

const App = props => (
  <div className="app-root">
    <StreamSearch />
  </div>
);

// Adds state as a prop to avoid having components directly reference store.
const mapStateToProps = state => ({
  users: ['jaxomofruatha', 'freecodecamp']
});

// Adds action creators as props to avoid having components directly reference store.
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestStreams }, dispatch);

const enhance = compose(
  lifecycle({
    componentWillMount() {
      document.body.style.background = 'orangered';
    },
    componentDidMount() {
      requestStreams();
    }
  }),
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(App);
