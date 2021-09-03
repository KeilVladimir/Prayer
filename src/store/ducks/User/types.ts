import {Column} from '../Columns/types';

export enum ActionTypes {
  SIGN_IN = 'SIGN_IN',
  REQUEST_SIGN_IN = 'REQUEST_SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  REQUEST_SIGN_UP = 'REQUEST_SIGN_UP',
  LOADER = 'LOADER',
  ERROR = 'ERROR',
}

export interface SignIn {
  email: string;
  password: string;
}

export interface SignUp extends SignIn {
  email: string;
  columns?: Column[];
  name: string;
  password: string;
}

export interface Sign {
  token: string;
  id: number;
  password: string;
  email: string;
  loader: boolean;
  error: boolean;
}
