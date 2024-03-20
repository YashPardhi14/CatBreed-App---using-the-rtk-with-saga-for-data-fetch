import { all, fork } from 'redux-saga/effects';
import catSagaWatcher from '../../reduxToolkit/saga/catSaga';

export function* rootSaga() {
  yield all([fork(catSagaWatcher)]);
}
