import { useCallback, useEffect, useState } from "react";
import { FooterNav } from "./components/footerNav/FooterNav";
import { InputForm } from "./components/form/InputForm";
import { TodoList } from "./components/todos/TodoList";
import { Filter, ITodo } from "./types/types";

function App() {
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [filtered, setFiltered] = useState<ITodo[]>(todoList);

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
        [todoList],
    );

    const onSubmit = (data: ITodo) => {
        setTodoList([...todoList, data]);
    };

    const onChangeChecked = (id: string) => {
        setTodoList(
            todoList.map((el) => {
                if (el.id === id) {
                    return {
                        id: el.id,
                        text: el.text,
                        checked: !el.checked,
                    };
                }
                return el;
            }),
        );
    };

    const onChangeText = (id: string, newText: string) => {
        setTodoList(
            todoList.map((el) => {
                if (el.id === id) {
                    return {
                        id: el.id,
                        text: newText,
                        checked: el.checked,
                    };
                }
                return el;
            }),
        );
    };

    const onClickDeleteCompleted = useCallback(() => {
        setTodoList(todoList.filter((el) => !el.checked));
    }, [todoList]);

    useEffect(() => {
        if (localStorage.getItem("todo")) {
            const todos = JSON.parse(localStorage.getItem("todo") || "");

            setTodoList(todos);
        }
    }, []);

    useEffect(() => {
        if (todoList.length < 1) {
            todoFilter(Filter.all);
        }

        setFiltered(todoList);
        localStorage.setItem("todo", JSON.stringify(todoList));

        if (localStorage.getItem("filter")) {
            const filter = JSON.parse(localStorage.getItem("filter") || "");
            todoFilter(filter);
        }
    }, [todoFilter, todoList]);

    useEffect(() => {
        if (filtered.length < 1) {
            todoFilter(Filter.all);
        }
    }, [filtered.length, onClickDeleteCompleted, todoFilter]);

    return (
        <div className='app'>
            <InputForm onSubmit={onSubmit} filtered={filtered} />
            <TodoList
                filtered={filtered}
                onChangeChecked={onChangeChecked}
                onChangeText={onChangeText}
            />
            <FooterNav
                todoFilter={todoFilter}
                filtered={filtered}
                onClickDeleteCompleted={onClickDeleteCompleted}
            />
        </div>
    );
}

export default App;
