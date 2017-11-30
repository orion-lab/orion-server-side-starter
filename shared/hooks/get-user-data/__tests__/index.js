import getUserData from '../';

describe('getUserData', () => {
  it('throw error if hook object is empty', async () => {
    try {
      await getUserData();
    } catch (e) {
      expect(e.message).toBe('No reference to hook found');
    }
  });
  it('throw error if reference to app in hook is not found', async () => {
    try {
      await getUserData({ data: {}, result: {} });
    } catch (e) {
      expect(e.message).toBe('No reference to app found in the hook');
    }
  });
  it('return the same hook object if no token found', async () => {
    try {
      const app = {
        passport: {
          async getJWT() {
            return null;
          },
        },
      };
      const hookObject = { data: { app }, result: {} };
      const hook = await getUserData(hookObject);
      expect(hook).toMatchObject(hookObject);
    } catch (e) {
      expect(e.message).toBeNull();
    }
  });
  it('return the same hook object if no userId or iss found on JWT payload', async () => {
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
      const hook = await getUserData(hookObject);
      expect(hook).toMatchObject(hookObject);
    } catch (e) {
      expect(e.message).toBeNull();
    }
  });
  it('return userData on data object of hook if user record is found', async () => {
    try {
      const app = {
        service: jest.fn(() => ({
          async get() {
            return {
              name: 'Rudi',
              username: 'diruuu',
              password: 'eYetyauy',
            };
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
      const hook = await getUserData({ data: { app }, result: {} });
      expect(hook.data.userData).toMatchObject({
        name: 'Rudi',
        username: 'diruuu',
        password: 'eYetyauy',
      });
    } catch (e) {
      expect(e.message).toBeNull();
    }
  });
});
