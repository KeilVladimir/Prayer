import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {UserRoutes} from '../navigations/routes';
import {FieldRenderProps} from 'react-final-form';

export interface ButtonType {
  nameBtn: string;
}

export interface HeaderType {
  nameHeader: string;
}

export interface TaskType {
  name: string;
}

export type RootStackParamList = {
  DASK: undefined;
  TASK: {nameHeader: string};
  AUTHORIZATION: undefined;
  DETAILS: undefined;
};

export type DeskNavigationProp = StackNavigationProp<
  RootStackParamList,
  UserRoutes.DASK
>;

export type DetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  UserRoutes.DETAILS
>;

export type TaskRouteProp = RouteProp<RootStackParamList, UserRoutes.TASK>;

export interface AuthInput extends FieldRenderProps<string> {
  placeholder: string;
  hasError?: boolean;
}

export interface Input extends FieldRenderProps<string> {
  placeholder: string;
  hasError?: boolean;
  submit?: () => void;
  formName: string;
}

export interface AuthValues {
  login: string;
  password: string;
}
