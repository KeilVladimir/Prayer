export interface Column {
  id: number;
  description?: string;
  title: string;
  userId: number;
}

export interface Token {
  token: string;
}

export enum ActionTypes {
  REQUEST_GET_ALL_COLUMNS = 'REQUEST_GET_ALL_COLUMNS',
  GET_ALL_COLUMNS = 'GET_ALL_COLUMNS',
  REQUEST_UPDATE_COLUMN = 'REQUEST_UPDATE_COLUMN',
  UPDATE_COLUMN = 'UPDATE_COLUMN',
  REQUEST_DElETE_COLUMN = 'REQUEST_DELETE_COLUMN',
  DELETE_COLUMN = 'DELETE_COLUMN',
  REQUEST_ADD_COLUMN = 'REQUEST_ADD_COLUMN',
  ADD_COLUMN = 'ADD_COLUMN',
}

export interface ColumnState {
  columns: Column[];
  loader: boolean;
}
