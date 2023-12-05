const LOCAL_STORAGE_AUTH_KEY = 'userAuth';

export function getUserInfo() {
  try {
    const userInfo = localStorage.getItem(LOCAL_STORAGE_AUTH_KEY);

    if (userInfo == null) {
      return;
    }

    return JSON.parse(userInfo);
  } catch {
    return;
  }
}
