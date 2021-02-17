import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { findTestEl } from '../../../helper/testUtils';
import TodoSearch, { Props } from './TodoSearch';

const initialProps = {
    searchUpdate: jest.fn(),
    search: ''
};

const setup = (props: Partial<Props> = initialProps) => {

    const finalProps = {
        ...initialProps,
        ...props
    };

    return mount(<TodoSearch {...finalProps} />);
};

describe('TodoSearch Component Unit Test', () => {

    test("renders without error" , () => {

        const wrapper = setup();

        const component = findTestEl(wrapper, 'component-todo-search');

        expect(component.length).toBe(1);

    });

    describe("change search input value", () => {

        let mockSetSearchValue = jest.fn();

        let wrapper: ReactWrapper;

        let value = 'Custom Search';

        beforeEach(() => {

            mockSetSearchValue.mockClear();

            initialProps.searchUpdate.mockClear();

            React.useState = jest.fn(() => ["", mockSetSearchValue]);
    
            wrapper = setup();
    
            const inputBox = findTestEl(wrapper, 'todo-search-input').at(0);

            const mockEvent = { target: { value } };
    
            inputBox.simulate("change", mockEvent);

        });

        test("check set state of controlled input", () => {
    
            expect(mockSetSearchValue).toBeCalledTimes(1);

            expect(mockSetSearchValue).toHaveBeenCalledWith(value);
    
        });
    
        test("check `searchUpdate` prop", () => {
            
            const searchUpdateMock = wrapper.prop('searchUpdate');
    
            expect(searchUpdateMock).toBeCalledTimes(1);
    
            expect(searchUpdateMock).toHaveBeenCalledWith(value);  
    
        });

    });

});
