// Application hooks that run for every service
import logger from './hooks/logger';
import addCreatedAt from './hooks/add-created-at';
import addPathedAt from './hooks/add-patched-at';
import addUpdatedAt from './hooks/add-updated-at';

export default {
  before: {
    all: [logger],
    find: [],
    get: [],
    create: [addCreatedAt],
    update: [addUpdatedAt],
    patch: [addPathedAt],
    remove: [],
  },

  after: {
    all: [logger],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [logger],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
