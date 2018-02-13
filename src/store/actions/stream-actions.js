import types from './constants';

// API actions for Saga and querying Twitch.

export function requestStreams(query) {
  return {
    type: types.REQUEST_STREAMS,
    query
  };
}

export function receiveStreams(res) {
  return {
    type: types.RECEIVE_STREAMS,
    res
  };
}

export function errorStreams(err) {
  return {
    type: types.ERROR_STREAMS,
    err
  };
}

// Filtering actions for display of streams.

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

// Adding and removing streams from unfiltered list.

export function removeChannel(payload) {
  return {
    type: types.REMOVE_STREAM,
    payload
  };
}

export function addStream(payload) {
  return {
    type: types.ADD_STREAM,
    payload
  };
}
