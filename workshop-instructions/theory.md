# Testing Library 101 Workshop by Ander Conal

## What is Testing Library?

Simple and complete testing utilities that encourage good testing practices

### Frameworks

* DOM
* React
* Reason
* Native
* Vue
* Marko
* Angular
* Preact
* Svelte
* Cypress
* Puppeteer
* Testcafe
* Nightwatch
* WebdriverIO

### Ecosystem

* jest-dom
* bs-jest-dom
* jest-native
* react-select-event
* eslint-plugin-testing-library
* eslint-plugin-jest-dom
* riot-testing-library
* jasmine-dom
* query-extensions
* rtl-simple-queries
* testing-library-selector

## Frontend Testing, Backend Testing... is Frontend Testing broken?

* Backend has tons of opinionated approaches to Testing
* Frontend, in the other hand... is Frontend Testing broken?
    * See [video](https://www.youtube.com/watch?v=SH7JSlc36uA)
    * Stop testing implementation details
        * See [here](https://kentcdodds.com/blog/avoid-the-test-user)
          and [here](https://kentcdodds.com/blog/testing-implementation-details)
    * Start testing how your web pages are used. Test your applications in the way the user would use them
        * See [here](https://testing-library.com/docs/guiding-principles/)
          and [here](https://twitter.com/kentcdodds/status/977018512689455106)
    * What you should avoid with Frontend Testing?
        * You may want to avoid the following implementation details:
            * Internal state of a component
            * Internal methods of a component
            * Lifecycle methods of a component
            * Child components

## Famous quotes

* [The more your tests resemble the way your software is used, the more confidence they can give you.](https://twitter.com/kentcdodds/status/977018512689455106)
* Tests only break when your app breaks, not implementation details
* Interact with your app the same way as your users
* Built-in selectors find elements the way users do to help you write inclusive code

## The Problem

* You want tests for your UI that avoid including implementation details and rather focus on making your tests give you
  the confidence for which they are intended.
* You want your tests to be maintainable so refactors (changes to implementation but not functionality) don't break your
  tests and slow you and your team down.

## The solution

* The Testing Library family of libraries is a very light-weight solution for testing without all the implementation
  details. The main utilities it provides involve querying for nodes similarly to how users would find them. In this
  way, testing-library helps ensure your tests give you confidence in your UI code.ç

## Guiding Principles

* [The more your tests resemble the way your software is used, the more confidence they can give you.](https://twitter.com/kentcdodds/status/977018512689455106)
* We try to only expose methods and utilities that encourage you to write tests that closely resemble how your web pages
  are used.
* If it relates to rendering components, then it should deal with DOM nodes rather than component instances, and it
  should not encourage dealing with component instances.
* It should be generally useful for testing the application components in the way the user would use it. We are making
  some trade-offs here because we're using a computer and often a simulated browser environment, but in general,
  utilities should encourage tests that use the components the way they're intended to be used.
* Utility implementations and APIs should be simple and flexible.

## Core API

* Queries
    * ByRole
    * ByLabelText
    * ByPlaceholderText
    * ByText
    * ByDisplayValue
    * ByAltText
    * ByTitle
    * ByTestId
* User Actions
    * Firing events
    * Async methods
    * Appearance and disappearance
    * Considerations for fireEvent
    * Using Fake Timers
* Advanced
    * Accessibility
    * Custom Queries
    * Debugging
    * Querying Within Elements
    * Configuration Options

## Queries

### Queries: [Types of Queries](https://testing-library.com/docs/queries/about/#types-of-queries)

* Single Elements
    * getBy...
    * queryBy...
    * findBy...
        * findBy methods are a combination of getBy* queries and waitFor
* Multiple Elements
    * getAllBy...
    * queryAllBy...
    * findAllBy...
        * findBy methods are a combination of getBy* queries and waitFor

### Queries: [Summary Table](https://testing-library.com/docs/queries/about/#types-of-queries)

| Type of Query         | 0 Matches     | 1 Match        | \>1 Matches  | Retry (Async/Await) |
| --------------------- | ------------- | -------------- | ------------ | ------------------- |
| **Single Element**    |               |                |              |                     |
| `getBy...`            | Throw error   | Return element | Throw error  | No                  |
| `queryBy...`          | Return `null` | Return element | Throw error  | No                  |
| `findBy...`           | Throw error   | Return element | Throw error  | Yes                 |
| **Multiple Elements** |               |                |              |                     |
| `getAllBy...`         | Throw error   | Return array   | Return array | No                  |
| `queryAllBy...`       | Return `[]`   | Return array   | Return array | No                  |
| `findAllBy...`        | Throw error   | Return array   | Return array | Yes                 |

### Queries: [Order of priority](https://testing-library.com/docs/queries/about/#priority)

1) **Queries Accessible to Everyone** Queries that reflect the experience of visual/mouse users as well as those that
   use assistive technology
    1) getByRole
        1) This should be your top preference for just about everything
    2) getByLabelText
        1) This method is really good for form fields. When navigating through a website form, users find elements using
           label text. This method emulates that behavior, so it should be your top preference
    3) getByPlaceholderText
        1) [A placeholder is not a substitute for a label](https://www.nngroup.com/articles/form-design-placeholders/).
           But if that's all you have, then it's better than alternatives
    4) getByText
        1) Outside of forms, text content is the main way users find elements. This method can be used to find
           non-interactive elements (like divs, spans, and paragraphs)
    5) getByDisplayValue
        1) The current value of a form element can be useful when navigating a page with filled-in values
