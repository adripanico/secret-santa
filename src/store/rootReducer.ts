import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from './auth/auth.reducer';

const appReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof appReducer>;

export default appReducer;
