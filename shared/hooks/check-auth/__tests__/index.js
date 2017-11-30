import checkAuth from '../';

describe('checkAuth', () => {
  it('throw error if hook object is empty', async () => {
    try {
      await checkAuth();
    } catch (e) {
      expect(e.message).toBe('No reference to hook found');
    }
  });
  it('throw error if reference to app in hook is not found', async () => {
    try {
      await checkAuth({ data: {}, result: {} });
    } catch (e) {
      expect(e.message).toBe('No reference to app found in the hook');
    }
  });
  it('throw error if no token found', async () => {
    try {
      const app = {
        passport: {
          async getJWT() {
            return null;
          },
          async verifyJWT() {
            return null;
          },
        },
      };
      const hookObject = { data: { app }, result: {} };
      await checkAuth(hookObject);
    } catch (e) {
      expect(e.message).toBe('No token found');
    }
  });
  it('throw error if no userId or iss found on JWT payload', async () => {
    try {
      const app = {
        passport: {
          async getJWT() {
            return 'asA989yhak&';
          },
          async verifyJWT() {
            return {
              userId: null,
              iss: 'not-feather',
            };
          },
        },
      };
      const hookObject = { data: { app }, result: {} };
      await checkAuth(hookObject);
    } catch (e) {
      expect(e.message).toBe('JTW token is not valid');
    }
  });
  it('return add userId and JWT token on hook object is token valid', async () => {
    try {
      const app = {
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
      const hookObject = { data: { app }, result: {} };
      const hook = await checkAuth(hookObject);
      expect(hook.data.userId).toEqual('iRtsfs');
      expect(hook.data.token).toEqual('asA989yhak&');
    } catch (e) {
      expect(e.message).toBeNull();
    }
  });
  it('return add userId on hook object is token valid', async () => {
    try {
      const app = {
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
      const hookObject = { data: { app }, result: {} };
      const expectedObject = { ...hookObject, data: { ...hookObject.data, userId: 'iRtsfs' } };
      const hook = await checkAuth(hookObject);
      expect(hook).toMatchObject(expectedObject);
    } catch (e) {
      expect(e.message).toBeNull();
    }
  });
});
