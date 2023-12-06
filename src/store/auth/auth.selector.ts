import { createSelector } from '@reduxjs/toolkit';
import { IUser } from 'models/user';

import { authSelector } from '../rootSelector';
import { ISelector } from '../store';

export const selectCurrentUser: ISelector<IUser | undefined> = createSelector([authSelector], state => state.user);

export const selectIsLoginLoading: ISelector<boolean> = createSelector(
  [authSelector],
  state => state.signingIn || state.signingOut
);
