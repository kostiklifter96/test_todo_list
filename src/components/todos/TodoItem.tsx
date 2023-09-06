import { ITodoItem } from "../../types/types";

export const TodoItem = ({ id, checked, text, onChangeChecked }: ITodoItem) => {
    const hundlerChangeChecked = () => {
        onChangeChecked(id);
    };

    return (
        <li className='todoItem'>
            <label className='todoLabel'>
                <input
                    type='checkbox'
                    checked={checked}
                    onChange={hundlerChangeChecked}
                    className={`customCheckbox `}
                />
                <span className='fake'></span>
            </label>

            <p className={`textItem ${checked && " done"}`}>{text}</p>
        </li>
    );
};
