import React from 'react';
import { shallow } from 'enzyme';
import { findTestEl, todosMock } from '../../../helper/testUtils';
import TodosList, { Props } from './TodosList';

const initialProps = {
    todos: []
};

const setup = (props: Partial<Props> = initialProps) => {

    const finalProps = {
        ...initialProps,
        ...props
    };

    return shallow(<TodosList {...finalProps} />);
};

describe("TodosList Component Unit Test", () => {

    test("renders without error", () => {
    
        const wrapper = setup();
    
        const component = findTestEl(wrapper, 'component-todos-list');
    
        expect(component.length).toBe(1);
    
    });
    
    test("list container renders correctly" , () => {

        const wrapper = setup();
    
        const listContainerEl = findTestEl(wrapper, 'todos-list-container');

        expect(listContainerEl.length).toBe(1);

    });

    test("renders correctly when `todos` prop is empty" , () => {

        const wrapper = setup();
    
        const todosItems = findTestEl(wrapper, 'todos-list-items');

        expect(todosItems.length).toBe(0);

    });

    test("renders correctly when `todos` prop is not empty" , () => {

        const todos = todosMock;

        const wrapper = setup({ todos });
    
        const todosItems = findTestEl(wrapper, 'todos-list-items');

        expect(todosItems.length).toBe(todos.length);

    });

});