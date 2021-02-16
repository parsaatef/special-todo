import moxios from 'moxios';
import { 
    searchUpdate, 
    updateStatus,
    getTodos
} from '../actions';
import { 
    SEARCH_UPDATE, 
    UPDATE_STATUS
} from '../constants';
import { initialState } from '../reducer';
import { storFactory, todosMock } from '../../../helper/testUtils';
import { selectTodo } from '../selectors';

describe('Todo Redux Actions', () => {
    
    test("returns an action with type `SEARCH_UPDATE`", () => {
        
        const searchedVal = 'test'

        const action = searchUpdate(searchedVal);

        expect(action).toEqual({
            type: SEARCH_UPDATE,
            payload: {
                search: searchedVal
            }
        });

    });

    test("returns an action with type `UPDATE_STATUS`", () => {
        
        const status = 'completed';

        const action = updateStatus(status);

        expect(action).toEqual({
            type: UPDATE_STATUS,
            payload: {
                status: status
            }
        });

    });

    describe('getTodos action creator', () => {
    
        const state = {
            todo: initialState
        };

        const store = storFactory(state);

        const todos = todosMock;

        beforeEach(() => {
            moxios.install();

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: todos
                });
            });

        });

        afterEach(() => {
            moxios.uninstall();
        });

        test("add todos to state from server", () => {

            return store.dispatch(getTodos())
                .then(() => {
                    const newState = selectTodo(store.getState());
                    expect(newState.todos).toEqual(todos);
                })

        });

        test("add todos to state from server by `title` filter", () => {

            const title = 'Hello';

            return store.dispatch(getTodos(title))
                .then(() => {
                    const newState = selectTodo(store.getState());
                    expect(newState.todos).toEqual(
                        todos.filter(todo => todo.title.includes(title))
                    );
                })

        });

        test("add todos to state from server by `status` filter", () => {

            const status = 'uncompleted';

            return store.dispatch(getTodos('', status))
                .then(() => {
                    const newState = selectTodo(store.getState());
                    expect(newState.todos).toEqual(
                        todos.filter(todo => todo.completed === false)
                    );
                })

        });

        test("add todos to state from server by `status` and `title` filters", () => {

            const title = 'Hello';

            const status = 'completed';

            return store.dispatch(getTodos(title, status))
                .then(() => {
                    const newState = selectTodo(store.getState());
                    expect(newState.todos).toEqual(
                        todos.filter(todo => 
                            todo.completed === true &&
                            todo.title.includes(title)
                        )
                    );
                });

        });
        
    });

});
