export enum ActionsType {
  ADD_COMMENT = 'ADD_COMMENT',
  REQUEST_ADD_COMMENT = 'REQUEST_ADD_PRARYER',
  UPDATE_COMMENT = 'UPDATE_COMMENT',
  REQUEST_UPDATE_COMMENT = 'REQUEST_UPDATE_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT',
  REQUEST_DELETE_COMMENT = 'REQUEST_DELETE_COMMENT',
  REQUEST_GET_ALL_COMMENTS = 'REQUEST_GET_ALL_COMMENTS',
  GET_ALL_COMMENTS = 'GET_ALL_COMMENTS',
  LOADER = 'LOADER',
}

export interface Comment {
  id: number;
  body: string;
  created: string;
  prayerId: number;
  userId: number;
  name: string;
}

export interface reqAddComment {
  body: string;
  id: number;
}
