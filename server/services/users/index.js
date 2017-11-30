import service from 'feathers-nedb';
import userHooks from './hooks';

const serviceName = 'users';

function registerUserService(app) {
  const createNeDBInstance = app.get('createNeDBInstance');
  const paginate = app.get('paginate');
  // Register service
  app.use(serviceName, service({
    name: serviceName,
    Model: createNeDBInstance(serviceName),
    paginate,
  }));
  // Register service hook
  app.service(serviceName).hooks(userHooks());
}

export default registerUserService;
