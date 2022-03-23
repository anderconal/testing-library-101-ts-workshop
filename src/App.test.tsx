import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Unit tests with Jest and Testing Library: Testing Library 101 TypeScript Workshop', () => {
  test('renders learn react link', () => {
    // Arrange + Act
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);

    // Assert
    expect(linkElement).toBeInTheDocument();
  });

  test('increments count on button click', () => {
    // Arrange
    render(<App />);
    expect(screen.getByText(/you clicked 0 times/i)).toBeInTheDocument();

    // Act
    const clickMeButton = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(clickMeButton);

    // Assert
    expect(screen.queryByText(/you clicked 0 times/i)).not.toBeInTheDocument();
    expect(screen.getByText(/you clicked 1 times/i)).toBeInTheDocument();
  });
});
