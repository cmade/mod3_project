const Auth = (username, password) => {
  sessionStorage.setItem('authenticatedUser', username);
};
export const logout = () => {
  sessionStorage.removeItem('authenticatedUser');
};
export const isLoggedIn = () => {
  let user = sessionStorage.getItem('authenticatedUser');
  if (user === null) return false;
  return true;
};

export default Auth;
