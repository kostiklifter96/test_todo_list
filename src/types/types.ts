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

export enum Filter {
    all = "ALL",
    active = "ACTIVE",
    completed = "COMPLETED",
}
