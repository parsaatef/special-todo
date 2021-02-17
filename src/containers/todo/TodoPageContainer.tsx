import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/reducer';
import { selectTodos } from 'redux/todo/selectors';
import { createStructuredSelector } from 'reselect';
import { TodoState } from 'types/todo';
import TodoPage from './TodoPage';

const mapStateToProps = createStructuredSelector<RootState, Partial<TodoState>>({
    todos: selectTodos
});

const connector = connect(mapStateToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

const TodoPageContainer: React.FC<PropsFromRedux> = (props) => {

    const { todos = [] } = props;

    return <TodoPage 
        todos={todos}
    />
};

export default connector(TodoPageContainer);