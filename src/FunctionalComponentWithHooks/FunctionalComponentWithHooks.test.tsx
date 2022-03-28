import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { FunctionalComponentWithHooks } from './FunctionalComponentWithHooks';

describe('Unit tests with Jest and Testing Library: Testing Library 101 TypeScript Workshop', () => {
  test('FunctionalComponentWithHooks increments count on button click', () => {
    // Arrange
    render(<FunctionalComponentWithHooks />);
    expect(screen.getByText(/you clicked 0 times/i)).toBeInTheDocument();

    // Act
    const clickMeButton = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(clickMeButton);

    // Assert
    expect(screen.queryByText(/you clicked 0 times/i)).not.toBeInTheDocument();
    expect(screen.getByText(/you clicked 1 times/i)).toBeInTheDocument();
  });
});
