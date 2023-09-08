import { ITodoItem } from "../../types/types";

export const TodoItem = ({ id, checked, text, onChangeChecked }: ITodoItem) => {
    const hundlerChangeChecked = () => {
        onChangeChecked(id);
    };

    return (
        <li className='todoItem'>
            <label className='todoItemLabel'>
                <input
                    type='checkbox'
                    checked={checked}
                    onChange={hundlerChangeChecked}
                    className={`todoItemCustomCheckbox `}
                />
                <span className='fake'></span>
            </label>

            <div className={`todoItemText ${checked && " done"}`}>{text}</div>
        </li>
    );
};
