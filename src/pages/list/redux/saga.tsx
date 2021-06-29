import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { LOAD_LIST__FRAMES } from '../../helper/actionTypes';
import {
  listFrameSuccess,
  listFrameFailed,
  initializeFilter,
  listBind,
} from './actions';
import { filterAttr } from './jsons/filter';
import { popularFrames } from './jsons/frames';
import { image } from './jsons/image';
import { list_output } from './jsons/list_output';

function* fetchFrames(action: any) {
  try {
    // const response = yield call(Api.fetchUser, action.payload.userId);
    yield put(listFrameSuccess({ image: image, frames: list_output }));
    yield put(listBind(list_output));
    yield put(initializeFilter(filterAttr));
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
