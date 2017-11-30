import error from '@feathersjs/errors';

export default async function getUserData(hook) {
  try {
    if (!hook || !hook.data || !hook.result) {
      throw new error.Unprocessable('No reference to hook found');
    }
    const { app } = hook.data;
    if (!app) {
      throw new error.Unprocessable('No reference to app found in the hook');
    }
    const token = await app.passport.getJWT();
    if (token) {
      // Verify token
      const authPayload = await app.passport.verifyJWT(token);
      if (authPayload.userId && authPayload.iss === 'feathers') {
        // Get user data
        const userService = app.service('users');
        const userData = await userService.get(authPayload.userId);
        return { ...hook, data: { ...hook.data, userData } };
      }
    }
    return hook;
  } catch (e) {
    throw e;
  }
}
