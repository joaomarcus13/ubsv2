import { all } from 'redux-saga/effects';
import auth from './auth/saga';
import application from './application/saga';

export default function* rootSaga() {
  return yield all([auth, application]);
}
