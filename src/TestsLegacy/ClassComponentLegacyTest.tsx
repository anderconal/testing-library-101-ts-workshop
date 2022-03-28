import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import * as React from 'react';
import { expect } from 'chai';
import { ClassComponent } from '../ClassComponent/ClassComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Unit tests with Mocha, Chai and Enzyme (legacy): Testing Library 101 TypeScript Workshop', () => {
  it('increments count on button click', () => {
    // Arrange
    const shallowWrapper = shallow<ClassComponent>(<ClassComponent />);
    expect(shallowWrapper.state().count).to.eq(0);

    // Act
    shallowWrapper.instance().handleClick();

    // Assert
    expect(shallowWrapper.state().count).to.eq(1);
  });
});
