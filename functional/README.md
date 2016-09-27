# Functional programming

While a lot of this will be review, we need to go in depth on how these ideas are expressed in JavaScript, perhaps with some examples in other languages for comparison (not memorization!). But you should know this stuff inside-out and outside-in if you want to be a good JavaScript developer. And JS is going to be the fastest path to success for you. If you do well at that, then you can pick up other languages later.

## Paradigms

- [Imperative](https://en.wikipedia.org/wiki/Imperative_programming) vs. [Declarative](https://en.wikipedia.org/wiki/Declarative_programming)
- [Functional programming](https://en.wikipedia.org/wiki/Functional_programming) (FP)
- [Object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) (OOP)
- [Prototype-based programming](https://en.wikipedia.org/wiki/Prototype-based_programming)

## Functional concepts

- Immutability
- Referential transparencey and the substitution principle
- Pure functions
- First class functions
- Higher order functions
- Currying and partial application
- Recursion and tail recursion
- Pattern matching
- Memoization
- Monads, Monoids, Functors, Applicatives
- Lexical closures
- Lazy evaluation
- List comprehensions
- Garbage collection
- Decomposition of complex tasks
- Pipelining

## [Monads in JavaScript](https://curiosity-driven.org/monads-in-javascript)

These are easier than they look. They make coding fun again. And they will impress interviewers and other developers if you use them. Not required, but we can try to sneak them in.

- Identity monad
- Maybe monad
- List monad
- Continuation monad
- Do notation
- Chained calls

## Functional tools

We'll probably use the lovely [ramda](http://ramdajs.com/0.21.0/index.html) library for these, but we'll derive a few and we'll check the [lodash](https://lodash.com/docs) equivalents.

- compose
- concat
- curry
- drop
- filter
- find
- flatten
- head
- lens
- lift
- map
- memoize
- merge
- omit
- partial
- pick
- range
- reduce
- reject
- scan
- sort
- split
- tail
- take
- tap
- zip

## JavaScript

Some of this we can simply review. Other concepts we'll need to work through together, and you'll need to practice them. We will try to introduce the more obscure topics as necessary in context, so you see what they are needed for and how they solve individual problems.

There is a great reference on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

- Variables and scope
- Variable hoisting
- var, const, and let
- Closures
- Deep freeze
- Named functions
- Anonymous functions
- Fat arrow functions
- Method chains vs. function pipelines
- Arity, tuples
- Binding and partial application
- Managing control flow with functional combinators
- Functional error handling using monads
- Loops and conditionals
- The ternary operator
- Operator precedence
- Types and dynamic typing
- Pass by reference/pass by value
- Array, Set, Map, WeakMap, WeakSet
- Infinity, NaN, undefined, and null
- Parsing and type checking
- Object
- Booleans and boolean algebra (AND, OR, etc.)
- Symbols
- Math
- Dates and times (an ugly mess&mdash;use moment.js)
- Regular expressions
- JSON
- Promises (callbacks)
- Control flow
- Errors and error handling
- Generator functions
- Export and import (modules)
- The `this` keyword
- The `new` keyword
- Unary operators and arithmetic operators
- Increment and decrement
- Equality operators
- Assignment operators
- Default parameters
- Rest parameters
- Spread operator
- Destructuring
- JSON
- Linting [JavaScript](http://eslint.org/) and [JSON](http://jsonlint.com/)

## [Elm](http://elm-lang.org/)

If we have time, we'll do a bit of super basic Elm. This will help you to understand FP principles much better. JavaScript is actually a pretty crappy language for FP because of the dynamic typing, the lack of pattern matching, etc. Elm does these beautifully and simply (you won't want to go back to JavaScript).

- Tuples
- Lists
- Records
- Curried functions
- Pattern matching
- Types, union types, Maybe
- Type aliases
- Type annotation
- Functional composition

## <a href="https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)">SOLID principles</a> (OOP)

- [Single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
- [Open/closed principle](https://en.wikipedia.org/wiki/Open/closed_principle)
- [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle)
- [Interface segregation principle](https://en.wikipedia.org/wiki/Interface_segregation_principle)
- [Dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle)


