import {createAction} from '@reduxjs/toolkit';
import {ActionsType, AllPrayers} from './types';

export const requestGetAllPrayer = createAction(
  ActionsType.REQUEST_GET_ALL_PRAYERS,
);

export const getAllPrayers = createAction<AllPrayers[]>(
  ActionsType.GET_ALL_PRAYERS,
);

export const requestAddPrayer = createAction(ActionsType.REQUEST_ADD_PRAYER);

export const addPrayer = createAction(ActionsType.ADD_PRAYER);

export const requestUpdatePrayer = createAction(
  ActionsType.REQUEST_UPDATE_PRAYER,
);

export const updatePrayer = createAction(ActionsType.UPDATE_PRAYER);

export const deletePrayer = createAction(ActionsType.DELETE_PRAYER);

export const requestDeletePrayer = createAction(
  ActionsType.REQUEST_DELETE_PRAYER,
);
