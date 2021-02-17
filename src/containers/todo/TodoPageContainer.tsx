import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/reducer';
import { getTodos } from '../../redux/todo/actions';
import { selectLoading, selectSearch, selectStatus, selectTodos } from '../../redux/todo/selectors';
import { createStructuredSelector } from 'reselect';
import { TodoState, TodoStatus } from '../../types/todo';
import TodoPage from './TodoPage';

const mapStateToProps = createStructuredSelector<RootState, Partial<TodoState>>({
    todos: selectTodos,
    loading: selectLoading,
    search: selectSearch,
    status: selectStatus
});

const mapDispatchToProps = {
    getTodos: getTodos
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

const TodoPageContainer: React.FC<PropsFromRedux> = (props) => {

    const { 
        todos = [], 
        loading = false, 
        getTodos, 
        search = '', 
        status = TodoStatus.ALL
    } = props;

    React.useEffect(() => {
        getTodos(search, status);
    }, []);

    return <TodoPage 
        todos={todos}
        loading={loading}
    />
};
    
export default connector(TodoPageContainer);