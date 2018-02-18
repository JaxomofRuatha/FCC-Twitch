import { createSelector } from 'reselect';
// import {
//   createSelectorWithDependencies as createSelector,
//   registerSelectors
// } from 'reselect-tools';
import { formValueSelector } from 'redux-form/immutable';

import types from '../actions/constants';

const getDisplayStatus = state => state.get('displayStatus');

const getStreams = (state) => {
  const streams = state.getIn(['streamReducer', 'streams']);
  return streams === undefined ? null : streams;
};

const getSearchValue = (state, props) =>
  formValueSelector('search')(state, 'searchInput');

const createLoggingSelector = (mapFns, resultFn) => {
  let _memoizedInputs;
  let _memoizedResult;

  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.

    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  return (...params) => {
    const inputs = mapFns.map(fn => fn(...params));

    if (!arraysEqual(inputs, _memoizedInputs)) {
      console.log('inputs are different');
      _memoizedInputs = inputs;
      _memoizedResult = resultFn(...inputs);
    }

    return _memoizedResult;
  };
};

export const getLogins = (state, props) =>
  state.getIn(['streamReducer', 'twitchUsers']);

export const getFilteredStreams = createLoggingSelector(
  [getStreams, getDisplayStatus],
  (streams, displayStatus) => {
    if (streams) {
      console.log('in if statement');
      switch (displayStatus) {
        case types.SHOW_ALL:
          console.log('in show all');
          return streams;
        case types.SHOW_ONLINE:
          console.log('in online');
          return streams.filter(stream => stream.get('live') === true);
        case types.SHOW_OFFLINE:
          console.log('in offline');
          return streams.filter(stream => stream.get('live') === false);
        default:
          console.log('in default');
          return streams;
      }
    } else {
      return streams;
      console.log('outside if');
    }
    console.log('outside if-else');
  }
);

// registerSelectors({ getFilteredStreams });
