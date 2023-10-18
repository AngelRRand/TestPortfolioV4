import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateAvatar} from "@/src/interface/avatar";
import {Dispatch} from 'redux';
import {soundEffect} from "@/src/helper";
// import axios from 'axios';
// import {RootState} from "@/src/redux";
import colorsJson from "../../../../public/assets/create_character/colors.json"


const initialState: InitialStateAvatar = {
    gender: 1,
    base: 0,
    hair: 0,
    hairColor: 0,
    selectColor: 0,
    suit: 0,
    nationality: 0,
    colors: {
        colorPrincipal: '',
        colorSecond: '',
    }
};

const mySlice = createSlice({
    name: 'avatar',
    initialState,
    reducers: {
        setNationality: (state, action: PayloadAction<number>) => {
            state.nationality = action.payload
        },
        setGender: (state, action: PayloadAction<number>) => {
            state.gender = action.payload
        },
        setBase: (state, action: PayloadAction<number>) => {
            state.base = action.payload
        },
        setHair: (state, action: PayloadAction<number>) => {
            state.hair = action.payload
            state.hairColor = action.payload
        },
        setSelectColor: (state, action: PayloadAction<number>) => {
            state.selectColor = action.payload
            state.colors = {
                colorPrincipal: colorsJson[action.payload].rgb,
                colorSecond: colorsJson[action.payload].rgb2,
            }
        },
        setSuit: (state, action: PayloadAction<number>) => {
            state.suit = action.payload
        },
    },
});


export const {actions: myActions, reducer: avatar} = mySlice;
export default mySlice.reducer;


export const setNationality = (nationality: number) => {
    return async (dispatch: Dispatch) => {
        soundEffect('/assets/sounds/btn.mp3')
        dispatch(myActions.setNationality(nationality))

    }
}
export const setGender = (gender: number) => {
    return async (dispatch: Dispatch) => {
        soundEffect('/assets/sounds/btn.mp3')
        dispatch(myActions.setGender(gender))
    }
}
export const setBase = (base: number) => {
    return async (dispatch: Dispatch) => {
        soundEffect('/assets/sounds/btn.mp3')
        dispatch(myActions.setBase(base))
    }
}
export const setHair = (hair: number) => {
    return async (dispatch: Dispatch) => {
        soundEffect('/assets/sounds/btn.mp3')
        dispatch(myActions.setHair(hair))
    }
}

export const setSelectColor = (color: number) => {
    return async (dispatch: Dispatch) => {
        soundEffect('/assets/sounds/btn.mp3')

        dispatch(myActions.setSelectColor(color))
    }
}

export const setSuit = (suit: number) => {
    return async (dispatch: Dispatch) => {
        soundEffect('/assets/sounds/btn.mp3')

        dispatch(myActions.setSuit(suit))
    }
}


