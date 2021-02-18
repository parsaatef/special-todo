import React from 'react';
import { Todos } from 'types/todo';
import { Table } from 'reactstrap';
import TodoItem from '../todoItem/TodoItem';

export interface Props {
    todos: Todos
}

const TodosList: React.FC<Props> = (props) => {

    const { todos } = props;

    return (
        <section data-test="component-todos-list">
            <Table responsive bordered data-test="todos-list-container">
                <thead className="bg-gray">
                    <tr>
                        <th className="text-center">
                            #
                        </th>  
                        <th>
                            Title
                        </th>    
                        <th className="text-center">
                            Completed
                        </th>
                    </tr>    
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