import { useState } from "react";
import { useTaskList } from "../../context/TaskListContext";

import "./NewTask.css";

import locale from "../../locale/en.json";

const NewTask: React.FC = () => {
  const { newItem } = useTaskList();

  const [newTask, setNewTask] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTask.trim()) {
      newItem(newTask);
      setNewTask("");
    }
  };

  return (
    <form className="new-task d-flex"
    data-testid="new-task-elem"
    onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Put new task here ..."
        id="inputDefault"
        value={newTask}
        onChange={onChange}
      />
      <button type="submit" className="btn btn-primary">
        {locale.Submit}
      </button>
    </form>
  );
};

export default NewTask;
