import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {Sign} from './types';
import {signInAction, signUpAction, loader} from './actions';
import {errorAuth} from './actions';

const initialState: Sign = {
  email: '',
  password: '',
  token: '',
  id: 0,
  loader: false,
  error: false,
};

const userReducer = createReducer<Sign>(initialState, {
  [signInAction.type]: (state, action: PayloadAction<Sign>) => {
    state.email = action.payload.email;
    state.password = action.payload.password;
    state.token = action.payload.token;
    state.id = action.payload.id;
  },
  [signUpAction.type]: (state, action: PayloadAction<Sign>) => {
    state.email = action.payload.email;
    state.password = action.payload.password;
    state.token = action.payload.token;
  },
  [loader.type]: (state, action: PayloadAction<boolean>) => {
    state.loader = action.payload;
  },
  [errorAuth.type]: (state, action: PayloadAction<boolean>) => {
    state.error = action.payload;
  },
});
export default userReducer;
