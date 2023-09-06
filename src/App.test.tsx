import { render, screen } from "@testing-library/react";
import App from "./App";

describe("List component", () => {
    test("renders learn react link", () => {
        render(<App />);
        const linkElement = screen.queryByRole("list");
        expect(linkElement).toBeNull();
    });
});
