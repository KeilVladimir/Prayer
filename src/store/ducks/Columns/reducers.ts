import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {
  loader,
  addColumn,
  deleteColumn,
  getAllColumns,
  requestRenameColumn,
} from './actions';
import {Column, ColumnState} from './types';

const initialState: ColumnState = {
  columns: [],
  loader: false,
};

const ColumnReducer = createReducer(initialState, {
  [getAllColumns?.type]: (state, action: PayloadAction<Column[]>) => {
    state.columns = action.payload;
  },
  [requestRenameColumn.type]: (state, action: PayloadAction<Column>) => {
    state.columns = state.columns.map(col => {
      if (col.id === action.payload.id) {
        col.title = action.payload.title;
      }
      return col;
    });
  },
  [deleteColumn.type]: (state, action: PayloadAction<number>) => {
    state.columns = state.columns.filter(col => col.id !== action.payload);
  },
  [addColumn.type]: (state, action: PayloadAction<Column>) => {
    state.columns.push(action.payload);
  },
  [loader.type]: (state, action: PayloadAction<boolean>) => {
    state.loader = action.payload;
  },
});

export default ColumnReducer;
