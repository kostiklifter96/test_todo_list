import { useCallback } from "react";
import { ISendEmailMessage, ITodo, IUseCRUDWithTodo } from "../types/types";

export const useCRUDWithTodo = ({
    setTodoList,
    todoList,
}: IUseCRUDWithTodo) => {
    const sendEmail = async (todoInfo: ISendEmailMessage) => {
        try {
            const res = await fetch("http://localhost:3002/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(todoInfo),
            });

            return res;
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const onSubmit = (data: ITodo) => {
        setTodoList([...todoList, data]);
        const message: ISendEmailMessage = {
            ...data,
            subject: "You have a new note! ",
        };
        sendEmail(message);
    };

    const onChangeChecked = (id: string) => {
        setTodoList(
            todoList.map((el) => {
                if (el.id === id) {
                    const res = {
                        id: el.id,
                        text: el.text,
                        checked: !el.checked,
                    };

                    sendEmail({
                        ...res,
                        subject: "You changed the note status! ",
                    });
                    return res;
                }
                return el;
            }),
        );
    };

    const onChangeText = (id: string, newText: string) => {
        setTodoList(
            todoList.map((el) => {
                if (el.id === id) {
                    const res = {
                        id: el.id,
                        text: newText,
                        checked: el.checked,
                    };

                    sendEmail({
                        ...res,
                        subject: "You changed the text of the note! ",
                    });
                    return res;
                }
                return el;
            }),
        );
    };

    const onClickDeleteCompleted = useCallback(() => {
        setTodoList(todoList.filter((el) => !el.checked));
    }, [setTodoList, todoList]);

    return { onClickDeleteCompleted, onChangeText, onChangeChecked, onSubmit };
};
