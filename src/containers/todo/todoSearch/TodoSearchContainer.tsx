import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'redux/reducer';
import { filterBySearch } from 'redux/todo/actions';
import { selectSearch } from 'redux/todo/selectors';
import { createStructuredSelector } from 'reselect';
import { TodoState } from 'types/todo';
import TodoSearch from './TodoSearch';

const mapStateToProps = createStructuredSelector<RootState, Partial<TodoState>>({
    search: selectSearch
});

const mapDispatchToProps = {
    searchUpdate: filterBySearch
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

const TodoSearchContainer: React.FC<PropsFromRedux> = (props) => {

    const { searchUpdate, search = '' } = props;

    return <TodoSearch 
        searchUpdate={searchUpdate}
        search={search}
    />
};

export default connector(TodoSearchContainer);