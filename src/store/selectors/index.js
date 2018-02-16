import { createSelectorCreator, defaultMemoize } from 'reselect';
import { formValueSelector } from 'redux-form/immutable';
import { is } from 'immutable';

export const getStreams = (state, props) => {
  const streams = state.getIn(['streamReducer', 'streams']);
  return streams === undefined ? null : streams;
};

export const getLogins = (state, props) =>
  state.getIn(['streamReducer', 'twitchUsers']);

// const createImmutableSelector = createSelectorCreator(defaultMemoize, is);
