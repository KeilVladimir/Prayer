import {httpClient} from '../index';
import {paths} from '../../constains/api';
import {PayloadAction} from '@reduxjs/toolkit';
import {reqAddComment} from '../../store/ducks/Comment/types';

export const getComments = async () => {
  return await httpClient.get(paths.comments);
};

export const deleteComment = async (data: PayloadAction<number>) => {
  return await httpClient.delete(`/comments/${data.payload}`);
};

export const addComment = async (data: PayloadAction<reqAddComment>) => {
  const newComment = {
    body: data.payload.body,
  };
  console.log(`/prayers/${data.payload.id}/comments`);
  return await httpClient.post(
    `/prayers/${data.payload.id}/comments`,
    newComment,
  );
};

export const putComment = async (data: PayloadAction<reqAddComment>) => {
  const updateComment = {
    body: data.payload.body,
  };
  return await httpClient.put(`/comments/${data.payload.id}`, updateComment);
};
