import { useEffect } from "react";
import { useActiveBtns } from "../../hooks/useActiveBtns";
import { IFooterNav } from "../../types/types";
import "./footerNav.css";

export const FooterNav = ({
    filtered,
    todoFilter,
    onClickDeleteCompleted,
}: IFooterNav) => {
    const {
        allListBtn,
        activeListBtn,
        completeListBtn,
        activeListHandler,
        allListHandler,
        completeListHandler,
        localStorageFilterBtn,
    } = useActiveBtns({ todoFilter });

    useEffect(() => {
        localStorageFilterBtn();
    }, [localStorageFilterBtn]);

    return (
        <div className='footerNav'>
            <div className='itemsLeft'>
                {filtered.filter((el) => el.checked === false).length} items
                left
            </div>
            <div className='footerNavBtn'>
                <button
                    className={`footerNavBtnItem ${allListBtn && " activeBtn"}`}
                    onClick={allListHandler}
                >
                    All
                </button>
                <button
                    className={`footerNavBtnItem ${
                        activeListBtn && " activeBtn"
                    }`}
                    onClick={activeListHandler}
                >
                    Active
                </button>
                <button
                    className={`footerNavBtnItem ${
                        completeListBtn && " activeBtn"
                    }`}
                    onClick={completeListHandler}
                >
                    Completed
                </button>
            </div>

            <div className='clear' onClick={() => onClickDeleteCompleted()}>
                Clear completed
            </div>
        </div>
    );
};
