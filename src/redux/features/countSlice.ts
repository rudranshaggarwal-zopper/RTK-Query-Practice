import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0
}

const countSlice=createSlice({
    name:"count",
    initialState,
    reducers:{
        incrementFunc:(state=initialState)=>{
            state.count++;
        },
        decrementFunc:(state=initialState)=>{
            state.count--;
        }
    }
})

export default countSlice.reducer;
export const {
    incrementFunc,
    decrementFunc
}=countSlice.actions