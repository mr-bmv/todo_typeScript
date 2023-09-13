import { FILTER, Filter } from "../../types/filters";

const initialContextTodo = [
  {
    id: "",
    title: "",
    notRemoved: false,
    important: false,
    done: false,
  },
];

const initialContextFilteredData = {
  tasks: initialContextTodo,
  searchTask: "",
  filter: FILTER.ALL,
};

export const initialContext = {
  data: initialContextFilteredData,
  list: initialContextTodo,
  onImportant: (id: string) => {},
  onDelete: (id: string) => {},
  onTask: (id: string) => {},
  newItem: (title: string) => {},
  getSearchTask: (task: string) => {},
  onFilter: (filter: Filter) => {},
  removeTasks: () => {},
  activeQTY: () => 0,
  doneQTY: () => 0,
};
