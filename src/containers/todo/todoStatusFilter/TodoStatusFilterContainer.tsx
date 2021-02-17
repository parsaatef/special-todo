import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../redux/reducer';
import { filterByStatus } from '../../../redux/todo/actions';
import { selectStatus } from '../../../redux/todo/selectors';
import { createStructuredSelector } from 'reselect';
import { TodoState, TodoStatus } from '../../../types/todo';
import TodoStatusFilter from './TodoStatusFilter';

const mapStateToProps = createStructuredSelector<RootState, Partial<TodoState>>({
    status: selectStatus
});

const mapDispatchToProps = {
    updateStatus: filterByStatus
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

const TodoStatusFilterContainer: React.FC<PropsFromRedux> = (props) => {

    const { updateStatus, status = TodoStatus.ALL } = props;

    return <TodoStatusFilter 
        updateStatus={updateStatus}
        status={status}
    />
};

export default connector(TodoStatusFilterContainer);