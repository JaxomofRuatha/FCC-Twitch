import { fromJS } from 'immutable';

import types from '../actions/constants';

const initialState = fromJS({
  twitchUsers: ['jaxomofruatha', 'freecodecamp', 'twitchplayspokemon'],
  fetching: false,
  displayStatus: types.SHOW_ALL
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
    case types.SHOW_ALL: {
      return state.get('displayStatus') === types.SHOW_ALL
        ? state
        : state.set('displayStatus', types.SHOW_ALL);
    }
    case types.SHOW_ONLINE: {
      return state.get('displayStatus') === types.SHOW_ONLINE
        ? state
        : state.set('displayStatus', types.SHOW_ONLINE);
    }
    case types.SHOW_OFFLINE: {
      return state.get('displayStatus') === types.SHOW_OFFLINE
        ? state
        : state.set('displayStatus', types.SHOW_OFFLINE);
    }
    default:
      return state;
  }
};

export default streamReducer;
