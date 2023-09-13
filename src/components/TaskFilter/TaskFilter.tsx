import { useTaskList } from "../../context/TaskListContext";

import "./TaskFilter.css";
import { FILTER } from "../../types/filters";

import locale from "../../locale/en.json";

export const TaskFilter: React.FC = () => {
  const { onFilter, removeTasks } = useTaskList();

  const { Active, All, CleanRemovedTasks, Closed, Removed } = locale;

  const onAll = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onFilter(FILTER.ALL);
  };

  const onDone = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onFilter(FILTER.DONE);
  };

  const onRemove = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onFilter(FILTER.REMOVE);
  };

  const onActive = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onFilter(FILTER.NOT_REMOVED);
  };

  const onCleanRemovedTask = () => {
    removeTasks();
  };

  return (
    <div className="task-filter d-flex" data-testid="task-filter-elem">
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={onAll}
        >
          {All}
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onDone}
        >
          {Closed}
        </button>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={onActive}
        >
          {Active}
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={onRemove}
        >
          {Removed}
        </button>
      </div>

      <div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={onCleanRemovedTask}
        >
          {CleanRemovedTasks}
        </button>
      </div>
    </div>
  );
};

export default TaskFilter;
