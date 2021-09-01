import {RootState} from '../../store';

export const getStateLoader = (state: RootState) => state.user.loader;

export const getToken = (state: RootState) => state.user.token;