2) **Semantic Queries** HTML5 and ARIA compliant selectors. Note that the user experience of interacting with these
   attributes varies greatly across browsers and assistive technology
    1) getByAltText
        1) If your element is one which supports `alt` text (`img`, `area`, `input`, and any custom element), then you
           can use this to find that element
    2) getByTitle
        1) The title attribute is not consistently read by screen readers, and is not visible by default for sighted
           users
3) **Test IDs**
    1) getByTestId
        1) The user cannot see (or hear) these, so this is only recommended for cases where you can't match by role or
           text or it doesn't make sense (e.g. the text is dynamic)

### Queries: getByRole

* This can be used to query every element that is exposed in
  the [accessibility tree](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree). With the `name` option
  you can filter the returned elements by their [accessible name](https://www.w3.org/TR/accname-1.1/)
* This should be your top preference for just about everything
* Most often, this will be used with the name option like so: `getByRole('button', {name: /submit/i})`
* Check the [list of roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles)

### Queries: [List of roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles)

[Table of HTML elements with their default and desired roles](https://www.w3.org/TR/html-aria/#docconformance)

### Queries: [Accessibility tree](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree)

* There are four things in an accessibility tree object
    * name
        * How can we refer to this thing?
    * description
        * How do we describe this thing?
    * role
        * What kind of thing is it? For example, is it a button, a nav bar, or a list of items?
    * state
        * Examples include checked or unchecked for checkboxes

### Queries: [Accessible name](https://www.w3.org/TR/accname-1.1/)

## General testing recommendations

* Always try to cover 3 phases (text copied
  from [here](https://docs.cypress.io/guides/getting-started/writing-your-first-test#Write-a-real-test))
    * Set up the application state.
    * Take an action.
    * Make an assertion about the resulting application state.
    * You might also see this phrased as
        * "Given, When, Then"
        * "Arrange, Act, Assert"
    * But the idea is: First you put the application into a specific state, then you take some action in the application
      that causes it to change, and finally you check the resulting application state.

## Recommendations, tooling and utilities

* [Debugging](https://testing-library.com/docs/dom-testing-library/api-debugging/)
    * [Automatic Logging](https://testing-library.com/docs/dom-testing-library/api-debugging/#automatic-logging)
    * [prettyDOM](https://testing-library.com/docs/dom-testing-library/api-debugging/#prettydom)
    * [logRoles](https://testing-library.com/docs/dom-testing-library/api-debugging/#logroles)
* [Queries](https://testing-library.com/docs/queries/about/#debugging)
    * [screen.debug()](https://testing-library.com/docs/queries/about/#screendebug)
    * [screen.logTestingPlaygroundURL()](https://testing-library.com/docs/queries/about/#screenlogtestingplaygroundurl)
    * [Manual Queries](https://testing-library.com/docs/queries/about/#manual-queries)
        * On top of the queries provided by the testing library, you can use the
          regular [`querySelector` DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) to
          query elements. Not e that using this as an escape hatch to query by class or id is not recommended because
          they are invisible to the user. Use a testid if you have to, to make your intention to fall back to
          non-semantic queries clear and establish a stable API contract in the HTML.
* [Browser extension](https://testing-library.com/docs/queries/about/#browser-extension)
* [Playground](https://testing-library.com/docs/queries/about/#browser-extension)

## [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Next steps, maybe the next workshop?

* Working with tables
* Working with lists
* Find only elements that are children of a specific element
    * To find only elements that are children of a specific element, you can use `within`
* Await changes in the DOM
    * As elements appear and disappear in response to actions, Async APIs like waitFor or findBy queries can be used to
      await the changes in the DOM
* Localization
    * Is not in the scope of this workshop but, just in case, here we have some ideas:
        * Their first bit of advice is to try to get the default text used in your tests. That will make everything much
          easier (more than just using this utility).
        * If that's not possible, then you're probably best to just stick with data-testids (which is not bad anyway).
    * My personal advice: if you are using or you think you'll be using localization, research and decide a strategy
      before starting