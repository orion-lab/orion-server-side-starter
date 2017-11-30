// Put all reducers here
import landingReducer from './pages/landing/reducers';
import signupReducer from './pages/signup/reducers';
import signinReducer from './pages/signin/reducers';
import userReducer from './reducers/user-states/reducers';

const rootReducers = [{
  name: 'landingState',
  reducer: landingReducer,
}, {
  name: 'signupState',
  reducer: signupReducer,
}, {
  name: 'signinState',
  reducer: signinReducer,
}, {
  name: 'userState',
  reducer: userReducer,
}];

export default rootReducers;
