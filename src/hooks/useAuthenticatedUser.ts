import { useEffect } from 'react';

import { loadExistingUser } from '../store/auth/auth.actions';
import { selectCurrentUser } from '../store/auth/auth.selector';
import { useAppDispatch, useAppSelector } from '../store/store';

export function useAuthenticatedUser() {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(selectCurrentUser);

  useEffect(() => {
    const sessionVariableKey = Object.keys(sessionStorage).find(key => key.startsWith('firebase:authUser:'));
    if (sessionVariableKey) {
      try {
        const userData = JSON.parse(sessionStorage.getItem(sessionVariableKey) || '');

        if (userData?.providerData?.[0]) {
          const { displayName, email, photoURL, uid } = userData.providerData[0];
          if (displayName && email && photoURL && uid) {
            dispatch(loadExistingUser({ displayName, email, photoURL, uid }));
          }
        }
      } catch {
        // do nothing;
      }
    }
  }, [dispatch]);

  return currentUser;
}
