import { combineReducers } from 'redux';
import UserReducer from './user.reducer';
import TasksReducer from './tasks.reducer';

export default combineReducers({
  UserReducer,
  TasksReducer,
});
