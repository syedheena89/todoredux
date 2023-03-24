import { createSlice } from "@reduxjs/toolkit"
const initialState = ""
export const titleSlice = createSlice({
    name:'title',
    initialState,
    reducers : {
        updateTitle: (state,action) => {
            return action.payload
        }
    }
})

export const {updateTitle} = titleSlice.actions
export default titleSlice.reducer