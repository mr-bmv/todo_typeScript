import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("TEST Header", () => {
  test("Header - checking main structure", () => {
    render(<Header />);
    const headerElement = screen.getByTestId("header-elem");
    expect(headerElement).toBeInTheDocument();
    const titleElement = screen.getByText(/Task List/i);
    expect(titleElement).toBeInTheDocument();
    const subtitleElement = screen.getByText(/more to do/i);
    expect(subtitleElement).toBeInTheDocument();
  });
});
