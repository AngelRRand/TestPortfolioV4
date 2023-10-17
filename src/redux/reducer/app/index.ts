import {createSlice} from '@reduxjs/toolkit';
import {InitialState} from "@/src/interface";
// import {Dispatch} from 'redux';
// import axios from 'axios';
// import {RootState} from "@/src/redux";


const initialState: InitialState = {
    avatar: {
        gender: 0,
        base: 0,
        hair: 0,
        suit: 0,
        color: 0,
        colorPrincipal: '',
        colorSecond: '',
        flag: '',
        showNationality: true,

    }
};

const mySlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
});


export const {actions: myActions, reducer: app} = mySlice;
export default mySlice.reducer;