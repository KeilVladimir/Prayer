import {RootState} from '../../store';

export const getPrayers = (state: RootState) => state.prayers.prayers;

export const getLoader = (state: RootState) => state.prayers.loader;
