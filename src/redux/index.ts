import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import app from './reducer/app';
import avatar from './reducer/avatar';

const rootReducer = combineReducers({
    app,
    avatar
});

export const store = configureStore({
    reducer: rootReducer
});

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;
