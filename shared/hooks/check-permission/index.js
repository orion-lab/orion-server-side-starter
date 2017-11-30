import error from '@feathersjs/errors';

async function checkPermission(hook, permission) {
  try {
    if (!hook || !hook.data || !hook.result) {
      throw new error.Unprocessable('No reference to hook found');
    }
    if (!permission) {
      throw new error.Unprocessable('Permission is not defined');
    }
    const { app, userId } = hook.data;
    if (!app) {
      throw new error.Unprocessable('No reference to app found in the hook');
    }
    if (!userId) {
      throw new error.Unprocessable('UserId cannot be found on the hook data');
    }
    // Get user role level
    const userService = app.service('users');
    const { roleLevel } = await userService.get(userId);
    if (!roleLevel) {
      throw new error.Unprocessable('User role level cannot be found');
    }
    // Get permission minimum role roleLevel
    const permissionService = app.service('permissions');
    const { minRoleLevel } = await permissionService.get(permission);
    if (!minRoleLevel) {
      throw new error.Unprocessable('Minimum role level for the permission cannot be found');
    }
    // Compare user role level with minimum role level required
    if (roleLevel > minRoleLevel) {
      throw new error.Forbidden("You don't have access to this service");
    }
    return hook;
  } catch (e) {
    throw e;
  }
}

export default checkPermission;
