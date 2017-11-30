import getReducerObject from '../';

describe('getReducerObject', () => {
  it('throw error if reducer parameter is empty', () => {
    try {
      getReducerObject();
    } catch (e) {
      expect(e.message).toBe('No reducers found on the function parameter.');
    }
  });
  it('throw error if reducer parameter is not an array', () => {
    try {
      getReducerObject('a string instead');
    } catch (e) {
      expect(e.message).toBe('Reducers in not an array');
    }
  });
  it('throw error if reducer parameter array is an empty array', () => {
    try {
      getReducerObject([]);
    } catch (e) {
      expect(e.message).toBe('Reducers cannot be an empty array');
    }
  });
  it('transform reducers array into object with reducers name as key', () => {
    try {
      const reducers = [{
        name: 'signupState',
        reducer: jest.fn(() => 'SIGNUP_REDUCERS'),
      }, {
        name: 'signinState',
        reducer: jest.fn(() => 'SIGNIN_REDUCERS'),
      }];
      const reducerObject = getReducerObject(reducers);
      expect(reducerObject.signupState()).toBe('SIGNUP_REDUCERS');
      expect(reducerObject.signinState()).toBe('SIGNIN_REDUCERS');
    } catch (e) {
      expect(e).toBeNull();
    }
  });
  it('doesnt transform the result if persistTransformer is undefined', () => {
    try {
      const reducers = [{
        name: 'signupState',
        persist: true,
        persistBlacklist: ['mediaImages'],
        reducer: jest.fn(() => 'SIGNUP_REDUCERS'),
      }, {
        name: 'signinState',
        reducer: jest.fn(() => 'SIGNIN_REDUCERS'),
      }];
      const reducerObject = getReducerObject(reducers);
      expect(reducerObject.signupState()).toBe('SIGNUP_REDUCERS');
      expect(reducerObject.signinState()).toBe('SIGNIN_REDUCERS');
    } catch (e) {
      expect(e).toBeNull();
    }
  });
  it('does transform the result if persistTransformer is defined', () => {
    try {
      const reducers = [{
        name: 'signupState',
        persist: true,
        persistBlacklist: ['mediaImages'],
        reducer: jest.fn(() => 'SIGNUP_REDUCERS'),
      }, {
        name: 'signinState',
        reducer: jest.fn(() => 'SIGNIN_REDUCERS'),
      }];
      const persistTransformer = name => ({ [name]: jest.fn(() => `${name.toUpperCase()}_REDUCER_TRANSFORMED`) });
      const reducerObject = getReducerObject(reducers, persistTransformer);
      expect(reducerObject.signupState()).toBe('SIGNUPSTATE_REDUCER_TRANSFORMED');
      expect(reducerObject.signinState()).toBe('SIGNIN_REDUCERS');
    } catch (e) {
      expect(e).toBeNull();
    }
  });
});
