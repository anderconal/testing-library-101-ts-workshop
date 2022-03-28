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