import types from './constants';

// API actions for Saga and querying Twitch.

export function requestChannels(query) {
  return {
    type: types.REQUEST_CHANNELS,
    query
  };
}

export function receiveChannels(res) {
  return {
    type: types.RECEIVE_CHANNELS,
    res
  };
}

export function errorChannels(err) {
  return {
    type: types.ERROR_CHANNELS,
    err
  };
}

// Filtering actions for display of channels.

export function showAll(payload) {
  return {
    type: types.SHOW_ALL,
    payload
  };
}

export function showOnline(payload) {
  return {
    type: types.SHOW_ONLINE,
    payload
  };
}

export function showOffline(payload) {
  return {
    type: types.SHOW_OFFLINE,
    payload
  };
}

// Adding and removing channels from unfiltered list.

export function removeChannel(payload) {
  return {
    type: types.REMOVE_CHANNEL,
    payload
  };
}

export function addChannel(payload) {
  return {
    type: types.ADD_CHANNEL,
    payload
  };
}
