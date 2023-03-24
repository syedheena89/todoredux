import React from "react";
import TaskForm from "./TaskForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../todoSlice";
import { markCompleted } from "../todoSlice";
import { updateTitle } from "../titleSlice";
import { useState } from "react";
import ItemForm from "./ItemForm";

const TodoList = ({ addATask, completedTasks,setModal,setTaskType,taskType,modal }) => {
  const [id, setId] = useState("");
  let navigate = useNavigate();
  const logout = () => {
    navigate("/login", true);
  };
 // let title = useSelector((currState) => currState.title);
  let toDo = useSelector((currState) => currState.toDo);
  let dispatch = useDispatch(deleteTask);
  return (
    <div>
      <div className="todo-list-header">
        <p>
          welcome heena.afreen909@gmail.com!
          <span>
            <button onClick={logout}>Logout</button>
          </span>
        </p>
      </div>
      <TaskForm addATask={addATask} />
      {modal && (
        <ItemForm
          addATask={addATask}
          modal={modal}
          setModal={setModal}
          taskType={taskType}
          id={id}
          setId={setId}
        />
      )}

      <button
        className="detail-task-btn"
        onClick={(e) => {
          e.preventDefault();
          dispatch(updateTitle(""))
          setTaskType("create");
          setModal(true);
        }}
      >
        Create Detailed Task
      </button>

      <h3 className="task-header">Tasks</h3>

      <div className="status-filter">
        <label>By Status : </label>
        <select>
          <option value="select">Select</option>
          <option value="completed">completed</option>
        </select>
        <label>By Tags : </label>
        <select>
          <option value="work">Work</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
        <label>SortBy : </label>
        <select>
          <option value="select">Select</option>
          <option value="date">date</option>
        </select>
      </div>
      <h3>Overdue Tasks</h3>
      <div className="list">
        {toDo.length === 0 ? (
          <h4 className="no-tasks-found-message ">no Tasks found</h4>
        ) : (
          ""
        )}
        {toDo.map((tod) => (
          <li className="task-item" key={tod.id}>
            <button
              className={`${tod.completed}? complete : completed-icon `}
              title="completed"
              onClick={(e) => dispatch(markCompleted(tod.id))}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <label
              type="text"
              className={`list ${tod.completed ? "complete" : ""}`}
            >
              {tod.title}
              <span>
                <h6>{tod.description}</h6>
              </span>{" "}
              <span>
                <h6>{tod.deadline}</h6>
              </span>
            </label>
            {tod.priority ? (
              <label className="task-item-priority">
                <i className="fa fa-bookmark-o" id="task-item-priority"></i>
              </label>
            ) : (
              ""
            )}
            <button
              className={`edit-button ${tod.completed ? "edit" : ""}`}
              title="edit"
              onClick={(e) => {
                e.preventDefault();
                setId(tod.id);
                dispatch(updateTitle(tod.title))
                setTaskType("update");
                setModal(true);
              }}
            >
              <i className="fa fa-edit"></i>
            </button>

            <button
              className="delete-button "
              title="delete"
              onClick={() => dispatch(deleteTask(tod.id))}
            >
              <i className="fa fa-trash"></i>
            </button>
          </li>
        ))}
      </div>
      <h3>Completed Tasks</h3>
      <div className="list">
        {toDo.length === 0 ? (
          <h4 className="no-tasks-found-message ">no Tasks found</h4>
        ) : (
          ""
        )}
        {completedTasks.map((task) => (
          <li className="task-item" key={task.id}>
            <button
              className={`${task.completed}? complete : completed-icon `}
              title="completed"
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <label
              type="text"
              className={`list ${task.completed ? "complete" : ""}`}
            >
              {task.title}
            </label>
            {task.priority ? (
              <i className="fa fa-bookmark-o" id="task-item-priority"></i>
            ) : (
              ""
            )}
            <button
              className="delete-button "
              title="delete"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              <i className="fa fa-trash"></i>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};
export default TodoList;
