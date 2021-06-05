import { all } from 'redux-saga/effects';

import homeSaga from '../pages/home/redux/saga';

export default function* rootSaga() {
  yield all([homeSaga()]);
}
