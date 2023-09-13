import { FC } from "react";
import TaskListProvider from "./context/TaskListContext";

import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import NewTask from "./components/NewTask/NewTask";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import SearchTask from "./components/SearchTask";
import Header from "./components/Header/Header";

const App: FC = () => {
  return (
    <TaskListProvider>
      <div className="app">
        <Header />
        <TaskFilter />
        <SearchTask />
        <NewTask />
        <TaskList />
      </div>
    </TaskListProvider>
  );
};

export default App;
