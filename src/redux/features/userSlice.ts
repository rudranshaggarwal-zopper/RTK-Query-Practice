import { createSlice } from "@reduxjs/toolkit";

const initialState={
userSliceData:"userSliceDataValue",
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{

    }
})


export default userSlice.reducer