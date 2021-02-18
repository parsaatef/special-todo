import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/reducer';
import { getTodos } from '../../redux/todo/actions';
import { 
    selectLoading, 
    selectSearch, 
    selectStatus, 
    selectTodos,
    selectError
} from '../../redux/todo/selectors';
import { createStructuredSelector } from 'reselect';
import { TodoState, TodoStatus } from '../../types/todo';
import TodoPage from './TodoPage';
import { uniqueToast } from 'helper/general';
import { toast } from 'react-toastify';

const mapStateToProps = createStructuredSelector<RootState, Partial<TodoState>>({
    todos: selectTodos,
    loading: selectLoading,
    search: selectSearch,
    status: selectStatus,
    error: selectError
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
        status = TodoStatus.ALL,
        error
    } = props;

    React.useEffect(() => {
        getTodos(search, status);
    }, []);

    React.useEffect(() => {
        if(error) {
            uniqueToast('todosRequestError', error, {
                type: 'error',
                autoClose: 3000
            });
        }

        return () => {
            toast.dismiss();
        };
    }, [error, search, status]);

    return <TodoPage 
        todos={todos}
        loading={loading}
    />
};
    
export default connector(TodoPageContainer);