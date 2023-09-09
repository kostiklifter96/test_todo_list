import { useCallback, useState } from "react";
import { LongPressEventType, useLongPress } from "use-long-press";
import { ITodoItem } from "../../types/types";
import { Modal } from "../modal/Modal";

export const TodoItem = ({
    id,
    checked,
    text,
    onChangeChecked,
    onChangeText,
}: ITodoItem) => {
    const [enabled, setEnabled] = useState(true);
    const [startPress, setStartPress] = useState(false);
    const [show, setShow] = useState(false);

    const callback = useCallback(() => {
        setShow(true);
    }, []);

    const bind = useLongPress(enabled ? callback : null, {
        onStart: (event) => setStartPress(true),
        onFinish: (event) => setStartPress(false),
        onCancel: (event) => setStartPress(false),
        // onMove: (event) => setStartPress(false),
        filterEvents: (event) => true,
        threshold: 500,
        captureEvent: true,
        cancelOnMovement: 25,
        cancelOutsideElement: true,
        detect: LongPressEventType.Pointer,
    });
    const handlers = bind("test context");

    const handlerChangeChecked = () => {
        onChangeChecked(id);
    };

    return (
        <li className='todoItem'>
            <label className='todoItemLabel'>
                <input
                    type='checkbox'
                    checked={checked}
                    onChange={handlerChangeChecked}
                    className={`todoItemCustomCheckbox `}
                />
                <span className='fake'></span>
            </label>

            <div
                {...handlers}
                className={`todoItemText ${checked && " done"}  ${
                    startPress && " press"
                }`}
            >
                {show && (
                    <Modal
                        text={text}
                        onChangeText={onChangeText}
                        id={id}
                        setShow={setShow}
                    />
                )}
                {!show && text}
            </div>
        </li>
    );
};
