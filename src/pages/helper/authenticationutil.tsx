import { Cookies } from 'react-cookie';
const cookie = new Cookies();

export const isUserAuthenticated = (): boolean => {
  const user = cookie.get('userID');
  if (user && user?.uuid) {
    return true;
  }
  return false;
};
