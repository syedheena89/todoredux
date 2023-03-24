import { configureStore } from "@reduxjs/toolkit";
import titleSlice from "./titleSlice";
import todoSlice from "./todoSlice";


export const store = configureStore({
    reducer : {
        title: titleSlice,
        toDo: todoSlice
    }
})