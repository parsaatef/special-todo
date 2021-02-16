import React from 'react';
import { Todo } from 'types/todo';

export interface Props {
    todos: Omit<Todo, 'userId'>[]
}

const TodosList: React.FC<Props> = () => {

    return (
        <section>
            
        </section>
    );
};

export default TodosList;