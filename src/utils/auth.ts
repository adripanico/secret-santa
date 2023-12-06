import {
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
  signOut,
  UserCredential,
} from 'firebase/auth';

// const LOCAL_STORAGE_AUTH_KEY = 'userAuth';

export const login = (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');

  const auth = getAuth();

  return setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithPopup(auth, provider);
    })
    .catch(error => {
      throw error;
    });
};

export const logout = (): Promise<void> => {
  return signOut(getAuth());
};
