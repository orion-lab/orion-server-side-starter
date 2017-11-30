import service from 'feathers-nedb';

function registerPermissionService(app) {
  const createNeDBInstance = app.get('createNeDBInstance');
  const paginate = app.get('paginate');
  const permissionService = service({
    Model: createNeDBInstance('permissions'),
    paginate,
    name: 'permissions',
  });
  app.use('/permissions', permissionService);
}

export default registerPermissionService;
