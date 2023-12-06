import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { IUser } from '../../models/user';
import { login, logout } from '../../utils/auth';

const PREFIX = 'auth';

const ACTIONS = {
  LOAD_EXISTING_USER: `${PREFIX}/loadExistingUser`,
  SIGN_IN: `${PREFIX}/signIn`,
  SIGN_OUT: `${PREFIX}/signOut`,
} as const;

export const loadExistingUser = createAction<IUser>(ACTIONS.LOAD_EXISTING_USER);

export const signIn = createAsyncThunk<IUser>(ACTIONS.SIGN_IN, async () => {
  try {
    const response = await login();

    return {
      displayName: response.user.displayName ?? '',
      email: response.user.email ?? '',
      photoURL: response.user.photoURL ?? '',
      uid: response.user.uid,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const signOut = createAsyncThunk<void>(ACTIONS.SIGN_OUT, async () => {
  try {
    return await logout();
  } catch (error) {
    console.error(error);
    throw error;
  }
});
