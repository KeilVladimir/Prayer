import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {Comment} from './types';
import {
  addComment,
  deleteComment,
  getAllComments,
  loader,
  updateComment,
} from './actions';

interface State {
  comments: Comment[];
  loader: boolean;
}

const initialState: State = {
  comments: [],
  loader: false,
};
const commentReducer = createReducer<State>(initialState, {
  [getAllComments.type]: (state, action: PayloadAction<Comment[]>) => {
    state.comments = action.payload;
  },
  [deleteComment.type]: (state, action: PayloadAction<number>) => {
    state.comments = state.comments.filter(
      prayer => prayer.id !== action.payload,
    );
  },
  [addComment.type]: (state, action: PayloadAction<Comment>) => {
    state.comments.push({
      body: action.payload.body,
      id: action.payload.id,
      name: action.payload.name,
      created: action.payload.created,
      prayerId: action.payload.prayerId,
      userId: action.payload.userId,
    });
  },
  [updateComment.type]: (state, action: PayloadAction<Comment>) => {
    state.comments.map(com => {
      if (com.id === action.payload.id) {
        com.body = action.payload.body;
      }
    });
  },
  [loader.type]: (state, action: PayloadAction<boolean>) => {
    state.loader = action.payload;
  },
});
export default commentReducer;
