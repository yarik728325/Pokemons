import { all, spawn } from 'redux-saga/effects'
import watcherUser from './userSaga';

export default function* rootSaga() {
  const sagas = [watcherUser];
  yield all(sagas.map((s) => spawn(s)));
}
