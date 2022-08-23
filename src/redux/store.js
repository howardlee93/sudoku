import { configureStore } from "@reduxjs/toolkit";
import guessSlice from './guessSlice';

const store = configureStore({
    guess: guessSlice,
    
});

export default store;
