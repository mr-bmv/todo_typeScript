import { ITodo } from "./data";

type ValueOf<T extends {}> = T[keyof T];

export const ACTION = {
  IMPORTANT: "important",
  NOT_REMOVED: "notRemoved",
  DONE: "done",
} as const;
export type Action = ValueOf<typeof ACTION>;

export const FILTER = {
  ALL: "all",
  NOT_REMOVED: "notRemoved",
  DONE: "done",
  REMOVE: "remove",
} as const;
export type Filter = ValueOf<typeof FILTER>;

export interface IFilterData {
  tasks: ITodo[];
  searchTask: string;
  filter: Filter;
}

export type TypeTaskListContext = {
  data: IFilterData;
  list: ITodo[];
  onImportant: (id: string) => void;
  onDelete: (id: string) => void;
  onTask: (id: string) => void;
  newItem: (title: string) => void;
  getSearchTask: (task: string) => void;
  onFilter: (filter: Filter) => void;
  removeTasks: () => void;
  activeQTY: () => number;
  doneQTY: () => number;
};
