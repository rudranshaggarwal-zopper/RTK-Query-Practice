import { createSlice } from "@reduxjs/toolkit";

const initialState={
appState:10,
appState2:10,
}

const appSlice=createSlice({
    name:"app",
    initialState,
    reducers:{

    }
})


export default appSlice.reducer