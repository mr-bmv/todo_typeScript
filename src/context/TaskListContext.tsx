import React, { FC, useState } from "react";
import { useContext } from "react";
import { MOCK_initialState } from "./initialData/MOCK_initialState";
import {
  ACTION,
  Action,
  FILTER,
  Filter,
  IFilterData,
  TypeTaskListContext,
} from "../types/filters";
import { taskTemplate } from "./taskTemplate";
import { ITodo } from "../types/data";
import { initialContext } from "./initialData/initialContext";

const TaskListContext =
  React.createContext<TypeTaskListContext>(initialContext);

export const useTaskList = () => {
  return useContext(TaskListContext);
};

type Props = {
  children?: React.ReactNode;
};

export const TaskListProvider: FC<Props> = ({ children }) => {
  const [taskList, setTaskList] = useState<IFilterData>({
    tasks: MOCK_initialState,
    searchTask: "",
    filter: FILTER.ALL,
  });

  const onAction = (id: string, action: Action) => {
    let newValue = taskList.tasks.map((task) => {
      if (task.id === id) {
        task[action] = !task[action];
      }
      return task;
    });

    setTaskList({
      ...taskList,
      tasks: newValue,
    });
  };

  const onImportant = (id: string) => {
    onAction(id, ACTION.IMPORTANT);
  };

  const onDelete = (id: string) => {
    onAction(id, ACTION.NOT_REMOVED);
  };

  const onTask = (id: string) => {
    onAction(id, ACTION.DONE);
  };

  const newItem = (title: string) => {
    const newTask = { ...taskTemplate, title, id: String(Date.now()) };
    const newTaskList = [...taskList.tasks, newTask];
    console.log(newTaskList);
    setTaskList({ ...taskList, tasks: newTaskList });
  };

  const getSearchTask = (task: string) => {
    setTaskList({
      ...taskList,
      searchTask: task,
    });
  };

  const onFilter = (filter: Filter) => {
    setTaskList({
      ...taskList,
      filter,
    });
  };

  const removeTasks = () => {
    const newTaskList = taskList.tasks.filter((task) => task.notRemoved);
    setTaskList((taskList) => {
      return {
        ...taskList,
        tasks: newTaskList,
      };
    });
  };

  const filterIt = (data: ITodo[], filter: Filter) => {
    switch (filter) {
      case FILTER.ALL:
        return data.filter((task) => task.notRemoved);

      case FILTER.DONE:
        return data.filter((task) => task.notRemoved && task.done);

      case FILTER.NOT_REMOVED:
        return data.filter((task) => task.notRemoved && !task.done);

      case FILTER.REMOVE:
        return data.filter((task) => !task.notRemoved);

      default:
        return data;
    }
  };

  const searchList = (data: ITodo[], action: string) => {
    if (action) {
      return data.filter(
        (task) => task.title.toLowerCase().indexOf(action.toLowerCase()) > -1
      );
    } else {
      return data;
    }
  };

  const activeQTY = (): number => {
    const qty = taskList.tasks.filter(
      (task) => task.notRemoved && !task.done
    ).length;
    return qty;
  };

  const doneQTY = () => {
    const qty = taskList.tasks.filter(
      (task) => task.notRemoved && task.done
    ).length;
    return qty;
  };

  const list = filterIt(
    searchList(taskList.tasks, taskList.searchTask),
    taskList.filter
  );

  return (
    <TaskListContext.Provider
      value={{
        data: taskList,
        list,
        onImportant,
        onDelete,
        onTask,
        newItem,
        getSearchTask,
        onFilter,
        removeTasks,
        activeQTY,
        doneQTY,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListProvider;
