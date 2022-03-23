import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ClassComponent } from '../ClassComponent/ClassComponent';

describe('Unit tests with Enzyme (legacy): Testing Library 101 TypeScript Workshop', () => {
    it('increments count on button click', () => {
        // Arrange
        const shallowWrapper = shallow<ClassComponent>(<ClassComponent />);
        expect(shallowWrapper.state().count).to.eq(0);

        // Act
        shallowWrapper.find('button').simulate('click');  
        
        // Assert
        expect(shallowWrapper.state().count).to.eq(1);
    });
});
    