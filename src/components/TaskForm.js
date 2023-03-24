import React from "react";
import { useDispatch } from "react-redux";
import { updateTitle } from "../titleSlice";

const TaskForm = ({ addATask }) => {
  let dispatch = useDispatch();
  return (
    <div>
      <form onSubmit={addATask} className="task-input-container">
        <input
          type="text"
          placeholder="add Task todo ..."
        
          onChange={(e) => {
            e.preventDefault();
            dispatch(updateTitle(e.target.value));
          }}
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
