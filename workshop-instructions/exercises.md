# Testing Library 101 Workshop by Ander Conal

## Thinking exercise 01

* Question
    * What is Testing Library for you?
* Instruction
    * You have 5 minutes to think and write down your answers
    * We have 5 minutes to discuss all the ideas
* Time estimation:
    * 10 minutes

## Thinking exercise 02

* Question
    * Write down an example on how would you currently write a Frontend test
* Instruction
    * You have 5 minutes to think and write down your answers
    * We have 5 minutes to discuss all the ideas
* Time estimation:
    * 10 minutes

## Resources for practical exercises

* Mob programming session
    * Requirements
        * [Visual Studio Code](https://code.visualstudio.com/)
        * [Microsoft Visual Studio Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

## Practical exercise 01

* Branch
    * [main](https://github.com/anderconal/testing-library-101-ts-workshop/tree/main)
* Instruction
    * Understand
        * [ClassComponent.tsx](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/ClassComponent/ClassComponent.tsx)
        * [Class component Enzyme old way test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/TestsLegacy/TestsLegacy.tsx#L14)
    * Refactor
        * [ClassComponent.tsx](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/ClassComponent/ClassComponent.tsx)
            * Run `npm run test:legacy:watch`
            * Rename `count` to be `kakafuti` and save
            * What happened?
            * Revert the changes
            * Remove
              the `<p>You clicked {this.state.count} times</p>` [line](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/ClassComponent/ClassComponent.tsx#L18)
              and save
            * What happened?
            * Revert the changes
    * Time estimation
        * 10 to 30 minutes, depending on the group

## Practical exercise 02

* Branch
    * [main](https://github.com/anderconal/testing-library-101-ts-workshop/tree/main)
* Instruction
    * Understand
        * [FunctionalComponentWithHooks](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/FunctionalComponentWithHooks.tsx) (
          what have changed
          from [Class Component]([ClassComponent.tsx](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/ClassComponent/ClassComponent.tsx)))
        * [FunctionalComponentWithHooks Enzyme new way test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/TestsLegacy/TestsLegacy.tsx#L40)
        * [RefactoredFunctionalComponentWithHooks](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/RefactoredFunctionalComponentWithHooks.tsx)
        * [RefactoredFunctionalComponentWithHooks Enzyme new way test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/TestsLegacy/TestsLegacy.tsx#L54)
        * The difference
          between [Class component Enzyme old way test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/TestsLegacy/TestsLegacy.tsx#L14)
          and [Class component Enzyme new way test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/TestsLegacy/TestsLegacy.tsx#L28)
          , [FunctionalComponentWithHooks Enzyme new way test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/TestsLegacy/TestsLegacy.tsx#L40)
          or [RefactoredFunctionalComponentWithHooks Enzyme new way test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/TestsLegacy/TestsLegacy.tsx#L54)
    * Refactor
        * Run `npm run test:legacy:watch`
        * Update
          the [Class component Enzyme old way test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/TestsLegacy/TestsLegacy.tsx#L14) `const shallowWrapper = shallow<ClassComponent>(<ClassComponent />);` [line](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/TestsLegacy/TestsLegacy.tsx#L16)
          to be `const shallowWrapper = shallow>(<FunctionalComponentWithHooks />);`. What happened
          with [Class component Enzyme old way test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/TestsLegacy/TestsLegacy.tsx#L14)
          ?
        * Revert the changes
        * Update
          the [RefactoredFunctionalComponentWithHooks](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/RefactoredFunctionalComponentWithHooks.tsx)
          moving
          the `<button onClick={() => setCount(count + 1)}>Click me</button>` [line](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/RefactoredFunctionalComponentWithHooks.tsx#L9)
          to be the last button of the section and save. What happened?
        * Revert the changes
        *
            * Update
              the [RefactoredFunctionalComponentWithHooks](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/RefactoredFunctionalComponentWithHooks.tsx)
              replacing
              the `<p>You clicked {this.state.count} times</p>` [line](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/RefactoredFunctionalComponentWithHooks.tsx#L8)
              with be `<h4>You clicked {this.state.count} times</h4>` and save. What happened?
        * Revert the changes
    * Time estimation
        * 10 to 30 minutes, depending on the group

## Practical exercise 03

* Branch
    * [main](https://github.com/anderconal/testing-library-101-ts-workshop/tree/main)
* Instruction
    * Understand
        * [ClassComponent test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/ClassComponent/ClassComponent.test.tsx)
        * [FunctionalComponentWithHooks test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/FunctionalComponentWithHooks.test.tsx)
        * [RefactoredFunctionalComponentWithHooks test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/RefactoredFunctionalComponentWithHooks..test.tsx)
    * Refactor
        * Run npm run
            * Try to broke the tests performing the actions described
              in[FunctionalComponentWithHooks test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/FunctionalComponentWithHooks.test.tsx)
              exercises 01 and 02. What happened?
    * Time estimation
        * 10 to 15 minutes, depending on the group

## Practical exercise 04

* Branch
    * [main](https://github.com/anderconal/testing-library-101-ts-workshop/tree/main)
* Instruction
    * Prepare a test for
      the [FunctionalComponentWithHooks](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/FunctionalComponentWithHooks.tsx)
      on which you assert the following elements have been rendered into the DOM
        * Button with default button role
        * Button with forced button role
        * Div with forced button role
    * Time estimation
        * 10 to 15 minutes, depending on the group

## Practical exercise 05

* Branch
    * [main](https://github.com/anderconal/testing-library-101-ts-workshop/tree/main)
* Instruction
    * Prepare a test for
      the [FunctionalComponentWithHooks](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/FunctionalComponentWithHooks.tsx)
      on which you assert the following elements have been rendered into the DOM
        * Anchor with href and default role link
        * Anchor without href and forced role link
        * Anchor without href and without role link
        * Div without href and with role link
    * Time estimation
        * 10 to 15 minutes, depending on the group

## Practical exercise 06

* Branch
    * [main](https://github.com/anderconal/testing-library-101-ts-workshop/tree/main)
* Instruction
    * Prepare a test for
      the [FunctionalComponentWithHooks](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/FunctionalComponentWithHooks.tsx)
      on which you assert the following elements have been rendered into the DOM
        * Heading with default heading role
        * Heading with forced heading role
        * Div with forced heading role and aria-level 3
        * Heading with aria-level 4
    * Refactor the HTML so *Div with forced heading role and aria-level 3* has `aria-level=4` and save. What happened?
    * Refactor the HTML so *Heading with aria-level 4* uses `h5` and save. What happened?
    * Revert the changes
* Time estimation
    * 10 to 15 minutes, depending on the group

## Practical exercise 07

* Branch
    * [main](https://github.com/anderconal/testing-library-101-ts-workshop/tree/main)
* Instruction
    * Open
        * [FunctionalComponentWithHooks test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/FunctionalComponentWithHooks.test.tsx)
    * And play with
        * [prettyDOM](https://testing-library.com/docs/dom-testing-library/api-debugging/#prettydom)
        * [logRoles](https://testing-library.com/docs/dom-testing-library/api-debugging/#logroles)
        * [screen.debug()](https://testing-library.com/docs/queries/about/#screendebug)
            * This method is essentially a shortcut for `console.log(prettyDOM())`s. It supports debugging the document,
              a single element, or an array of elements.
        * [screen.logTestingPlaygroundURL()](https://testing-library.com/docs/queries/about/#screenlogtestingplaygroundurl)
    * Install the [browser extension](https://testing-library.com/docs/queries/about/#browser-extension)
    * Open [this URL](https://anderconal.github.io/testing-library-101-ts-workshop/) and play with the extension
    * Open [the playground](https://testing-playground.com/) and play with it
* Time estimation
    * 15 to 20 minutes, depending on the group

## Practical exercise 08

* Branch
    * [main](https://github.com/anderconal/testing-library-101-ts-workshop/tree/main)
* Instruction
    * Open
        * [FunctionalComponentWithHooks test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/FunctionalComponentWithHooks.test.tsx)
    * And play with
        * Replace the `expect(screen.queryByText(/you clicked 0 times/i)).not.toBeInTheDocument();` line
          with `expect(screen.getByText(/you clicked 0 times/i)).toBeInTheDocument();` and save
        * Read and understand the TestingLibraryElementError
        * Revert the changes
    * Open
        * [FunctionalComponentWithHooks](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/FunctionalComponentWithHooks.tsx)
    * And play with
        * Delete the `<p>You clicked {count} times</p>` line and save
            * Read and understand the TestingLibraryElementError
            * Revert the changes

* Time estimation
    * 10 to 15 minutes, depending on the group

## Practical exercise 09

* Branch
    * [main](https://github.com/anderconal/testing-library-101-ts-workshop/tree/main)
* Instruction
    * Understand
        * [App.test.tsx integration test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/App.test.tsx)
        * [App.spec.ts end-to-end test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/end-to-end/App.spec.ts)
    * Which differences can you appreciate regarding how are we querying the DOM?
    * Choose
      between [App.spec.ts end-to-end test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/end-to-end/App.spec.ts)
      and [Cypress option end-to-end test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/cypress/integration/App.spec.ts)
      and add more assertions so you can cover the test cases on practical exercises 04, 05 and 06
* Time estimation
    * 20 to 30 minutes, depending on the group