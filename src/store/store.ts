import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  // enhancers: [],
  devTools: true,
});

type RootState = ReturnType<typeof store.getState>;

/**
 * Generic Redux Selector Type
 * -> Kudos to SergioTx <https://github.com/SergioTx>
 *
 * - Usage without arguments, only return type:
 * ```ts
 * const mySelector: ISelector<boolean> = createSelector(state => state.booleanValue);
 * // ...
 * const mySelectorResponse = useAppSelector(mySelector);
 * ```
 * - Usage with arguments (named tuples are optional, but preferred):
 * ```ts
 *  * const mySelector: ISelector<boolean, [arg1: string]> = createSelector([(state, arg1) => state.myStore, (state, arg1) => arg1], (myStore, arg1) => myStore[arg1]);
 * // ...
 * const mySelectorResponse = useAppSelector(state => mySelector(state, arg1));
 * ```
 */
export type ISelector<ReturnType, ParamsType extends unknown[] = []> = (
  state: RootState,
  ...args: ParamsType
) => ReturnType;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
