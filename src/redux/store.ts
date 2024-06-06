import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./features/appSlice";
import userSlice from "./features/userSlice";
import countSlice from "./features/countSlice";


export const store=configureStore({
    reducer:{
        appSliceReducer:appSlice,
        userSliceReducer:userSlice,
        countSliceReducer:countSlice,
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    //     serializableCheck:{
    //         ignoredActions:["persist/PERSIST"]
    //     }
    // })
})


// const pracObj=()=>{
//     return "12"
// }

// export type storeState=ReturnType<typeof pracObj>
export type storeState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch