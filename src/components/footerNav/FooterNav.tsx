import { Filter, IFooterNav } from "../../types/types";
import "./footerNav.css";

export const FooterNav = ({
    filtered,
    todoFilter,
    onClickDeleteCompleted,
}: IFooterNav) => {
    return (
        <div className='footerNav'>
            <div className='itemsLeft'>
                {filtered.filter((el) => el.checked === false).length} items
                left
            </div>
            <div className='footerNavBtn'>
                <button onClick={() => todoFilter(Filter.all)}>All</button>
                <button onClick={() => todoFilter(Filter.active)}>
                    Active
                </button>
                <button onClick={() => todoFilter(Filter.completed)}>
                    Completed
                </button>
            </div>

            <div className='clear' onClick={() => onClickDeleteCompleted()}>
                Clear completed
            </div>
        </div>
    );
};
