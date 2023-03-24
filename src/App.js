import "./App.css";
import { Routes, Route } from "react-router-dom";
import TodoList from "../src/components/TodoList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTask } from "./todoSlice";
import { v4 as uuidv4 } from "uuid";
import { updateTitle } from "./titleSlice";
import { useState } from "react";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import InvalidAccess from "./components/InvalidAccess";
import Signup from "./components/Signup"

function App() {
  const [modal, setModal] = useState("");
  const [taskType, setTaskType] = useState("");
  let title = useSelector((currState) => currState.title);
  let toDo = useSelector((currState) => currState.toDo);
  let dispatch = useDispatch();

  //Add task
  const addATask = (e) => {
    e.preventDefault();
    if (title) {
      let newEntry = {
        title: title,
        description: "",
        deadline: null,
        tags: [],
        priority: false,
        image: "",
        completed: false,
        id: uuidv4(),
        createdAt: null,
      };

      dispatch(addTask(newEntry));
      dispatch(updateTitle(""));
      // clear input field after adding task
      e.target.reset();
    }
  };
  const completedTasks = toDo.filter((task) => task.completed);

  return (
    <div className="main-container">
      <header className="app-title">
        <h2>TODO APP</h2>
      </header>

      <div className="components">
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/success" element={<TodoList />} />
          <Route path="/invalidAccess" element={<InvalidAccess />} />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/TodoList"
            element={
              <TodoList
                taskType={taskType}
                setTaskType={setTaskType}
                modal={modal}
                setModal={setModal}
                addATask={addATask}
                completedTasks={completedTasks}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
