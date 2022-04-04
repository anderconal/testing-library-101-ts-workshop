describe('When load home page', () => {
  before(() => {
    cy.visit('/');
  });

  it('increments count on button click', () => {
    // Arrange
    cy.contains('You clicked 0 times').should('exist');

    // Act
    const clickMeButton = cy.get('button').contains('Click me');
    clickMeButton.click();

    // Assert
    cy.contains('You clicked 0 times').should('not.exist');
    cy.contains('You clicked 1 times').should('exist');
  });
});
