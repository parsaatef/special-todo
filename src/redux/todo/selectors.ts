import { createSelector } from 'reselect';
import { RootState } from '../reducer';

export const selectTodo = (state: RootState) => state.todo;

export const selectStatus = createSelector(
    selectTodo,
    todo => todo.status
);

export const selectSearch = createSelector(
    selectTodo,
    todo => todo.search
);

export const selectTodos = createSelector(
    selectTodo,
    todo => todo.todos
);

export const selectLoading = createSelector(
    selectTodo,
    todo => todo.loading
);