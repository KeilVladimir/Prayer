export enum ActionsType {
  ADD_PRAYER = 'ADD_PRAYER',
  REQUEST_ADD_PRAYER = 'REQUEST_ADD_PRARYER',
  UPDATE_PRAYER = 'UPDATE_PRAYER',
  REQUEST_UPDATE_PRAYER = 'REQUEST_UPDATE_PRAYER',
  DELETE_PRAYER = 'DELETE_PRAYER',
  REQUEST_DELETE_PRAYER = 'REQUEST_DELETE_PRAYER',
  REQUEST_GET_ALL_PRAYERS = 'REQUEST_GET_ALL_PRAYERS',
  GET_ALL_PRAYERS = 'GET_ALL_PRAYERS',
  LOADER_PRAYER = 'LOADER_PRAYER',
}

export interface PrayerDto {
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
}

export interface Prayer {
  checked: boolean;
  title: string;
  id: number;
  description: string | null;
}

export interface AllPrayers extends UpdateOrAddPrayer {
  id: number;
  checked: boolean;
  columnId: number;
  commentsIds: number[];
}

export interface UpdateOrAddPrayer {
  title: string;
  description: string | null;
}
