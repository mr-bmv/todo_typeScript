import React, { FC } from "react";
import { useTaskList } from "../../context/TaskListContext";

import "./Task.css";
import { ITodo } from "../../types/data";
import { FILTER } from "../../types/filters";

type Props = {
  task: ITodo;
};

export const Task: FC<Props> = ({ task }) => {
  const { onImportant, onDelete, onTask, data } = useTaskList();

  let className = "task-list-item";

  if (task.done) {
    className += " done";
  }

  if (task.important) {
    className += " important";
  }

  return (
    <span className={className}>
      <span className="task-list-item-title" onClick={() => onTask(task.id)}>
        {task.title}
      </span>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={() => onDelete(task.id)}
      >
        {data.filter === FILTER.REMOVE ? (
          <i className="fa fa-reply-all" />
        ) : (
          <i className="fa fa-trash-o" />
        )}
      </button>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={() => onImportant(task.id)}
      >
        <i className="fa fa-exclamation" />
      </button>
    </span>
  );
};
