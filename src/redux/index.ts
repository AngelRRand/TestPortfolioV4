import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import app from './reducer/app';

const rootReducer = combineReducers({
    app
});

export const store = configureStore({
    reducer: rootReducer
});

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;
