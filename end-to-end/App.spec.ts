import { Selector } from "testcafe";
import { screen } from '@testing-library/testcafe';

fixture `End-to-end tests with TestCafe: Testing Library 101 TypeScript Workshop`
    .page`https://anderconal.github.io/testing-library-101-ts-workshop/`;

test('renders learn react link', async (t) => {
    await t.expect(Selector(screen.getByText(/learn react/i)).exists).ok();
});

test('increments count on button click', async (t) => {
    // Arrange
    await t.expect(Selector(screen.getByText(/you clicked 0 times/i)).exists).ok();

    // Act
    const clickMeButton = screen.getByRole('button', { name: /click me/i });
    await t.click(clickMeButton);

    // Assert
    await t.expect(Selector(screen.queryByText(/you clicked 0 times/i)).exists).notOk();
    await t.expect(Selector(screen.getByText(/you clicked 1 times/i)).exists).ok();
});