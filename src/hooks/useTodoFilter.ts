import { useCallback } from "react";
import { Filter, IUseTodoFilter } from "../types/types";

export const useTodoFilter = ({ setFiltered, todoList }: IUseTodoFilter) => {
    const todoFilter = useCallback(
        (status: string = Filter.all) => {
            if (status === Filter.all) {
                setFiltered(todoList);
                localStorage.setItem("filter", JSON.stringify(Filter.all));
            }

            if (status === Filter.active) {
                const newTodo = [...todoList].filter((el) => !el.checked);
                setFiltered(newTodo);
                localStorage.setItem("filter", JSON.stringify(Filter.active));
            }

            if (status === Filter.completed) {
                const newTodo = [...todoList].filter((el) => el.checked);
                setFiltered(newTodo);
                localStorage.setItem(
                    "filter",
                    JSON.stringify(Filter.completed),
                );
            }
        },
        [setFiltered, todoList],
    );

    return [todoFilter];
};
