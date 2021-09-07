import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {Sign} from './types';
import {signInAction, signUpAction, loader, errorReg} from './actions';
import {errorAuth} from './actions';

const initialState: Sign = {
  email: '',
  password: '',
  token: '',
  id: 0,
  loader: false,
  errorAuth: false,
  errorReg: false,
  name: '',
};

const userReducer = createReducer<Sign>(initialState, {
  [signInAction.type]: (state, action: PayloadAction<Sign>) => {
    state.email = action.payload.email;
    state.password = action.payload.password;
    state.token = action.payload.token;
    state.id = action.payload.id;
    state.name = action.payload.name;
  },
  [signUpAction.type]: (state, action: PayloadAction<Sign>) => {
    state.email = action.payload.email;
    state.password = action.payload.password;
    state.token = action.payload.token;
    state.name = action.payload.name;
  },
  [loader.type]: (state, action: PayloadAction<boolean>) => {
    state.loader = action.payload;
  },
  [errorAuth.type]: (state, action: PayloadAction<boolean>) => {
    return (state = {
      ...state,
      errorAuth: action.payload,
    });
  },
  [errorReg.type]: (state, action: PayloadAction<boolean>) => {
    return (state = {
      ...state,
      errorReg: action.payload,
    });
  },
});
export default userReducer;
