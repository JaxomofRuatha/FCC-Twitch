import React from 'react';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const App = props => (
  <div className="app-root">
  </div>
);

// Adds state as a prop to avoid having components directly reference store.
const mapStateToProps = (state, ownProps) => ({
});

// Adds action creators as props to avoid having components directly reference store.
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {

    },
    dispatch
  );

const enhance = compose(
  lifecycle({
    componentWillMount() {
      document.body.style.background = '#484538';
    }
  }),
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(App);
