import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {AllPrayers} from './types';
import {
  deletePrayer,
  getAllPrayers,
  loaderPrayer,
  updatePrayer,
} from './actions';
import {addPrayer} from './actions';

interface State {
  prayers: AllPrayers[];
  loader: boolean;
}

const initialState: State = {
  prayers: [],
  loader: false,
};

const PrayerReducer = createReducer<State>(initialState, {
  [getAllPrayers.type]: (state, action: PayloadAction<AllPrayers[]>) => {
    state.prayers = action.payload;
  },
  [addPrayer.type]: (state, action: PayloadAction<AllPrayers>) => {
    state.prayers.push({
      title: action.payload.title,
      description: action.payload.description,
      checked: action.payload.checked,
      columnId: action.payload.columnId,
      id: action.payload.id,
      commentsIds: action.payload.commentsIds,
    });
  },
  [deletePrayer.type]: (state, action: PayloadAction<number>) => {
    console.log('reducer');
    state.prayers = state.prayers.filter(
      prayer => prayer.id !== action.payload,
    );
  },
  [updatePrayer.type]: (state, action: PayloadAction<AllPrayers>) => {
    state.prayers.map(prayer => {
      if (prayer.id === action.payload.id) {
        prayer.checked = action.payload.checked;
        prayer.title = action.payload.title;
        prayer.description = action.payload.description;
      }
    });
  },
  [loaderPrayer.type]: (state, action: PayloadAction<boolean>) => {
    state.loader = action.payload;
  },
});
export default PrayerReducer;
