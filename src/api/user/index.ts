import {httpClient} from '../index';
import {SignIn, SignUp} from '../../store/ducks/User/types';
import {paths} from '../../constains/api';

export const signIn = async (data: SignIn) => {
  return await httpClient.post(paths.signIn, data);
};

export const signUp = async (data: SignUp) => {
  return await httpClient.post(paths.signUp, data);
};
