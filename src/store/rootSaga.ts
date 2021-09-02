import {all} from 'redux-saga/effects';
import {watcherUser} from './ducks/User/sagas';
import {
  watcherColumns,
  watcherColumnsDelete,
  watcherColumnsUpdate,
  whatcherColumnsAdd,
} from './ducks/Columns/sagas';

export function* rootSaga() {
  yield all([
    watcherUser(),
    watcherColumns(),
    watcherColumnsUpdate(),
    watcherColumnsDelete(),
    whatcherColumnsAdd(),
  ]);
}
