export const saveUserInfo = data => ({
  type: 'HOME/SAVE_SIGNIN_INFO',
  data,
});

export function createNewUser(username, name, email, password) {
  return async (dispatch, getState, { app }) => {
    try {
      const db = app.service('users');
      const newUser = await db.create({
        username,
        name,
        email,
        password,
      });
      console.log(newUser, 'CREATED!');
    } catch (e) {
      console.log(e, 'error');
    }
  };
}
