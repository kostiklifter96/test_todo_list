import { FormFields, IInputForm } from "../../types/types";
import "./inputForm.css";

export const InputForm = ({ onSubmit, filtered }: IInputForm) => {
    const handlerSubmit = (
        e: React.FormEvent<HTMLFormElement & FormFields>,
    ) => {
        e.preventDefault();
        if (!e.currentTarget.text?.value) {
            alert("Enter the todo");
            return;
        }
        const data = {
            id: String(Date.now()),
            text: e.currentTarget.text?.value,
            checked: false,
        };

        onSubmit(data);

        e.currentTarget.reset();
    };

    return (
        <form onSubmit={handlerSubmit} className='form'>
            <div className='formArrow'>
                <svg
                    className={`formArrowSVG  ${
                        filtered.length < 1 && " right"
                    }`}
                    version='1.0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='20pt'
                    height='12pt'
                    viewBox='0 0 1280.000000 1280.000000'
                    preserveAspectRatio='xMidYMid meet'
                >
                    <g
                        transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)'
                        fill='#e8e8e8'
                        stroke='none'
                    >
                        <path
                            d='M1297 12438 c98 -110 5456 -5964 5490 -5999 l44 -45 -2737 -2990
c-1505 -1644 -2755 -3008 -2777 -3031 l-41 -43 2356 0 2357 0 2775 3031 2776
3031 -61 67 c-34 36 -1283 1401 -2777 3033 l-2717 2968 -2354 0 -2354 0 20
-22z'
                        />
                    </g>
                </svg>
            </div>
            <input
                id='input'
                type='text'
                className='formInput'
                name='text'
                placeholder='What needs to be done?'
            />
        </form>
    );
};
