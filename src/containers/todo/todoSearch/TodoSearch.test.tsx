import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findTestEl } from '../../../helper/testUtils';
import TodoSearch, { Props } from './TodoSearch';

const initialProps = {
    searchUpdate: jest.fn()
};

const setup = (props: Partial<Props> = initialProps) => {

    const finalProps = {
        ...initialProps,
        ...props
    };

    return shallow(<TodoSearch {...finalProps} />);
};

describe('TodoSearch Component Unit Test', () => {

    test("renders without error" , () => {

        const wrapper = setup();

        const component = findTestEl(wrapper, 'component-todo-search');

        expect(component.length).toBe(1);

    });

    describe("change search input value", () => {

        let mockSetSearchValue = jest.fn();

        let wrapper: ShallowWrapper;

        let value = 'Custom Search';

        beforeEach(() => {

            mockSetSearchValue.mockClear();

            React.useState = jest.fn(() => ["", mockSetSearchValue]);
    
            wrapper = setup();
    
            const inputBox = findTestEl(wrapper, 'todo-search-input');
    
            const mockEvent = { target: { value } };
    
            inputBox.simulate("change", mockEvent);

        });

        test("check set state of controlled input", () => {
    
            expect(mockSetSearchValue).toHaveBeenCalledWith(value);
    
            expect(mockSetSearchValue).toBeCalledTimes(1);
    
        });
    
        test("check `searchUpdate` prop", () => {
            
            const searchUpdateMock = wrapper.prop('searchUpdate');
    
            expect(searchUpdateMock).toBeCalledTimes(1);
    
            expect(searchUpdateMock).toHaveBeenCalledWith(value);  
    
        });

    });

});
