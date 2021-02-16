import { createSelector } from 'reselect';
import { RootState } from '../reducer';

export const selectTodo = (state: RootState) => state.todo;