import { useState } from "react";
import { Filter, IUseActiveBtns } from "../types/types";

export const useActiveBtns = ({ todoFilter }: IUseActiveBtns) => {
    const [allListBtn, setAllListBtn] = useState<boolean>(false);
    const [activeListBtn, setActiveListBtn] = useState<boolean>(false);
    const [completeListBtn, setCompleteListBtn] = useState<boolean>(false);

    const localStorageFilterBtn = () => {
        if (localStorage.getItem("filter")) {
            const filter = JSON.parse(localStorage.getItem("filter") || "");

            if (filter === Filter.all) {
                setAllListBtn(true);
                setActiveListBtn(false);
                setCompleteListBtn(false);
            }
            if (filter === Filter.active) {
                setActiveListBtn(true);
                setCompleteListBtn(false);
                setAllListBtn(false);
            }
            if (filter === Filter.completed) {
                setCompleteListBtn(true);
                setAllListBtn(false);
                setActiveListBtn(false);
            }
        }
    };

    const allListHandler = () => {
        todoFilter(Filter.all);
        setAllListBtn(true);
        setActiveListBtn(false);
        setCompleteListBtn(false);
    };

    const activeListHandler = () => {
        todoFilter(Filter.active);
        setActiveListBtn(true);
        setCompleteListBtn(false);
        setAllListBtn(false);
    };

    const completeListHandler = () => {
        todoFilter(Filter.completed);
        setCompleteListBtn(true);
        setAllListBtn(false);
        setActiveListBtn(false);
    };

    return {
        allListBtn,
        activeListBtn,
        completeListBtn,
        localStorageFilterBtn,
        allListHandler,
        activeListHandler,
        completeListHandler,
    };
};
