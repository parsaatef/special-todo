
import React from 'react';
import { mount } from 'enzyme';
import { findTestEl, storeFactory, todosMock } from '../../../helper/testUtils';
import { Provider } from 'react-redux';
import { initialState } from 'redux/todo/reducer';
import { selectSearch, selectStatus, selectTodos } from 'redux/todo/selectors';
import { AppStore } from 'redux/store';
import moxios from 'moxios';
import TodoStatusFilterContainer from './TodoStatusFilterContainer';
import { TodoStatus } from 'types/todo';

const setup = (store: AppStore) => {

    return mount(
        <Provider store={store}>
            <TodoStatusFilterContainer />
        </Provider>
    );
};

describe('TodoStatusFilter Integration with Redux', () => {

    const state = {
        todo: initialState
    };

    const store = storeFactory(state);

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    /**
     * When this test works truly, that means: 
     * 1. component work correctly
     * 2. filterByStatus action work accurately
     * 3. reducer work well
     */
    test("Checks search input work well and is able to save in the store", (done) => {

        const wrapper = setup(store);

        const todos = todosMock;

        const status = TodoStatus.UNCOMPLETED;

        const filteredTodos = todos.filter(todo => todo.completed === false);

        const selectBox = findTestEl(wrapper, 'todo-status-select').at(0);

        console.log(selectBox.debug());

        const mockEvent = { target: { value: status } };

        selectBox.simulate("change", mockEvent);

        const newStatus = selectStatus(store.getState());
                
        expect(newStatus).toBe(status);

        moxios.wait(() => {

            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: filteredTodos
            }).then(() => { console.log("---store.getState()---", store.getState());



                //const newTodos = selectTodos(store.getState());

                //expect(newTodos).toEqual(filteredTodos);
                
                done();

            });
        });

    });

});
