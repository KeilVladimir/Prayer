import {createAction} from '@reduxjs/toolkit';
import {SignIn, SignUp} from './types';
import {ActionTypes} from './types';

export const signInAction = createAction<SignIn>(ActionTypes.SIGN_IN);

export const requestSignIn = createAction<SignIn>(ActionTypes.REQUEST_SIGN_IN);

export const signUpAction = createAction<SignUp>(ActionTypes.SIGN_UP);

export const requestSignUp = createAction<SignUp>(ActionTypes.REQUEST_SIGN_UP);

export const loader = createAction<boolean>(ActionTypes.LOADER);

export const errorAuth = createAction<boolean>(ActionTypes.ERROR_AUTH);

export const errorReg = createAction<boolean>(ActionTypes.ERROR_REG);
