const isLoggedIn = state => !!state.user;
const getUser = state => state.user;

export {
  isLoggedIn,
  getUser,
};
