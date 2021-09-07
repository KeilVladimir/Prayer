import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {UserRoutes} from '../navigations/routes';
import {FieldRenderProps} from 'react-final-form';
import {TouchableOpacityProps} from 'react-native';

export interface Button extends TouchableOpacityProps {
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
  TASK: {nameHeader: string; columnId: number};
  AUTHORIZATION: undefined;
  DETAILS: {id: number};
};

export type DetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  UserRoutes.DETAILS
>;

export type TaskRouteProp = RouteProp<RootStackParamList, UserRoutes.TASK>;

export type DetailRouteProp = RouteProp<RootStackParamList, UserRoutes.DETAILS>;

export type Details = NativeStackNavigationProp<
  RootStackParamList,
  UserRoutes.TASK
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
