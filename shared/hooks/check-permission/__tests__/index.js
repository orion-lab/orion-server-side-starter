import checkPermission from '../';

describe('checkPermission', () => {
  const emptyHook = { data: {}, result: {} };
  const appComplete = {
    service: jest.fn(() => ({
      async get() {
        throw new Error('Cannot find user with that ID');
      },
    })),
    passport: {
      async getJWT() {
        return 'asA989yhak&';
      },
      async verifyJWT() {
        return {
          userId: 'iRtsfs',
          iss: 'feathers',
        };
      },
    },
  };
  it('throw error if hook object is empty', async () => {
    try {
      await checkPermission(null, null);
    } catch (e) {
      expect(e.message).toBe('No reference to hook found');
    }
  });
  it('throw error if permission is undefined', async () => {
    try {
      await checkPermission(emptyHook, null);
    } catch (e) {
      expect(e.message).toBe('Permission is not defined');
    }
  });
  it('throw error if reference to app in hook is not found', async () => {
    try {
      await checkPermission(emptyHook, 'UPLOADING_ARTICLE_IMAGE');
    } catch (e) {
      expect(e.message).toBe('No reference to app found in the hook');
    }
  });
  it('throw error if reference to userId in hook is not found', async () => {
    try {
      await checkPermission({ data: { app: appComplete, userId: null }, result: {} }, 'UPLOADING_ARTICLE_IMAGE');
    } catch (e) {
      expect(e.message).toBe('UserId cannot be found on the hook data');
    }
  });
  it('throw error if user record cannot be found on the database', async () => {
    try {
      await checkPermission({ data: { app: appComplete, userId: 'diruuu' }, result: {} }, 'UPLOADING_ARTICLE_IMAGE');
    } catch (e) {
      expect(e.message).toBe('Cannot find user with that ID');
    }
  });
  it('throw error if user role level cannot be found', async () => {
    try {
      const appWithNoUserRoleKey = {
        ...appComplete,
        service: jest.fn(() => ({
          async get() {
            return {
              name: 'Rudi Wahyudi',
              roleLevel: null,
            };
          },
        })),
      };
      await checkPermission({
        data: {
          app: appWithNoUserRoleKey,
          userId: 'diruuu',
        },
        result: {},
      }, 'UPLOADING_ARTICLE_IMAGE');
    } catch (e) {
      expect(e.message).toBe('User role level cannot be found');
    }
  });
  it('throw error if permission cannot be found on the database', async () => {
    try {
      const appWithNoPermissionFound = {
        ...appComplete,
        service: jest.fn(name => ({
          async get() {
            if (name === 'users') {
              return {
                name: 'Rudi Wahyudi',
                roleLevel: 5,
              };
            }
            throw new Error('Cannot find permission with that ID');
          },
        })),
      };
      await checkPermission({
        data: {
          app: appWithNoPermissionFound,
          userId: 'diruuu',
        },
        result: {},
      }, 'UPLOADING_ARTICLE_IMAGE');
    } catch (e) {
      expect(e.message).toBe('Cannot find permission with that ID');
    }
  });
  it('throw error if permission minimum role level cannot be found', async () => {
    try {
      const appWithNoRoleLevelOnPermissionFound = {
        ...appComplete,
        service: jest.fn(name => ({
          async get() {
            if (name === 'users') {
              return {
                name: 'Rudi Wahyudi',
                roleLevel: 5,
              };
            }
            return {
              name: 'UPLOADING_ARTICLE_IMAGE',
            };
          },
        })),
      };
      await checkPermission({
        data: {
          app: appWithNoRoleLevelOnPermissionFound,
          userId: 'diruuu',
        },
        result: {},
      }, 'UPLOADING_ARTICLE_IMAGE');
    } catch (e) {
      expect(e.message).toBe('Minimum role level for the permission cannot be found');
    }
  });
  it('throw error if user role level higher than minimum role level required', async () => {
    try {
      const appWithNoRoleLevelOnPermissionFound = {
        ...appComplete,
        service: jest.fn(name => ({
          async get() {
            if (name === 'users') {
              return {
                name: 'Rudi Wahyudi',
                roleLevel: 6,
              };
            }
            return {
              name: 'UPLOADING_ARTICLE_IMAGE',
              minRoleLevel: 5,
            };
          },
        })),
      };
      await checkPermission({
        data: {
          app: appWithNoRoleLevelOnPermissionFound,
          userId: 'diruuu',
        },
        result: {},
      }, 'UPLOADING_ARTICLE_IMAGE');
    } catch (e) {
      expect(e.message).toBe("You don't have access to this service");
    }
  });
  it('return the same hook if permission is granted', async () => {
    try {
      const appWithNoRoleLevelOnPermissionFound = {
        ...appComplete,
        service: jest.fn(name => ({
          async get() {
            if (name === 'users') {
              return {
                name: 'Rudi Wahyudi',
                roleLevel: 6,
              };
            }
            return {
              name: 'UPLOADING_ARTICLE_IMAGE',
              minRoleLevel: 7,
            };
          },
        })),
      };
      const hookObject = {
        data: {
          app: appWithNoRoleLevelOnPermissionFound,
          userId: 'diruuu',
        },
        result: {},
      };
      const result = await checkPermission(hookObject, 'UPLOADING_ARTICLE_IMAGE');
      expect(result).toMatchObject(hookObject);
    } catch (e) {
      expect(e.message).toBeNull();
    }
  });
});
