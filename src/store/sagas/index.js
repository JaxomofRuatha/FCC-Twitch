import { delay } from 'redux-saga';
import { call, put, takeLatest, all } from 'redux-saga/effects';

import types from '../actions/constants';
import fetchStreams from '../data';
import { receiveStreams, errorStreams } from '../actions/stream-actions';

function* streamsWorker() {
  try {
    yield call(delay, 100);
    const res = yield call(fetchStreams);
    yield put(receiveStreams(res));
  } catch (err) {
    yield put(errorStreams(err));
  }
}

function* getStreams() {
  yield takeLatest(types.REQUEST_STREAMS, streamsWorker);
}

export default function* rootSaga() {
  yield all([getStreams()]);
}
