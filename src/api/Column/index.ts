import {httpClient} from '../index';
import {Column} from '../../store/ducks/Columns/types';
import {paths} from '../../constains/api';
import {PayloadAction} from '@reduxjs/toolkit';
interface UpdateColumn {
  title: string;
  description: string;
  id: number;
}
interface AddColumn {
  title: string;
  description: string;
}

export const getColumns = async (data: Column[]) => {
  return await httpClient.get(paths.columns);
};

export const putColumns = async (data: PayloadAction<UpdateColumn>) => {
  const update = {
    title: data.payload.title,
    description: data.payload.description,
  };
  return await httpClient.put(`/columns/${data.payload.id}`, update);
};

export const deleteColumns = async (data: PayloadAction<number>) => {
  console.log(`/columns/${data.payload}`, 'data.payload');
  return await httpClient.delete(`/columns/${data.payload}`);
};

export const addColumn = async (data: PayloadAction<AddColumn>) => {
  const newColumn = {
    title: data.payload.title,
    description: '',
  };
  return await httpClient.post(paths.columns, newColumn);
};
