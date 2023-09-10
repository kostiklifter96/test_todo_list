import { useState } from "react";
import { IModal } from "../../types/types";
import "./modal.css";

export const Modal = ({ text, id, onChangeText, setShow }: IModal) => {
    const [newText, setNewText] = useState<string>(text);

    const handlerNewText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewText(e.target.value);
    };

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onChangeText(id, newText);
        setShow(false);
    };

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input
                    type='text'
                    className='modalInput'
                    value={newText}
                    onChange={handlerNewText}
                />
            </form>
        </>
    );
};
