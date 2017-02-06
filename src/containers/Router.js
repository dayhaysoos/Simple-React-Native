import { createRouter } from '@exponent/ex-navigation';
import HomeScreen from './HomeScreen/HomeScreen';
import AboutScreen from './AboutScreen/AboutScreen';
import Counter from './Counter/Counter';


export const Router = createRouter(() => ({
	home: () => HomeScreen,
	about: () => AboutScreen,
	counter: () => Counter
}));
