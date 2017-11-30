import local from '@feathersjs/authentication-local';
import auth from '@feathersjs/authentication';

export default () => ({
  before: {
    all: [],
    find: [auth.hooks.authenticate('jwt')],
    get: [],
    create: [local.hooks.hashPassword({ passwordField: 'password' })],
    update: [local.hooks.hashPassword({ passwordField: 'password' })],
    patch: [local.hooks.hashPassword({ passwordField: 'password' })],
    remove: [],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      (hook) => {
        const { password, ...userData } = hook.result;
        return { ...hook, result: userData };
      },
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
});
