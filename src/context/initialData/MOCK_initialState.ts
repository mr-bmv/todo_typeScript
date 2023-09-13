import { ITodo } from "../../types/data";

export const MOCK_initialState: ITodo[] = [
  {
    id: "1",
    title: "first todo",
    notRemoved: true,
    important: false,
    done: true,
  },
  {
    id: "2",
    title: "second todo",
    notRemoved: true,
    important: false,
    done: false,
  },
  {
    id: "3",
    title: "third todo",
    notRemoved: false,
    important: false,
    done: false,
  },
  {
    id: "4",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    notRemoved: false,
    important: false,
    done: true,
  },
];
