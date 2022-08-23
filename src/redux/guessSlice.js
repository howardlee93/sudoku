import {createSlice } from '@reduxjs/toolkit';

export const guessReducer = createSlice({
    name:'guess',
    initialState:{
        current:'',
        past:'',
    },
    reducers:{
        addGuess(state, action){
            state.current = action.payload
        }
    }
})