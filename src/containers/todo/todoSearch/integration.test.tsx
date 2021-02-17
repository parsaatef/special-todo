
import React from 'react';
import { mount } from 'enzyme';
import { findTestEl, storeFactory, todosMock } from '../../../helper/testUtils';
import { Provider } from 'react-redux';
import { initialState } from 'redux/todo/reducer';
import TodoSearchContainer from './TodoSearchContainer';
import { selectSearch, selectTodos } from 'redux/todo/selectors';
import { AppStore } from 'redux/store';
import moxios from 'moxios';

const setup = (store: AppStore) => {

    return mount(
        <Provider store={store}>
            <TodoSearchContainer />
        </Provider>
    );
};

describe('TodoSearch Integration with Redux', () => {

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
     * 2. filterBySearch action work accurately
     * 3. reducer work well
     */
    test("Checks search input work well and is able to save in the store", (done) => {

        const wrapper = setup(store);

        const todos = todosMock;

        const title = 'Hello';

        const filteredTodos = todos.filter(todo => todo.title.includes(title));

        const inputBox = findTestEl(wrapper, 'todo-search-input').at(1);

        const mockEvent = { target: { value: title } };

        inputBox.simulate("change", mockEvent);

        moxios.wait(() => {

            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: filteredTodos
            }).then(() => {

                const newSearch = selectSearch(store.getState());
                
                expect(newSearch).toBe(title);

                const newState = selectTodos(store.getState());

                expect(newState).toEqual(filteredTodos);
                
                done();

            });
        });

    });

});
