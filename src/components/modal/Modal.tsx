import { Dispatch, useState } from "react";
import "./modal.css";
interface IModal {
    text: string;
    id: string;
    setShow: Dispatch<React.SetStateAction<boolean>>;
    onChangeText: (id: string, newText: string) => void;
}

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
