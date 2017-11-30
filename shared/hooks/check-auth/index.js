import error from '@feathersjs/errors';

export default async function checkAuth(hook) {
  try {
    if (!hook || !hook.data || !hook.result) {
      throw new error.Unprocessable('No reference to hook found');
    }
    const { app } = hook.data;
    if (!app || !app.passport || !app.passport.getJWT || !app.passport.verifyJWT) {
      throw new error.Unprocessable('No reference to app found in the hook');
    }
    const token = await app.passport.getJWT();
    if (token) {
      // Verify token
      const authPayload = await app.passport.verifyJWT(token);
      if (!authPayload.userId || authPayload.iss !== 'feathers') {
        throw new error.NotAuthenticated('JTW token is not valid');
      }
      return {
          ...hook,
          data: {
          ...hook.data,
          userId: authPayload.userId,
          token,
        },
      };
    }
    throw new error.NotAuthenticated('No token found');
  } catch (e) {
    throw e;
  }
}
