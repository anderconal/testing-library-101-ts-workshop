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
    * // TODO Add branch link
* Instruction
    * Understand
        * [ClassComponent.tsx](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/ClassComponent/ClassComponent.tsx)
        * [ClassComponentLegacyTest.tsx](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/TestsLegacy/ClassComponentLegacyTest.tsx)
    * Refactor
        * [ClassComponent.tsx](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/ClassComponent/ClassComponent.tsx)
            * Rename `count` to be `kakafuti` and save
            * What happened?
            * Revert the changes
            * Remove
              the `<p>You clicked {this.state.count} times</p>` [line](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/ClassComponent/ClassComponent.tsx#L18)
              and save
            * What happened?
            * Revert the changes
    * Time estimation
        * 30 minutes

## Practical exercise 02

* Branch
    * // TODO Add branch link
* Instruction
    * Understand
        * [FunctionalComponentWithHooks](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/FunctionalComponentWithHooks.tsx) (
          what have changed
          from [Class Component]([ClassComponent.tsx](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/ClassComponent/ClassComponent.tsx)))
          . What happened
          with [Class component test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/TestsLegacy/ClassComponentLegacyTest.tsx)
          ?
        * [FunctionalComponentWithHooks test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/FunctionalComponentWithHooks.test.tsx)
        * [RefactoredFunctionalComponentWithHooks test]()
        * The difference
          between [Class component test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/TestsLegacy/ClassComponentLegacyTest.tsx)
          and [FunctionalComponentWithHooks test](https://github.com/anderconal/testing-library-101-ts-workshop/blob/main/src/FunctionalComponentWithHooks/FunctionalComponentWithHooks.test.tsx)
          or [RefactoredFunctionalComponentWithHooks test]()
    * Refactor
        * Move the `<button onClick={() => this.handleClick()}>Click me</button>` [line]() to be the last button of the
          section and save. What happened?
        * Update the `<p>You clicked {this.state.count} times</p>` [line]() to
          be `<h4>You clicked {this.state.count} times</h4>` and save. What happened?
    * Time estimation
        * 30 minutes

## Practical exercise 03

* Branch
    * // TODO Add branch link
* Instruction
    * Understand
        * [Firing events with Testing Library and reacting to refactors tests]()
    * Refactor
        * Try to broke the tests performing the actions described in exercises 01 and 02. What happened?
    * Time estimation
        * 10 minutes