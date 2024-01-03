import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
// import { getDefaultMiddleware } from '@reduxjs/toolkit';

// const customizedMiddleware = getDefaultMiddleware({
//     serializableCheck: false
//   })

const store = configureStore({
    reducer: {
        counter:counterReducer      
    }
})
export default store;