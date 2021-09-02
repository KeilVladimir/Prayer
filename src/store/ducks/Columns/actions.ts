import {createAction} from '@reduxjs/toolkit';
import {Column} from './types';
import {ActionTypes} from './types';

export interface AddColumnReq {
  title: string;
  description: string | null;
}

export interface AddColumn extends AddColumnReq {
  id: number;
  userId: number;
}

interface UpdateColumn {
  title: string;
  description: string;
  id: number;
}

export const requestGetAllColumns = createAction(
  ActionTypes.REQUEST_GET_ALL_COLUMNS,
);

export const getAllColumns = createAction<Column[]>(
  ActionTypes.GET_ALL_COLUMNS,
);

export const requestRenameColumn = createAction<UpdateColumn>(
  ActionTypes.REQUEST_UPDATE_COLUMN,
);

export const renameColumn = createAction<UpdateColumn>(
  ActionTypes.UPDATE_COLUMN,
);

export const requestDeleteColumn = createAction<number>(
  ActionTypes.REQUEST_DElETE_COLUMN,
);
export const deleteColumn = createAction<number>(ActionTypes.DELETE_COLUMN);

export const requestAddColumn = createAction<AddColumnReq>(
  ActionTypes.REQUEST_ADD_COLUMN,
);
export const addColumn = createAction<AddColumn>(ActionTypes.ADD_COLUMN);

export const loader = createAction<boolean | null>('loader');
