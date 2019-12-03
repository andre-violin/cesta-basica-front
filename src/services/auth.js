import decode from 'jwt-decode';

export const TOKEN_KEY = '@CESTA:token';
export const USER = '@CESTA:user';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER, JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER);
};

export const userLocal = () => JSON.parse(localStorage.getItem(USER));

export const isTokenExpired = () => {
  try {
    const decoded = decode(getToken());
    console.log(decoded);
    const date = new Date() / 1000;
    console.log(date);

    if (decoded.exp < date) {
      return true;
    }

    return false;
  } catch (err) {
    console.log('Expired check failed!');
    return false;
  }
};
