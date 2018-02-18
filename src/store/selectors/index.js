import { createSelector } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';
import { is } from 'immutable';

import types from '../actions/constants';

const getDisplayStatus = state => state.get('displayStatus');

const getStreams = (state, props) => {
  const streams = state.getIn(['streamReducer', 'streams']);
  return streams === undefined ? null : streams;
};

export const getLogins = (state, props) =>
  state.getIn(['streamReducer', 'twitchUsers']);

export const getFilteredStreams = createSelector(
  [getStreams, getDisplayStatus],
  (streams, displayStatus) => {
    if (streams) {
      switch (displayStatus) {
        case types.SHOW_ALL:
          return streams;
        case types.SHOW_ONLINE:
          return streams.filter(stream => stream.get('live') === true);
        case types.SHOW_OFFLINE:
          return streams.filter(stream => stream.get('live') === false);
        default:
          return streams;
      }
    } else {
      return streams;
    }
  }
);
