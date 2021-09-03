import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {UserRoutes} from '../navigations/routes';
import {FieldRenderProps} from 'react-final-form';

export interface Button {
  nameBtn: string;
}

export interface Header {
  nameHeader: string;
}

export interface Task {
  name: string;
}

export type RootStackParamList = {
  DASK: undefined;
  TASK: {nameHeader: string};
  AUTHORIZATION: undefined;
  DETAILS: undefined;
};

export type DetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  UserRoutes.DETAILS
>;

export type TaskRouteProp = RouteProp<RootStackParamList, UserRoutes.TASK>;

export type Details = NativeStackNavigationProp<
  RootStackParamList,
  UserRoutes.DETAILS
>;

export type DeskNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  UserRoutes.DASK
>;

export interface AuthInput extends FieldRenderProps<string> {
  placeholder: string;
  hasError?: boolean;
}

export interface Input extends FieldRenderProps<string> {
  placeholder: string;
  hasError?: boolean;
  submit?: () => void;
  prayer?: boolean;
}

export interface AuthValues {
  email: string;
  password: string;
  name: string;
}
