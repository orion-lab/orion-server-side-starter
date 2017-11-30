import { saveUserInfo } from '../../reducers/user-states/actions';

export const setLoadingStatus = isLoading => ({
  type: 'SIGNIN/SET_LOADING_STATUS',
  isLoading,
});

export function userLogin(email, password) {
  return async (dispatch, getState, { app }) => {
    try {
      dispatch(setLoadingStatus(true));
      const response = await app.authenticate({
        strategy: 'local',
        password,
        email,
      });
      dispatch(setLoadingStatus(false));
      if (response.accessToken && response.user) {
        dispatch(saveUserInfo(response.user));
      } else {
        throw new Error('No access token and user data found');
      }
    } catch (e) {
      dispatch(setLoadingStatus(false));
      console.log(e.message);
    }
  };
}
