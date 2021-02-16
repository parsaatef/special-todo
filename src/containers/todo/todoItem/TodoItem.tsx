import React from 'react';
import { Todo } from '../../../types/todo';
export interface Props extends Omit<Todo, 'id' | 'userId'> {
    orderNumber: number;    
}

const TodoItem: React.FC<Props> = (props) => {

    const {
        orderNumber,
        title,
        completed
    } = props;

    return (
        <tr data-test="component-todo-item">
            <th scope="row" data-test="todo-item-order">{orderNumber}</th>
            <td data-test="todo-item-title">{title}</td>
            <td data-test="todo-item-status">{completed ? 'yes' : 'no'}</td>
        </tr>
    );
};

export default TodoItem;