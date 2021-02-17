import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../reducer";
import { Todo, TodoStatus } from "../../types/todo";
import { FAILURE_TODOS, REQUEST_TODOS, SEARCH_UPDATE, SUCCESS_TODOS, UPDATE_STATUS } from "./constants";

export interface ActionPayload {
    title?: string;
    status?: TodoStatus;
    todos?: Todo[];
    error?: string
}

export type SearchUpdateAction = Action<typeof SEARCH_UPDATE> & {
    payload: {
        title: ActionPayload['title'];
    }
};

export type UpdateStatusAction = Action<typeof UPDATE_STATUS> & {
    payload: {
        status: ActionPayload['status']
    }
}

export type RequestTodosAction = Action<typeof REQUEST_TODOS>;

export type SuccessTodosAction = Action<typeof SUCCESS_TODOS> & {
    payload: {
        todos: ActionPayload['todos']
    }
};

export type FailureTodosAction = Action<typeof FAILURE_TODOS> & {
    payload: {
        error: ActionPayload['error']
    }
};


export type DispatchActionTypes = SearchUpdateAction | 
    UpdateStatusAction | RequestTodosAction | 
    SuccessTodosAction | FailureTodosAction;

export type TodoThunkResult = ThunkAction<
    Promise<void>,
    RootState,
    undefined,
    DispatchActionTypes
>;

export type TodoThunkDispatch = ThunkDispatch<RootState, undefined, DispatchActionTypes>;
