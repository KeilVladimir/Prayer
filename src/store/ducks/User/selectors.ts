import {RootState} from '../../store';

export const getStateLoader = (state: RootState) => state.user.loader;

export const getToken = (state: RootState) => state.user.token;

export const getErrorAuth = (state: RootState) => state.user.errorAuth;

export const getName = (state: RootState) => state.user.name;

export const getErrorReg = (state: RootState) => state.user.errorReg;
