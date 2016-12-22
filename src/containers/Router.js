import { createRouter } from '@exponent/ex-navigation';
import HomeScreen from './HomeScreen/HomeScreen';

export const Router = createRouter(() => ({
	home: () => HomeScreen
}));
