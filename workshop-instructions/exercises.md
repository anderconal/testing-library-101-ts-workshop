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
            * Try to broke the tests performing the actions described in exercises 01 and 02. What happened?
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
    * Time estimation
        * to minutes, depending on the group

## Practical exercise 06

* Branch
    * [main](https://github.com/anderconal/testing-library-101-ts-workshop/tree/main)
* Instruction
    * Time estimation
        * to minutes, depending on the group

## Practical exercise 07

* Branch
    * [main](https://github.com/anderconal/testing-library-101-ts-workshop/tree/main)
* Instruction
    * Time estimation
        * to minutes, depending on the group

## Practical exercise 08

* Branch
    * [main](https://github.com/anderconal/testing-library-101-ts-workshop/tree/main)
* Instruction
    * Time estimation
        * to minutes, depending on the group

## Practical exercise 09

* Branch
    * [main](https://github.com/anderconal/testing-library-101-ts-workshop/tree/main)
* Instruction
    * Time estimation
        * to minutes, depending on the group