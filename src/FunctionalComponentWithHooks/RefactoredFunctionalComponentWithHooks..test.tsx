import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import {RefactoredFunctionalComponentWithHooks} from './RefactoredFunctionalComponentWithHooks';

describe('Unit tests with Jest and Testing Library: Testing Library 101 TypeScript Workshop', () => {
    test('RefactoredFunctionalComponentWithHooks increments count on button click', () => {
        // Arrange
        render(<RefactoredFunctionalComponentWithHooks/>);
        expect(screen.getByText(/you clicked 0 times/i)).toBeInTheDocument();

        // Act
        const clickMeButton = screen.getByRole('button', {name: /click me/i});
        fireEvent.click(clickMeButton);

        // Assert
        expect(screen.queryByText(/you clicked 0 times/i)).not.toBeInTheDocument();
        expect(screen.getByText(/you clicked 1 times/i)).toBeInTheDocument();
    });
});
