import React from 'react';
import { shallow } from 'enzyme';
import { findTestEl } from '../../../helper/testUtils';
import TodoItem, { Props } from './TodoItem';

const initialProps = {
    completed: false,
    title: "",
    orderNumber: 1
};

const setup = (props: Partial<Props> = initialProps) => {

    const finalProps = {
        ...initialProps,
        ...props
    };

    return shallow(<TodoItem {...finalProps} />);
};

describe("TodoItem Component Unit Test", () => {

    test("renders without error", () => {
    
        const wrapper = setup();
    
        const component = findTestEl(wrapper, 'component-todo-item');
    
        expect(component.length).toBe(1);
    
    });
    
    test("renders correctly when `completed` prop is true" , () => {

        const wrapper = setup({ completed: true });
    
        const statusEl = findTestEl(wrapper, 'todo-item-status');

        expect(statusEl.length).toBe(1);

        expect(statusEl.text()).toBe('Yes');

    });

    test("renders correctly when `completed` prop is false" , () => {

        const wrapper = setup({ completed: false });
    
        const statusEl = findTestEl(wrapper, 'todo-item-status');

        expect(statusEl.length).toBe(1);

        expect(statusEl.text()).toBe('No');

    });

    test("renders correctly for specific `title` prop" , () => {

        const title = 'Test title for todo';

        const wrapper = setup({ title });
    
        const titleEl = findTestEl(wrapper, 'todo-item-title');

        expect(titleEl.length).toBe(1);

        expect(titleEl.text()).toBe(title);

    });

    test("renders correctly for specific `orderNumber` prop" , () => {

        const number = 121;

        const wrapper = setup({ orderNumber: number });
    
        const orderEl = findTestEl(wrapper, 'todo-item-order');

        expect(orderEl.length).toBe(1);

        expect(+orderEl.text()).toBe(number);

    });

});


