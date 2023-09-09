import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ITodoList } from "../../types/types";
import { TodoItem } from "./TodoItem";
import "./todoList.css";

export const TodoList = ({
    filtered,
    onChangeChecked,
    onChangeText,
}: ITodoList) => {
    return (
        <ul className='todoList'>
            <TransitionGroup className='todo-list'>
                {filtered.map((t) => (
                    <CSSTransition key={t.id} timeout={500} classNames='item'>
                        <TodoItem
                            key={t.id}
                            {...t}
                            onChangeChecked={onChangeChecked}
                            onChangeText={onChangeText}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
};
