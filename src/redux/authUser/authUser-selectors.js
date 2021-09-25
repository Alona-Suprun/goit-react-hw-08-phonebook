export const getUserEmail = state => state.authUser.user.email;
export const getUserToken = state => state.authUser.token;
export const getUserIsLogedIn = state => state.authUser.isLogedIn;
//
export const getFetchingCurrentUser = state =>
  state.authUser.isFetchingCurrentUser;
//
