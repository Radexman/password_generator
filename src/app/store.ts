import { combineReducers, configureStore } from '@reduxjs/toolkit';
import passwordSlice from '../features/password/passwordSlice';

const rootReducer = combineReducers({
	password: passwordSlice,
});

export function setupStore(preloadedState?: Partial<RootState>) {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	});
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
