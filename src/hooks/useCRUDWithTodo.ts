import { useCallback } from "react";
import { ITodo, IUseCRUDWithTodo } from "../types/types";

export const useCRUDWithTodo = ({
    setTodoList,
    todoList,
}: IUseCRUDWithTodo) => {
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

    return { onClickDeleteCompleted, onChangeText, onChangeChecked, onSubmit };
};
