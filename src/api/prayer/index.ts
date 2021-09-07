import {httpClient} from '../index';
import {paths} from '../../constains/api';
import {AllPrayers, PrayerDto} from '../../store/ducks/Prayer/types';
import {PayloadAction} from '@reduxjs/toolkit';

export const getPrayers = async () => {
  return await httpClient.get(paths.prayers);
};
export const addPrayer = async (data: PayloadAction<PrayerDto>) => {
  const newPrayer = {
    title: data.payload.title,
    description: data.payload.description,
    checked: data.payload.checked,
  };
  return await httpClient.post(
    `/columns/${data.payload.columnId}/prayers`,
    newPrayer,
  );
};

export const deletePrayer = async (data: PayloadAction<number>) => {
  return await httpClient.delete(`/prayers/${data.payload}`);
};

export const putPrayer = async (data: PayloadAction<AllPrayers>) => {
  const update = {
    title: data.payload.title,
    description: data.payload.description,
    checked: data.payload.checked,
  };
  return await httpClient.put(`/prayers/${data.payload.id}`, update);
};
