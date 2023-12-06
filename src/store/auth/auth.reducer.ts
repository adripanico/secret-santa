import { createReducer } from '@reduxjs/toolkit';

import { IUser } from '../../models/user';
import { loadExistingUser, signIn, signOut } from './auth.actions';

export interface IAuthState {
  errors: boolean;
  signingIn: boolean;
  signingOut: boolean;
  user?: IUser;
}

const authInitialState: IAuthState = {
  signingIn: false,
  signingOut: false,
  errors: false,
};

export const authReducer = createReducer(authInitialState, builder => {
  // LOAD EXISTING USER FROM SESSION STORAGE
  builder.addCase(loadExistingUser, (state, action) => {
    state.user = action.payload;
  });

  // SIGN IN
  builder.addCase(signIn.pending, state => {
    state.signingIn = true;
    state.errors = false;
  });
  builder.addCase(signIn.rejected, state => {
    state.signingIn = false;
    state.errors = true;
  });
  builder.addCase(signIn.fulfilled, (state, action) => {
    state.signingIn = false;
    state.errors = false;
    state.user = action.payload;
  });

  // SIGN OUT
  builder.addCase(signOut.pending, state => {
    state.signingOut = true;
    state.errors = false;
  });
  builder.addCase(signOut.rejected, state => {
    state.signingOut = false;
    state.errors = true;
  });
  builder.addCase(signOut.fulfilled, state => {
    state.signingOut = false;
    state.errors = false;
    state.user = undefined;
  });
});
