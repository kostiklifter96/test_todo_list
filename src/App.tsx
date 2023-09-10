import { useEffect, useState } from "react";
import { FooterNav } from "./components/footerNav/FooterNav";
import { InputForm } from "./components/inputForm/InputForm";
import { TodoList } from "./components/todos/TodoList";
import { useCRUDWithTodo } from "./hooks/useCRUDWithTodo";
import { useTodoFilter } from "./hooks/useTodoFilter";
import { ITodo } from "./types/types";

function App() {
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [filtered, setFiltered] = useState<ITodo[]>(todoList);

    const [todoFilter] = useTodoFilter({ setFiltered, todoList });
    const { onChangeChecked, onChangeText, onClickDeleteCompleted, onSubmit } =
        useCRUDWithTodo({ setTodoList, todoList });

    useEffect(() => {
        if (localStorage.getItem("todo")) {
            const todos = JSON.parse(localStorage.getItem("todo") || "");

            setTodoList(todos);
        }
    }, []);

    useEffect(() => {
        setFiltered(todoList);
        localStorage.setItem("todo", JSON.stringify(todoList));

        if (localStorage.getItem("filter")) {
            const filter = JSON.parse(localStorage.getItem("filter") || "");

            todoFilter(filter);
        }
    }, [todoFilter, todoList]);

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
