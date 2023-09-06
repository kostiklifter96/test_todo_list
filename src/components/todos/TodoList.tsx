import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ITodoList } from "../../types/types";
import { TodoItem } from "./TodoItem";
import "./todoList.css";

export const TodoList = ({ filtered, onChangeChecked }: ITodoList) => {
    if (filtered.length < 1) {
        return null;
    }
    return (
        <ul className='todoList'>
            <TransitionGroup className='todo-list'>
                {filtered.map((t) => (
                    <CSSTransition key={t.id} timeout={500} classNames='item'>
                        <TodoItem
                            key={t.id}
                            {...t}
                            onChangeChecked={onChangeChecked}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
};
