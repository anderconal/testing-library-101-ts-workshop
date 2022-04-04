// @ts-ignore
describe('End-to-end tests with Cypress: Testing Library 101 TypeScript Workshop', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Plain Cypress: increments count on button click', () => {
    // Arrange
    cy.contains('You clicked 0 times').should('exist');

    // Act
    const clickMeButton = cy.get('button').contains('Click me');
    clickMeButton.click();

    // Assert
    cy.contains('You clicked 0 times').should('not.exist');
    cy.contains('You clicked 1 times').should('exist');
  });

  it('Cypress with Testing Library: increments count on button click', () => {
    // Arrange
    cy.findByText(/you clicked 0 times/i).should('exist');

    // Act
    cy.findByRole('button', { name: /click me/i }).click();

    // Assert
    cy.findByText(/you clicked 0 times/i).should('not.exist');
    cy.findByText(/you clicked 1 times/i).should('exist');
  });
});
