import React from 'react';
import { shallow } from 'enzyme';
import { findTestEl, todosMock } from '../../helper/testUtils';
import TodoPage, { Props } from './TodoPage';

const initialProps = {
    todos: [],
    loading: false
};

const setup = (props: Partial<Props> = initialProps) => {

    const finalProps = {
        ...initialProps,
        ...props
    };

    return shallow(<TodoPage {...finalProps} />);
};

describe("TodoPage Component Unit Test", () => {

    test("renders without error", () => {
    
        const wrapper = setup();
    
        const component = findTestEl(wrapper, 'component-todo-page');
    
        expect(component.length).toBe(1);
    
    });

    test("renders correctly when `todos` prop is empty" , () => {

        const wrapper = setup();
    
        const todoList = findTestEl(wrapper, 'todo-page-list');

        expect(todoList.length).toBe(0);

        const todoEmpty = findTestEl(wrapper, 'todo-page-empty');

        expect(todoEmpty.length).toBe(1);

    });

    test("renders correctly when `todos` prop is not empty" , () => {

        const todos = todosMock;

        const wrapper = setup({ todos });
    
        const todoList = findTestEl(wrapper, 'todo-page-list');

        expect(todoList.length).toBe(1);

        const todoEmpty = findTestEl(wrapper, 'todo-page-empty');

        expect(todoEmpty.length).toBe(0);

    });

    test("renders correctly when `loading` prop is true" , () => {

        const wrapper = setup({ loading: true });
    
        const loading = findTestEl(wrapper, 'todo-page-loading');

        expect(loading.length).toBe(1);

    });

    test("renders correctly when `loading` prop is false" , () => {

        const wrapper = setup();
    
        const loading = findTestEl(wrapper, 'todo-page-loading');

        expect(loading.length).toBe(0);

    });

});