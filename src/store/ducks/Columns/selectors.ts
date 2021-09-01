import {RootState} from '../../store';

export const getAllColumns = (state: RootState) => state.columns.columns;

export const getStateLoader = (state: RootState) => state.columns.loader;
