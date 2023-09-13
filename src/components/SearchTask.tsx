import { FC } from "react";
import { useTaskList } from "../context/TaskListContext";

const SearchTask: FC = () => {
  const { getSearchTask } = useTaskList();

  return (
    <form className="form-group" data-testid="search-task-elem">
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Search Task"
        onChange={(e) => getSearchTask(e.target.value)}
      />
    </form>
  );
};

export default SearchTask;
