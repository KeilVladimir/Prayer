import {httpClient} from '../index';
import {AllPrayers} from '../../store/ducks/Prayer/types';
import {paths} from '../../constains/api';

export const getPrayers = async (data: AllPrayers) => {
  return await httpClient.post(paths.prayers, data);
};
