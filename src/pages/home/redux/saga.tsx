import {
  call,
  put,
  takeEvery,
  takeLatest,
  all,
  fork,
} from 'redux-saga/effects';
import { HOME_CAROUSEL, HOME_POUPALR_FRAMES } from '../../helper/actionTypes';
import {
  homeCarouselFailed,
  homeCarouselSuccess,
  homePoupularFramesFailed,
  homePoupularFramesSuccess,
} from './actions';
import { popularFrames } from './jsons/frames';
import { carouselFrames } from './jsons/carousel';

function* fetchCarousel(action: any) {
  try {
    // const response = yield call(Api.fetchUser, action.payload.userId);
    const response = {};
    yield put(homeCarouselSuccess(carouselFrames));
  } catch (error: any) {
    yield put(homeCarouselFailed(error));
  }
}

function* fetchFrames(action: any) {
  try {
    // const response = yield call(Api.fetchUser, action.payload.userId);
    const response = {};
    yield put(homePoupularFramesSuccess(popularFrames));
  } catch (error: any) {
    yield put(homePoupularFramesFailed(error));
  }
}

function* carousel() {
  yield takeLatest(HOME_CAROUSEL, fetchCarousel);
}
function* frames() {
  yield takeLatest(HOME_POUPALR_FRAMES, fetchFrames);
}

function* homeSaga() {
  yield all([fork(carousel), fork(frames)]);
}

export default homeSaga;
