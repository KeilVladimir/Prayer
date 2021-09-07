import {call, put, takeEvery} from 'redux-saga/effects';
import {ActionsType} from './types';
import {addPrayer, getPrayers, deletePrayer} from '../../../api/prayer';
import {
  deletePrayer as deletePrayerAction,
  requestDeletePrayer,
  requestUpdatePrayer,
  updatePrayer,
} from './actions';
import {
  getAllPrayers,
  requestAddPrayer,
  addPrayer as addPrayerAction,
} from './actions';
import {putPrayer} from '../../../api/prayer';
import {loader} from './actions';

export function* watcherPrayers() {
  yield takeEvery(ActionsType.REQUEST_GET_ALL_PRAYERS, AllPrayersAsync);
}

export function* AllPrayersAsync() {
  yield put(loader(true));
  const {data} = yield call(getPrayers);
  yield put(getAllPrayers(data));
  yield put(loader(false));
}

export function* watcherAddPrayer() {
  yield takeEvery(ActionsType.REQUEST_ADD_PRAYER, AddPrayersAsync);
}

export function* AddPrayersAsync({
  payload,
}: ReturnType<typeof requestAddPrayer>) {
  yield put(loader(true));
  const {data} = yield call(data => addPrayer(data), {
    payload,
  });
  yield put(addPrayerAction(data));
  yield put(loader(false));
}

export function* watcherPrayerDelete() {
  yield takeEvery(ActionsType.REQUEST_DELETE_PRAYER, deletePrayerAsync);
}

export function* deletePrayerAsync({
  payload,
}: ReturnType<typeof requestDeletePrayer>) {
  yield put(loader(true));
  yield call(data => deletePrayer(data), {
    payload,
  });
  yield put(deletePrayerAction(payload));
  yield put(loader(false));
}

export function* watcherPrayerUpdate() {
  yield takeEvery(ActionsType.REQUEST_UPDATE_PRAYER, fetchUpdatePrayer);
}

export function* fetchUpdatePrayer({
  payload,
}: ReturnType<typeof requestUpdatePrayer>) {
  yield put(loader(true));
  const {data} = yield call(data => putPrayer(data), {
    payload,
  });
  yield put(updatePrayer(data));
  yield put(loader(false));
}
