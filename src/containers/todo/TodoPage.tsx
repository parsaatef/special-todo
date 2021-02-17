import React from 'react';
import { Alert } from 'reactstrap';
import { Todos } from 'types/todo';
import TodoSearchContainer from './todoSearch/TodoSearchContainer';
import TodosList from './todosList/TodosList';
import TodoStatusFilterContainer from './todoStatusFilter/TodoStatusFilterContainer';

export interface Props {
    todos: Todos
}

const TodoPage: React.FC<Props> = (props) => {

    const { todos } = props;

    return (
        <section data-test="component-todo-page">

            <TodoSearchContainer />

            <TodoStatusFilterContainer />

            {todos.length ? (
                <TodosList data-test="todo-page-list" todos={todos} />    
            ) : (
                <Alert data-test="todo-page-empty" color="danger">
                    No result for the given search parameters!
                </Alert>
            )}

        </section>
    )
};

export default TodoPage;