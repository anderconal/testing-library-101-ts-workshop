import { Selector } from "testcafe";
import { screen } from '@testing-library/testcafe';

fixture `Testing Library 101 TypeScript Workshop`
    .page`https://anderconal.github.io/testing-library-101-ts-workshop/`;

test('renders learn react link', async (t) => {
    await t.expect(Selector(screen.getByText(/learn react/i)).exists).ok();
});
