import axios, { AxiosResponse } from "axios";
import { API_URL } from "../../configs/configs";
import { Todo, TodoStatus } from "../../types/todo";
import { RootState } from "../reducer";
import { 
    FAILURE_TODOS, 
    REQUEST_TODOS, 
    SEARCH_UPDATE, 
    SUCCESS_TODOS, 
    UPDATE_STATUS 
} from "./constants";
import { selectSearch, selectStatus } from "./selectors";
import {
    FailureTodosAction, 
    RequestTodosAction, 
    SearchUpdateAction, 
    SuccessTodosAction, 
    TodoThunkDispatch, 
    TodoThunkResult, 
    UpdateStatusAction 
} from './types';

export const searchUpdate = (value: string): SearchUpdateAction => ({
    type: SEARCH_UPDATE,
    payload: {
        title: value
    }    
});

export const updateStatus = (status: TodoStatus): UpdateStatusAction => ({
    type: UPDATE_STATUS,
    payload: {
        status
    }
});

export const requestTodos = (): RequestTodosAction => ({
    type: REQUEST_TODOS
});

export const successTodos = (todos: Todo[]): SuccessTodosAction => ({
    type: SUCCESS_TODOS,
    payload: {
        todos
    }
});

export const failureTodos = (error: string): FailureTodosAction => ({
    type: FAILURE_TODOS,
    payload: {
        error
    }
});

export const getTodos = (title?: string, status?: TodoStatus): TodoThunkResult => 
async (dispatch) => {

    dispatch(requestTodos());

    try {

        let url = `${API_URL}/todos`;

        const params: {
            "title_like"?: string;
            completed?: boolean;
        } = {};

        if(title) {
            params["title_like"] = title;    
        }

        if(status && status !== TodoStatus.ALL) {
            params.completed = status === TodoStatus.COMPLETED;
        }

        const response: AxiosResponse<Todo[]> = await axios.get(url, {
            params
        });

        dispatch(successTodos(response.data));

    } catch(e) {

        dispatch(failureTodos('Fail to load todos'));

    }

};

export const filterBySearch = (value: string) => 
(dispatch: TodoThunkDispatch, getState: () => RootState) => {

    const status = selectStatus(getState());

    dispatch(searchUpdate(value));

    dispatch(
        getTodos(value, status)
    );

};

export const filterByStatus = (status: TodoStatus) => 
(dispatch: TodoThunkDispatch, getState: () => RootState) => {

    const title = selectSearch(getState());

    dispatch(updateStatus(status));

    dispatch(
        getTodos(title, status)
    );

};


