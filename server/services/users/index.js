import service from 'feathers-rethinkdb';
import userHooks from './hooks';

const serviceName = 'users';

function registerUserService(app) {
  const Model = app.get('rethinkdbClient');
  const paginate = app.get('paginate');
  // Register service
  app.use(serviceName, service({
    name: serviceName,
    Model,
    paginate,
  }));
  // Register service hook
  app.service(serviceName).hooks(userHooks());
}

export default registerUserService;
