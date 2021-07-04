import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import mountainsReducer from './getAllMountains.store';
import oneMountainReducer from './getOneMountain.store';
import randomUserPicsReducer from './getRandomUserPics.store';
import loginReducer from './login.store';
import exploreMountainsReducer from './explore.store';
import unclimbedMountainsReducer from './getUnclimbedMountains.store';

const store = configureStore({
  reducer: {
    allMountains: mountainsReducer,
    oneMountain: oneMountainReducer,
    randomUserPics: randomUserPicsReducer,
    login: loginReducer,
    exploreRandomMountains: exploreMountainsReducer,
    unclimbedMountains: unclimbedMountainsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export type RootState = ReturnType<typeof store.getState>;

export default store;
