import {RootState} from '../../store';

export const getComments = (state: RootState) => state.comment.comments;

export const getLoader = (state: RootState) => state.comment.loader;
