import React from 'react';
import { Todo } from '../../../types/todo';
export interface Props extends Omit<Todo, 'id' | 'userId'> {
    orderNumber: number;    
}

const TodoItem: React.FC<Props> = (props) => {

    return (
        <section>

        </section>
    )
};

export default TodoItem;