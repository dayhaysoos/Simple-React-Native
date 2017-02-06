import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';
import { incrementer } from './increment-reducer';

export default rootReducer = combineReducers({
	navigation: NavigationReducer,
	incrementer
});
