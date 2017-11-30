export default async function checkPermission(permissionName, userRoleLevel) {
  if (permissionName === 'UPLOAD_IMAGE_TO_SERVER' && userRoleLevel > 6) {
    return false;
  }
  return true;
}
