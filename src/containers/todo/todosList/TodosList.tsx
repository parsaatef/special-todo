import React from 'react';
import { Todo } from 'types/todo';
import { Table } from 'reactstrap';
import TodoItem from '../todoItem/TodoItem';

export interface Props {
    todos: Omit<Todo, 'userId'>[]
}

const TodosList: React.FC<Props> = (props) => {

    const { todos } = props;

    return (
        <section data-test="component-todos-list">
            <Table responsive striped data-test="todos-list-container">
                <thead>
                    <th>
                        #
                    </th>  
                    <th>
                        Title
                    </th>    
                    <th>
                        Completed
                    </th>      
                </thead>
                <tbody>
                    
                    {todos.map((todo, index) => (
                        <TodoItem
                            key={`todo-item-${todo.id}`}
                            orderNumber={index + 1}
                            title={todo.title}
                            completed={todo.completed}
                            data-test="todos-list-items"
                        />    
                    ))}

                </tbody>   
            </Table>    
        </section>
    );
};

export default TodosList;