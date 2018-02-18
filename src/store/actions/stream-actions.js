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

export function showAll() {
  return {
    type: types.SHOW_ALL
  };
}

export function showOnline() {
  return {
    type: types.SHOW_ONLINE
  };
}

export function showOffline() {
  return {
    type: types.SHOW_OFFLINE
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
