import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { Filter } from "./types/types";

describe("Test App", () => {
    test("renders btn", () => {
        render(<App />);

        const btn = screen.getAllByRole("button");
        btn.forEach((el) => {
            fireEvent.click(el);
            expect(el).toBeInTheDocument();
        });
    });

    test("Click filter", () => {
        render(<App />);

        const btn = screen.getByTestId("btn-all");

        expect(screen.getByTestId("btn-all")).not.toHaveFocus();
        expect(screen.getByRole("ul")).toBeInTheDocument();

        fireEvent.click(btn, {
            target: Filter.all,
        });
        btn.focus();

        // expect(screen.getByRole("li")).toBeInTheDocument();
    });
});
