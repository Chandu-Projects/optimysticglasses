import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import { LOAD_LIST__FRAMES } from '../../helper/actionTypes';
import { listFrameSuccess, listFrameFailed, filterList } from './actions';
import {
  frameBrand,
  frameColor,
  frameShape,
  frameSize,
  frameType,
  frameWidth,
  gender,
  priceRange,
} from './jsons/filter';
import { popularFrames } from './jsons/frames';
import { image } from './jsons/image';

function* fetchFrames(action: any) {
  try {
    // const response = yield call(Api.fetchUser, action.payload.userId);
    yield put(listFrameSuccess({ image: image, frames: popularFrames }));
    yield put(
      filterList({
        frameType: frameType,
        shape: frameShape,
        color: frameColor,
        brand: frameBrand,
        priceRange: priceRange,
        gender: gender,
        size: frameSize,
        width: frameWidth,
      })
    );
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
