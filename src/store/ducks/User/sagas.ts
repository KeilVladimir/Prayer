import {call, put, takeEvery} from 'redux-saga/effects';
import {signIn, signUp} from '../../../api/user';
import {ActionTypes} from './types';
import {
  requestSignIn,
  signInAction,
  requestSignUp,
  signUpAction,
  loader,
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
  yield put(signInAction(data));
  yield put(loader(false));
}

export function* SignUpAsync({payload}: ReturnType<typeof requestSignUp>) {
  yield put(loader(true));
  const {data} = yield call(signUp, {
    ...payload,
  });
  yield put(signUpAction(data));
  yield put(getAllColumns(data.columns));
  yield put(loader(false));
}
