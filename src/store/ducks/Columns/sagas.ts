import {call, put, takeEvery} from 'redux-saga/effects';
import {ActionTypes} from './types';
import {
  getAllColumns,
  loader,
  renameColumn,
  requestDeleteColumn,
  requestGetAllColumns,
  requestRenameColumn,
} from './actions';
import {
  getColumns,
  putColumns,
  deleteColumns,
  addColumn,
} from '../../../api/Column';
import {deleteColumn} from './actions';
import {addColumn as addColumnAction} from './actions';

export function* watcherColumns() {
  yield takeEvery(ActionTypes.REQUEST_GET_ALL_COLUMNS, GetAllColumnsAsync);
}

export function* GetAllColumnsAsync({
  payload,
}: ReturnType<typeof requestGetAllColumns>) {
  const {data} = yield call(data => getColumns(data), {
    payload,
  });
  console.log(data);
  yield put(getAllColumns(data));
}

export function* watcherColumnsUpdate() {
  yield takeEvery(ActionTypes.REQUEST_UPDATE_COLUMN, fetchUpdateColumn);
}

export function* fetchUpdateColumn({
  payload,
}: ReturnType<typeof requestRenameColumn>) {
  yield put(loader(true));
  const {data} = yield call(data => putColumns(data), {
    payload,
  });
  yield put(renameColumn(data));
  yield put(loader(false));
}

export function* watcherColumnsDelete() {
  yield takeEvery(ActionTypes.REQUEST_DElETE_COLUMN, deleteColumnAsync);
}

export function* deleteColumnAsync({
  payload,
}: ReturnType<typeof requestDeleteColumn>) {
  yield put(loader(true));
  yield call(data => deleteColumns(data), {
    payload,
  });
  yield put(deleteColumn(payload));
  yield put(loader(false));
}

export function* whatcherColumnsAdd() {
  yield takeEvery(ActionTypes.REQUEST_ADD_COLUMN, AddColumnAsync);
}

export function* AddColumnAsync({
  payload,
}: ReturnType<typeof requestGetAllColumns>) {
  yield put(loader(true));
  const {data} = yield call(data => addColumn(data), {
    payload,
  });
  yield put(loader(false));
  yield put(addColumnAction(data));
}
