import { createSlice } from "@reduxjs/toolkit";
import tasks from "./data/tasks.json";
const initialState = tasks;
export const todoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      return state;
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    markCompleted: (state, action) => {
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    },
    updateTask: (state, action) => {
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
  },
});

export const { addTask, deleteTask, markCompleted, updateTask,updateTitle } =
  todoSlice.actions;
export default todoSlice.reducer;
