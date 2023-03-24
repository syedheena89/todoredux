import { createSlice } from "@reduxjs/toolkit";
const initialState = "";
export const titleReducer = createSlice({
    name:'title',
    initialState,
    reducers : {
        updateTitle : (state,action) => {
           return action.payload
        }
    }
})
export const {updateTitle} = titleReducer.actions
export default  titleReducer.reducer