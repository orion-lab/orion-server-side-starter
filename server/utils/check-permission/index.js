async function checkPermission(app, permissionName, userRoleLevel) {
  try {
    const permission = app.service('permissions');
    const { minRoleLevel } = await permission.get(permissionName);
    if (userRoleLevel > minRoleLevel) {
      return false;
    }
    return true;
  } catch (e) {
    return Promise.resolve(false);
  }
}

export default checkPermission;
