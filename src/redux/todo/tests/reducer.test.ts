import { todosMock } from "helper/testUtils";
import { Todo, TodoStatus } from "types/todo";
import { 
    searchUpdate,
    updateStatus,
    requestTodos,
    successTodos,
    failureTodos
} from "../actions";
import TodoReducer, { initialState } from "../reducer";

describe('Todo Reducer', () => {

    test("when action is `searchUpdate`", () => {

        const searchVal = 'test';

        const newState = TodoReducer(initialState, searchUpdate(searchVal));

        expect(newState.search).toBe(searchVal);

    });

    test("when action is `updateStatus`", () => {

        const status = TodoStatus.COMPLETED;

        const newState = TodoReducer(initialState, updateStatus(status));

        expect(newState.status).toBe(status);

    });

    test("when action is `requestTodos`", () => {

        const newState = TodoReducer(initialState, requestTodos());

        expect(newState.loading).toBe(true);

    });

    test("when action is `successTodos`", () => {

        const todos: Todo[] = todosMock.map(item => {
            return {
                ...item,
                userId: 1
            };
        });

        const newState = TodoReducer(initialState, successTodos(todos));

        expect(newState.todos).toEqual(todosMock);

    });

    test("when action is `failureTodos`", () => {

        const error = 'test';

        const newState = TodoReducer(initialState, failureTodos(error));

        expect(newState.error).toBe(error);

    });

});