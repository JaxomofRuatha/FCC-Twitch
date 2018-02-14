import { fromJS } from 'immutable';

import types from '../actions/constants';

const initialState = fromJS({
  streams: {},
  twitchUsers: ['jaxomofruatha', 'freecodecamp', 'twitchplayspokemon'],
  fetching: false
});

const streamReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_STREAMS: {
      return state.set('fetching', true);
    }
    case types.RECEIVE_STREAMS: {
      const data = action.res;

      return state.withMutations((store) => {
        store.set('fetching', false);
        store.set('streams', data);
      });
    }
    default:
      return state;
  }
};

export default streamReducer;
