import React from 'react';
import { Alert, Col, Row, Spinner } from 'reactstrap';
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

            <h1 className="mt-3 mb-4">Todos</h1>

            <Row className="mb-3">

                <Col md={6}>
                    <TodoSearchContainer />
                </Col>

                <Col md={6}>
                    <TodoStatusFilterContainer />
                </Col>

            </Row>

            <section className="position-relative mb-4">

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