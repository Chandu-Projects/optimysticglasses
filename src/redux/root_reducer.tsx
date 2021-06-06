import { combineReducers } from 'redux';
import { Home } from '../pages/home/redux/reducer';
import { List } from '../pages/list/redux/reducer';

export default combineReducers({
  Home,
  List,
});
