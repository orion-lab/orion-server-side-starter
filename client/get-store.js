import { combineReducers } from 'redux';
import rootReducers from '../shared/root-reducers';
import app from './feather-setup';
import getReducerObject from '../shared/utils/get-reducer-object';
import configureStore from '../shared/redux/configureStore';

export default function getStore() {
  const appState = window.__APP_STATE__;
  const reducerObject = getReducerObject(rootReducers);
  const reducers = combineReducers(reducerObject);

  const store = configureStore(appState, reducers, {
    app,
    getAccessToken: app.passport.getJWT,
  });
  return store;
}
