import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { findTestEl } from '../../../helper/testUtils';
import TodoStatusFilter, { Props } from './TodoStatusFilter';
import { getTodoStatuses } from '../../../helper/general';
import { TodoStatus } from '../../../types/todo';

const initialProps = {
    updateStatus: jest.fn(),
    status: TodoStatus.ALL
};

const setup = (props: Partial<Props> = initialProps) => {

    const finalProps = {
        ...initialProps,
        ...props
    };

    return mount(<TodoStatusFilter {...finalProps} />);
};

describe('TodoStatusFilter Component Unit Test', () => {

    test("renders without error" , () => {

        const wrapper = setup();

        const component = findTestEl(wrapper, 'component-todo-status-filter');

        expect(component.length).toBe(1);

    });

    describe("change search input value", () => {

        let mockSetStatus = jest.fn();

        let wrapper: ReactWrapper;

        let value = getTodoStatuses[1].value;

        beforeEach(() => {

            mockSetStatus.mockClear();

            initialProps.updateStatus.mockClear();

            React.useState = jest.fn(() => ["", mockSetStatus]);
    
            wrapper = setup();
    
            const selectBox = findTestEl(wrapper, 'todo-status-select').at(0);

            const mockEvent = { target: { value } };
    
            selectBox.simulate("change", mockEvent);

        });

        test("check set state of controlled select", () => {
    
            expect(mockSetStatus).toBeCalledTimes(1);

            expect(mockSetStatus).toHaveBeenCalledWith(value);
    
        });
    
        test("check `updateStatus` prop", () => {
            
            const updateStatusMock = wrapper.prop('updateStatus');
    
            expect(updateStatusMock).toBeCalledTimes(1);
    
            expect(updateStatusMock).toHaveBeenCalledWith(value);  
    
        });

    });

});
