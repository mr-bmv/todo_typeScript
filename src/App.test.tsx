import { render, screen } from "@testing-library/react";
import App from "./App";

describe("TEST APP", () => {
  test("App - checking main structure", () => {
    render(<App />);
    const headerElement = screen.getByTestId("header-elem");
    expect(headerElement).toBeInTheDocument();
    const taskFilterElement = screen.getByTestId("task-filter-elem");
    expect(taskFilterElement).toBeInTheDocument();
    const searchTaskElement = screen.getByTestId("search-task-elem");
    expect(searchTaskElement).toBeInTheDocument();
    const newTaskElement = screen.getByTestId("new-task-elem");
    expect(newTaskElement).toBeInTheDocument();
    const taskListElement = screen.getByTestId("list-group-elem");
    expect(taskListElement).toBeInTheDocument();
  });
});
