import { useEffect, useState } from "react";
import { FooterNav } from "./components/footerNav/FooterNav";
import { InputForm } from "./components/form/InputForm";
import { TodoList } from "./components/todos/TodoList";
import { Filter, ITodo } from "./types/types";

function App() {
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [filtered, setFiltered] = useState<ITodo[]>(todoList);

    useEffect(() => {
        setFiltered(todoList);
    }, [todoList]);

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

    const onClickDeleteCompleted = () => {
        setTodoList(todoList.filter((el) => !el.checked));
    };

    const todoFilter = (status: string) => {
        if (status === Filter.all) {
            setFiltered(todoList);
        }

        if (status === Filter.active) {
            const newTodo = [...todoList].filter((el) => !el.checked);
            setFiltered(newTodo);
        }

        if (status === Filter.completed) {
            const newTodo = [...todoList].filter((el) => el.checked);
            setFiltered(newTodo);
        }
    };

    return (
        <div className='app'>
            <InputForm onSubmit={onSubmit} filtered={filtered} />
            <TodoList filtered={filtered} onChangeChecked={onChangeChecked} />
            <FooterNav
                todoFilter={todoFilter}
                filtered={filtered}
                onClickDeleteCompleted={onClickDeleteCompleted}
            />
        </div>
    );
}

export default App;
