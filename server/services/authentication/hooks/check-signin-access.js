import error from '@feathersjs/errors';
import checkPermission from '../../../utils/check-permission';

export default async function checkSignAccess(hook) {
  const { user } = hook.params;
  if (user) {
    const { password, ...userData } = user;
    // If if user allowe to login (in case get banned)
    const hasAccess = await checkPermission(hook.app, 'SIGNIN', user.roleLevel);
    if (!hasAccess) throw new error.Forbidden("You don't have access to signin.");
    return { ...hook, result: { ...hook.result, user: userData } };
  }
}
