import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import userReducer from './userReducer';
import homeList from './homeReducer'

export default combineReducers({
  LoginForm : LoginReducer,
  user: userReducer,
  homeList: homeList
}) 