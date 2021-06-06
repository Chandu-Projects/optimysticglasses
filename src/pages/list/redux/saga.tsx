import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { LOAD_LIST__FRAMES } from '../../helper/actionTypes';
import { listFrameSuccess, listFrameFailed } from './actions';
import { popularFrames } from './jsons/frames';
import { image } from './jsons/image';

function* fetchFrames(action: any) {
  try {
    // const response = yield call(Api.fetchUser, action.payload.userId);
    yield put(listFrameSuccess({ image: image, frames: popularFrames }));
  } catch (error: any) {
    yield put(listFrameFailed(error));
  }
}

function* frames() {
  yield takeLatest(LOAD_LIST__FRAMES, fetchFrames);
}

function* listSaga() {
  yield all([fork(frames)]);
}

export default listSaga;
