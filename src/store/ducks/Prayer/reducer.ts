import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {AllPrayers} from './types';
import {getAllPrayers} from './actions';

interface State {
  prayers: AllPrayers[];
}

const initialState: State = {
  prayers: [],
};

const PrayerReducer = createReducer<State>(initialState, {
  [getAllPrayers.type]: (state, action: PayloadAction<AllPrayers[]>) => {
    state.prayers = action.payload;
  },
});
export default PrayerReducer;
