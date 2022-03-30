import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import * as React from 'react';
import { expect } from 'chai';
import { ClassComponent } from '../ClassComponent/ClassComponent';
import { FunctionalComponentWithHooks } from '../FunctionalComponentWithHooks/FunctionalComponentWithHooks';
import { RefactoredFunctionalComponentWithHooks } from '../FunctionalComponentWithHooks/RefactoredFunctionalComponentWithHooks';

Enzyme.configure({ adapter: new Adapter() });

describe('Unit tests with Mocha, Chai and Enzyme (legacy): Testing Library 101 TypeScript Workshop', () => {
  describe('Enzyme old way', () => {
    it('ClassComponent beginning of time increments count on button click', () => {
      // Arrange
      const shallowWrapper = shallow<ClassComponent>(<ClassComponent />);
      expect(shallowWrapper.state().count).to.eq(0);

      // Act
      shallowWrapper.instance().handleClick();

      // Assert
      expect(shallowWrapper.state().count).to.eq(1);
    });
  });

  describe('Enzyme new way', () => {
    it('ClassComponent increments count on button click', () => {
      // Arrange
      const shallowWrapper = shallow<ClassComponent>(<ClassComponent />);
      expect(shallowWrapper.find('p').text()).to.eq('You clicked 0 times');

      // Act
      shallowWrapper.find('button').simulate('click');

      // Assert
      expect(shallowWrapper.find('p').text()).to.eq('You clicked 1 times');
    });

    it('FunctionalComponentWithHooks increments count on button click', () => {
      // Arrange
      const shallowWrapper = shallow<ClassComponent>(
        <FunctionalComponentWithHooks />
      );
      expect(shallowWrapper.find('p').text()).to.eq('You clicked 0 times');

      // Act
      shallowWrapper.find('button').first().simulate('click');

      // Assert
      expect(shallowWrapper.find('p').text()).to.eq('You clicked 1 times');
    });

    it('FunctionalComponentWithHooks increments count on button click', () => {
      // Arrange
      const shallowWrapper = shallow(
        <RefactoredFunctionalComponentWithHooks />
      );
      expect(shallowWrapper.find('p').text()).to.eq('You clicked 0 times');

      // Act
      shallowWrapper.find('button').first().simulate('click');

      // Assert
      expect(shallowWrapper.find('p').text()).to.eq('You clicked 1 times');
    });
  });
});
