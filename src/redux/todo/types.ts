import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../reducer";
import { Todo, TodoStatus } from "../../types/todo";
import { FAILURE_TODOS, REQUEST_TODOS, SEARCH_UPDATE, SUCCESS_TODOS, UPDATE_STATUS } from "./constants";

export type SearchUpdateAction = Action<typeof SEARCH_UPDATE> & {
    payload: {
        title: string;
    }
};

export type UpdateStatusAction = Action<typeof UPDATE_STATUS> & {
    payload: {
        status: TodoStatus
    }
}

export type RequestTodosAction = Action<typeof REQUEST_TODOS>;

export type SuccessTodosAction = Action<typeof SUCCESS_TODOS> & {
    payload: {
        todos: Todo[]
    }
};

export type FailureTodosAction = Action<typeof FAILURE_TODOS> & {
    payload: {
        error: string
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
