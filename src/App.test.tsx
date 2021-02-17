import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { findTestEl } from 'helper/testUtils';

test('renders App without crashing', () => {
    
    const wrapper = mount(<App />);

    const component = findTestEl(wrapper, 'component-app');

    expect(component.length).toBe(1);

});
