import {call, put, takeEvery} from 'redux-saga/effects';
import {ActionsType} from './types';
import {addComment, getComments, putComment} from '../../../api/Comment';
import {
  deleteComment as deleteCommentAction,
  getAllComments,
  requestAddComment,
  requestDeleteComment,
  addComment as addComentAction,
  requestUpdateComment,
  updateComment,
} from './actions';
import {deleteComment} from '../../../api/Comment';
import {loader} from './actions';

export function* watcherComments() {
  yield takeEvery(ActionsType.REQUEST_GET_ALL_COMMENTS, AllCommentsAsync);
}

export function* AllCommentsAsync() {
  const {data} = yield call(getComments);
  yield put(getAllComments(data));
}

export function* watcherCommentDelete() {
  yield takeEvery(ActionsType.REQUEST_DELETE_COMMENT, deleteCommentAsync);
}

export function* deleteCommentAsync({
  payload,
}: ReturnType<typeof requestDeleteComment>) {
  yield put(loader(true));
  yield call(data => deleteComment(data), {
    payload,
  });
  yield put(deleteCommentAction(payload));
  yield put(loader(false));
}

export function* watcherAddComment() {
  yield takeEvery(ActionsType.REQUEST_ADD_COMMENT, AddCommentAsync);
}

export function* AddCommentAsync({
  payload,
}: ReturnType<typeof requestAddComment>) {
  yield put(loader(true));
  const {data} = yield call(data => addComment(data), {
    payload,
  });
  yield put(addComentAction(data));
  yield put(loader(false));
}

export function* watcherCommentUpdate() {
  yield takeEvery(ActionsType.REQUEST_UPDATE_COMMENT, fetchUpdateComment);
}

export function* fetchUpdateComment({
  payload,
}: ReturnType<typeof requestUpdateComment>) {
  yield put(loader(true));
  const {data} = yield call(data => putComment(data), {
    payload,
  });
  yield put(updateComment(data));
  yield put(loader(false));
}
