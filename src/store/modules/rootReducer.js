import { combineReducers } from 'redux';
import auth from './auth/reducer';
import application from './application/reducer';

export default combineReducers({
  auth,
  application,
});
