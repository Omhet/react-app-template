import { combineReducers, configureStore } from '@reduxjs/toolkit';
import example from './modules/example';

export const rootReducer = combineReducers({
    example,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
