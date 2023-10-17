import {createSlice} from '@reduxjs/toolkit';
// import {Dispatch} from 'redux';
// import axios from 'axios';
// import {RootState} from "@/src/redux";


const initialState = {};

const mySlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
});


export const {actions: myActions, reducer: app} = mySlice;
export default mySlice.reducer;