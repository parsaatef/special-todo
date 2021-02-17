import { TodoState, TodoStatus } from "../../types/todo";
import {
    SEARCH_UPDATE,
    UPDATE_STATUS,
    REQUEST_TODOS,
    SUCCESS_TODOS,
    FAILURE_TODOS
} from './constants';
import { ActionPayload } from "./types";

export const initialState: TodoState = {
    search: '',
    status: TodoStatus.ALL,
    todos: [],
    loading: false,
    error: ''
};

export const TodoReducer = (state: TodoState = initialState, action: any): TodoState => {

    const payload: ActionPayload = action.payload;

    switch(action.type) {

        case SEARCH_UPDATE:

            return {
                ...state,
                search: payload.title || ''
            };

        case UPDATE_STATUS:

            return {
                ...state,
                status: payload.status || TodoStatus.ALL
            };

        case REQUEST_TODOS:

            return {
                ...state,
                loading: true
            };

        case SUCCESS_TODOS:

            return {
                ...state,
                loading: false,
                todos: payload.todos?.map(todo => ({
                    completed: todo.completed,
                    id: todo.id,
                    title: todo.title
                })) || [],
                error: ''
            };

        case FAILURE_TODOS:

            return {
                ...state,
                loading: false,
                error: payload.error || ''
            };

        default: 
            return state;
    }

};

export default TodoReducer;