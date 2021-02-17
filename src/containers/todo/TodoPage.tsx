import React from 'react';
import { Alert, Spinner } from 'reactstrap';
import { Todos } from 'types/todo';
import TodoSearchContainer from './todoSearch/TodoSearchContainer';
import TodosList from './todosList/TodosList';
import TodoStatusFilterContainer from './todoStatusFilter/TodoStatusFilterContainer';

export interface Props {
    todos: Todos,
    loading: boolean
}

const TodoPage: React.FC<Props> = (props) => {

    const { todos, loading } = props;

    return (
        <section data-test="component-todo-page">

            <TodoSearchContainer />

            <TodoStatusFilterContainer />

            <section className="container">

                {loading && <div className="overlay" />}
                {loading && <Spinner 
                    data-test="todo-page-loading" 
                    className="custom-loading" 
                    color="info" 
                    type="grow" 
                />}

                {todos.length ? (
                    <TodosList data-test="todo-page-list" todos={todos} />    
                ) : (
                    <Alert data-test="todo-page-empty" color="danger">
                        No result for the given search parameters!
                    </Alert>
                )}
            </section>

        </section>
    )
};

export default TodoPage;