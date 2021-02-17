import { TodoState, TodoStatus } from "types/todo";
import {
    SEARCH_UPDATE,
    UPDATE_STATUS,
    REQUEST_TODOS,
    SUCCESS_TODOS,
    FAILURE_TODOS
} from './constants';

export const initialState: TodoState = {
    search: '',
    status: TodoStatus.ALL,
    todos: [],
    loading: false,
    error: ''
};

export const TodoReducer = (state: TodoState = initialState, action: any): TodoState => {

    switch(action.type) {
        case SEARCH_UPDATE:
            return state;

        default: 
            return state;
    }

};

export default TodoReducer;