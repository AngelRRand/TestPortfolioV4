import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateAvatar} from "@/src/interface/avatar";
import {Dispatch} from 'redux';
import {soundEffect} from "@/src/helper";
// import axios from 'axios';
// import {RootState} from "@/src/redux";


const initialState: InitialStateAvatar = {
    nationality: 0,
    gender: 1,
    base: 0,
    hair: 0,
    hairColor: 0,
    selectColor: 0,
    suit: 0,
    colorPrincipal: '',
    colorSecond: '',
    flag: '',
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
        },
        setHairColor: (state, action: PayloadAction<number>) => {
            state.hairColor = action.payload
        },
        setSelectColor: (state, action: PayloadAction<number>) => {
            state.selectColor = action.payload
        },
        setSuit: (state, action: PayloadAction<number>) => {
            state.suit = action.payload
        },
        setColorPrincipal: (state, action: PayloadAction<string>) => {
            state.colorPrincipal = action.payload
        },
        setColorSecond: (state, action: PayloadAction<string>) => {
            state.colorSecond = action.payload
        },
        setFlag: (state, action: PayloadAction<string>) => {
            state.flag = action.payload
        }
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
export const setHairColor = (color: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(myActions.setHairColor(color))
    }
}

export const setSelectColor = (color: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(myActions.setSelectColor(color))
    }
}

export const setSuit = (suit: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(myActions.setSuit(suit))
    }
}

export const setColorPrincipal = (color: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(myActions.setColorPrincipal(color))
    }
}

export const setColorSecond = (color: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(myActions.setColorSecond(color))
    }
}

export const setFlag = (flag: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(myActions.setFlag(flag))
    }
}


