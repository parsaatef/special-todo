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
import { storeFactory, todosMock } from '../../../helper/testUtils';
import { selectStatus, selectTodos } from '../selectors';
import { TodoStatus } from 'types/todo';

describe('Todo Redux Actions', () => {

    const state = {
        todo: initialState
    };
    
    test("returns an action with type `SEARCH_UPDATE`", () => {
        
        const searchedVal = 'test'

        const action = searchUpdate(searchedVal);

        expect(action).toEqual({
            type: SEARCH_UPDATE,
            payload: {
                title: searchedVal
            }
        });

    });

    test("returns an action with type `UPDATE_STATUS`", () => {
        
        const status = TodoStatus.COMPLETED;

        const action = updateStatus(status);

        expect(action).toEqual({
            type: UPDATE_STATUS,
            payload: {
                status
            }
        });

        const store = storeFactory(state);

        store.dispatch(updateStatus(status));

        const newState = selectStatus(store.getState());

        expect(newState).toEqual(status);

    });

    describe('getTodos action creator', () => {


        const store = storeFactory(state);

        const todos = todosMock;

        beforeEach(() => {
            moxios.install();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        test("add todos to state from server", () => {

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: todos
                });
            });

            return store.dispatch(getTodos())
                .then(() => {
                    const newState = selectTodos(store.getState());
                    expect(newState).toEqual(todos);
                })

        });
        
    });

});
