import {createAction} from '@reduxjs/toolkit';
import {ActionsType, AllPrayers, PrayerDto, Prayer} from './types';

export const requestGetAllPrayer = createAction(
  ActionsType.REQUEST_GET_ALL_PRAYERS,
);

export const getAllPrayers = createAction<AllPrayers[]>(
  ActionsType.GET_ALL_PRAYERS,
);

export const requestAddPrayer = createAction<PrayerDto>(
  ActionsType.REQUEST_ADD_PRAYER,
);

export const addPrayer = createAction<AllPrayers>(ActionsType.ADD_PRAYER);

export const requestUpdatePrayer = createAction<Prayer>(
  ActionsType.REQUEST_UPDATE_PRAYER,
);

export const loader = createAction<boolean>(ActionsType.LOADER);

export const updatePrayer = createAction<PrayerDto>(ActionsType.UPDATE_PRAYER);

export const deletePrayer = createAction<number>(ActionsType.DELETE_PRAYER);

export const requestDeletePrayer = createAction<number>(
  ActionsType.REQUEST_DELETE_PRAYER,
);
