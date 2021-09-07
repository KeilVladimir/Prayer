import {all} from 'redux-saga/effects';
import {watcherUser} from './ducks/User/sagas';
import {
  watcherColumns,
  watcherColumnsDelete,
  watcherColumnsUpdate,
  whatcherColumnsAdd,
} from './ducks/Columns/sagas';
import {
  watcherAddPrayer,
  watcherPrayerDelete,
  watcherPrayers,
  watcherPrayerUpdate,
} from './ducks/Prayer/saga';
import {
  watcherAddComment,
  watcherCommentDelete,
  watcherComments,
  watcherCommentUpdate,
} from './ducks/Comment/saga';

export function* rootSaga() {
  yield all([
    watcherUser(),
    watcherColumns(),
    watcherColumnsUpdate(),
    watcherColumnsDelete(),
    whatcherColumnsAdd(),
    watcherPrayers(),
    watcherAddPrayer(),
    watcherPrayerDelete(),
    watcherPrayerUpdate(),
    watcherComments(),
    watcherCommentDelete(),
    watcherAddComment(),
    watcherCommentUpdate(),
  ]);
}
