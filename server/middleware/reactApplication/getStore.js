import { combineReducers } from 'redux';
import rootReducers from '../../../shared/root-reducers';
import getReducerObject from '../../../shared/utils/get-reducer-object';
import configureStore from '../../../shared/redux/configureStore';
import { app } from '../../index';

export default function getStore({ getAccessToken }) {
  const reducerObject = getReducerObject(rootReducers);
  const reducers = combineReducers(reducerObject);
  const store = configureStore(null, reducers, {
    app,
    getAccessToken,
   });
  return store;
}
