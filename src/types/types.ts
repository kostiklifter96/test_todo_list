import { Dispatch } from "react";

export interface ITodo {
    id: string;
    text: string;
    checked: boolean;
}

export interface IInputForm {
    onSubmit: (data: ITodo) => void;
    filtered: ITodo[];
}

export type FormFields = {
    text: HTMLInputElement;
};

export interface ITodoList {
    filtered: ITodo[];
    onChangeChecked: (id: string) => void;
    onChangeText: (id: string, newText: string) => void;
}

export interface ITodoItem extends ITodo {
    onChangeChecked: (id: string) => void;
    onChangeText: (id: string, newText: string) => void;
}

export interface IFooterNav {
    filtered: ITodo[];
    todoFilter: (status: string) => void;
    onClickDeleteCompleted: () => void;
}

export interface IModal {
    text: string;
    id: string;
    setShow: Dispatch<React.SetStateAction<boolean>>;
    onChangeText: (id: string, newText: string) => void;
}

export enum Filter {
    all = "ALL",
    active = "ACTIVE",
    completed = "COMPLETED",
}

export interface IUseTodoFilter {
    todoList: ITodo[];
    setFiltered: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export interface IUseCRUDWithTodo {
    setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
    todoList: ITodo[];
}
export interface IUseActiveBtns {
    todoFilter: (status: string) => void;
}
