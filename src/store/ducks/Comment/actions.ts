import {createAction} from '@reduxjs/toolkit';
import {ActionsType, Comment, reqAddComment} from './types';

export const requestGetAllComments = createAction(
  ActionsType.REQUEST_GET_ALL_COMMENTS,
);

export const getAllComments = createAction<Comment[]>(
  ActionsType.GET_ALL_COMMENTS,
);

export const requestDeleteComment = createAction<number>(
  ActionsType.REQUEST_DELETE_COMMENT,
);

export const deleteComment = createAction<number>(ActionsType.DELETE_COMMENT);

export const requestAddComment = createAction<reqAddComment>(
  ActionsType.REQUEST_ADD_COMMENT,
);

export const addComment = createAction<Comment>(ActionsType.ADD_COMMENT);

export const requestUpdateComment = createAction<reqAddComment>(
  ActionsType.REQUEST_UPDATE_COMMENT,
);

export const updateComment = createAction<Comment>(ActionsType.UPDATE_COMMENT);

export const loader = createAction<boolean>(ActionsType.LOADER);
