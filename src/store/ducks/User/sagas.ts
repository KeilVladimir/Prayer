import {call, put, takeEvery} from 'redux-saga/effects';
import {signIn, signUp} from '../../../api/user';
import {ActionTypes} from './types';
import {
  requestSignIn,
  signInAction,
  requestSignUp,
  signUpAction,
  loader,
  errorAuth,
  errorReg,
} from './actions';
import {getAllColumns} from '../Columns/actions';

export function* watcherUser() {
  yield takeEvery(ActionTypes.REQUEST_SIGN_IN, SignInAsync);
  yield takeEvery(ActionTypes.REQUEST_SIGN_UP, SignUpAsync);
}

export function* SignInAsync({payload}: ReturnType<typeof requestSignIn>) {
  yield put(loader(true));
  const {data} = yield call(signIn, {
    ...payload,
  });
  if (data.name === 'EntityNotFound') {
    yield put(errorAuth(true));
  } else {
    yield put(errorAuth(false));
  }
  yield put(loader(false));
  yield put(signInAction(data));
}

export function* SignUpAsync({payload}: ReturnType<typeof requestSignUp>) {
  yield put(loader(true));
  const {data} = yield call(signUp, {
    ...payload,
  });
  if (data.name === 'QueryFailedError') {
    yield put(errorReg(true));
  } else {
    yield put(getAllColumns(data.columns));
    yield put(errorReg(false));
  }
  yield put(signUpAction(data));
  yield put(loader(false));
}
