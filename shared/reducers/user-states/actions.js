export const saveUserInfo = data => ({
  type: 'USER_STATE/SAVE_USER_INFO',
  data,
});

const removeCurrentUserData = data => ({
  type: 'USER_STATE/REMOVE_CURRENT_USER_DATA',
  data,
});

const setAuthError = error => ({
  type: 'USER_STATE/SET_AUTH_ERROR',
  error,
});

export const signOut = () => async (dispatch, getState, { app }) => {
  if (app.logout) {
    await app.logout();
    dispatch(removeCurrentUserData());
  }
};

export const getUserInfo = () => async (dispatch, getState, {
  app,
  getAccessToken,
}) => {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return console.log('No access token found, skip getting user data.');
    }
    const authConfig = app.get('authentication');
    const payload = await app.passport.verifyJWT(accessToken, {
      secret: authConfig.secret,
    });
    const { userId } = payload;
    // Get userdata
    const userService = app.service('users');
    const user = await userService.get(userId);
    // Save on redux state
    dispatch(saveUserInfo(user));
    return true;
  } catch (e) {
    // Check if error caused by expired token
    // Then print in on the client to client can remove the token
    if (e.name === 'TokenExpiredError') {
      dispatch(setAuthError('TokenExpiredError'));
    }
    return Promise.reject(e);
  }
};
