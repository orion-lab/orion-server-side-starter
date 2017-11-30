import service from 'feathers-rethinkdb';

function registerPermissionService(app) {
  const Model = app.get('rethinkdbClient');
  const paginate = app.get('paginate');
  const permissionService = service({
    Model,
    paginate,
    name: 'permissions',
  });
  app.use('/permissions', permissionService);
}

export default registerPermissionService;
