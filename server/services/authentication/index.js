import auth from '@feathersjs/authentication';
import checkSignAccess from './hooks/check-signin-access';

function registerAuthService(app) {
  // Register hooks
  const authConfig = app.get('authentication');
  app.service(authConfig.path).hooks({
    before: {
      create: [
        // You can chain multiple strategies
        auth.hooks.authenticate(authConfig.strategies),
      ],
      remove: [
        auth.hooks.authenticate('jwt'),
      ],
    },
    after: {
      create: [
        checkSignAccess,
      ],
    },
  });
}

export default registerAuthService;
